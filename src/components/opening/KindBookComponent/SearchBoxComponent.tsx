import styled from "styled-components";
import { useState, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  categoryState,
  resultListIndexState,
  resultListState,
  searchKeywordState,
} from "../../states/opening";
import { studyFormState } from "src/components/states/studyForm";
import { bookListState } from "src/components/states/book";

const SearchBoxInnerWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #222222;
  margin: 20px 0 10px 20px;
  line-height: 40px;
  height: 40px;
  padding: 0 0;
`;
const CategoryWrapper = styled.div`
  position: relative;
  float: left;
  width: 100px;
  height: 40px;
  margin: 10px 0 0 0;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;
const OpenIconBox = styled.div`
  position: absolute;
  top: 0px;
  right: 15px;
`;
const ModalWrapper = styled.div`
  position: absolute;
  text-align: center;
  background: #ffffff;
  border: 1px solid #f1f1f3;
  box-shadow: 3px 3px 15px -2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  color: #999999;
  width: 79px;
  top: 41px;
  z-index: 1;
`;
const ModalElement = styled.div`
  cursor: pointer;
  width: 79px;
  border-bottom: 1px solid #f1f1f3;
  border-collapse: collapse;
  display: flex;
  align-items: center;
  justify-content: left;
  &:last-child {
    border-bottom: 0;
  }
  &.on {
    color: #677ac7;
  }
`;
const ModalText = styled.div`
  margin: 0 0 0 20px;
`;
const SearchInput = styled.input`
  font-size: 14px;
  line-height: 20px;
  padding: 15px 0;
  border: 0;
  background: initial;
  height: 15px;
  outline: none;
  ::placeholder {
    color: #999999;
  }
`;
const SearchIconBox = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  cursor: pointer;
`;
const ClearIconBox = styled.div`
  position: absolute;
  top: 3px;
  right: 50px;
  cursor: pointer;
`;
const CategoryTitles = ["책", "저자", "관심책"];

export default function SearchBoxComponent(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [bookList] = useRecoilState(bookListState);
  const [category, setCategory] = useRecoilState(categoryState);
  const setResultList = useSetRecoilState(resultListState);
  const setResultListIndex = useSetRecoilState(resultListIndexState);
  const [searchWord, setSearchWord] = useRecoilState(searchKeywordState);
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  const inputRef = useRef<HTMLInputElement>(null);

  const search = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) routeResult();
  };
  const routeResult = () => {
    setSearchWord(inputRef.current.value);
    setResultListIndex(-1);
    inputRef.current.value
      ? setResultList(
          bookList.filter(
            (b) =>
              (category === 0
                ? b.title.indexOf(inputRef.current.value)
                : b.author.indexOf(inputRef.current.value)) !== -1,
          ),
        )
      : alert("검색어를 입력해주세요.");
  };
  const setCategoryFunction = (index) => {
    setCategory(index);
    setStudyForm({ ...studyForm, book: { title: "", author: "" } });
  };
  const clearSearchWord = () => {
    inputRef.current.value = "";
    setSearchWord("");
  };

  return (
    <SearchBoxInnerWrapper>
      <CategoryWrapper
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {CategoryTitles[category]}
        <OpenIconBox>
          <img src="/assets/detail/dropDown.svg" />
        </OpenIconBox>
      </CategoryWrapper>
      {isOpen && (
        <ModalWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {CategoryTitles.map((v, index) => {
            return (
              <ModalElement
                key={index}
                onClick={() => setCategoryFunction(index)}
                className={category === index ? "on" : ""}
              >
                <ModalText>{v}</ModalText>
              </ModalElement>
            );
          })}
        </ModalWrapper>
      )}
      <SearchInput
        type="text"
        name="searchWord"
        defaultValue={searchWord}
        placeholder={
          category !== 2 ? `검색어를 검색해주세요.` : `관심 책을 선택해주세요.`
        }
        onKeyUp={search}
        autoComplete="off"
        ref={inputRef}
        disabled={category === 2}
      />
      <SearchIconBox onClick={() => routeResult()}>
        <img src="/assets/search/search.svg" />
      </SearchIconBox>
      {searchWord && (
        <ClearIconBox onClick={() => clearSearchWord()}>
          <img src="/assets/search/searchclear.svg" />
        </ClearIconBox>
      )}
    </SearchBoxInnerWrapper>
  );
}
