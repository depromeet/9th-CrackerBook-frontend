import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../states";

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
  color: #677ac7;
  font-size: 14px;
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
  margin: 0 20px;
  justify-content: left;
  &:last-child {
    border-bottom: 0;
  },
`;
const SearchInput = styled.input`
  float: left;
  font-size: 14px;
  line-height: 20px;
  padding: 15px 0 0 0;
  border: 0;
  background: initial;
  height: 14px;
  outline: none;
  ::placeholder {
    color: #999999;
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
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
const CategoryTitles = ["책", "저자", "관심 책"];

export default function KindBookComponent(): JSX.Element {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useRecoilState(categoryState);
  const [searchWord, setSearchWord] = useState(
    Router.query.name ? Router.query.name : "",
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const search = (event) => {
    event.preventDefault();
    setSearchWord(event.target.value);
    if (event.keyCode === 13) routeResult();
  };
  const routeResult = () => !searchWord && alert("검색어를 입력해주세요.");
  const clearSearchWord = () => {
    const node = inputRef.current;
    node.value = "";
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
          <ModalElement onClick={() => setCategory(0)}>책</ModalElement>
          <ModalElement onClick={() => setCategory(1)}>저자</ModalElement>
          <ModalElement onClick={() => setCategory(2)}>관심책</ModalElement>
        </ModalWrapper>
      )}
      <SearchInput
        type="text"
        name="searchWord"
        defaultValue={searchWord}
        placeholder={
          category !== 2 ? `검색어를 검색해주세요` : `관심 책을 선택해주세요.`
        }
        onKeyUp={search}
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
