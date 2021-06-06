import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, historyState, inputClickState } from "./states/search";

const SearchBoxWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  line-height: 40px;
  width: 320px;
  height: 40px;
  margin: 60px 0px 10px -50px;
  border: 1px solid #ffd262;
  background: #ffffff;
`;
const SearchBoxInnerWrapper = styled.div`
  padding: 0 0 0 17px;
`;
const CategoryWrapper = styled.div`
  position: relative;
  float: left;
  width: 80px;
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
  left: 0px;
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
  padding: 11px 0;
  border: 0;
  background: initial;
  outline: none;
  ::placeholder {
    color: #999999;
    font-size: 14px;
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
`;
const SearchIconBox = styled.div`
  position: absolute;
  top: 3px;
  right: 20px;
  cursor: pointer;
`;
const ClearIconBox = styled.div`
  position: absolute;
  top: 3px;
  right: 50px;
  cursor: pointer;
`;
const CategoryTitles = ["책", "저자", "스터디"];

export default function SearchBoxComponent(): JSX.Element {
  const Router = useRouter();
  const [catagoryIsOpen, setCatagoryIsOpen] = useState(false);
  const [category, setCategory] = useRecoilState(categoryState);
  const [history, setHistory] = useRecoilState(historyState);
  const setInputClick = useSetRecoilState(inputClickState);
  const [searchWord, setSearchWord] = useState(
    Router.query.query ? Router.query.query : "",
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const searchKeyUp = (event) => {
    event.preventDefault();
    setCatagoryIsOpen(false);
    if (event.keyCode === 13) {
      setInputClick(false);
      gotoResultPage();
    }
  };

  const gotoResultPage = () => {
    setSearchWord(inputRef.current.value);
    if (!inputRef.current.value) {
      alert("검색어를 입력해주세요.");
      return;
    }
    Router.push({
      pathname: `/search/result`,
      query: { query: inputRef.current.value },
    });
    // history
    const historySplice = [...history];
    const historyIndex = historySplice.indexOf(`${inputRef.current.value}`);
    historyIndex !== -1 && historySplice.splice(historyIndex, 1);
    setHistory([`${inputRef.current.value}`, ...historySplice]);
  };

  const clearSearchWord = () => {
    inputRef.current.value = "";
    setSearchWord("");
  };

  return (
    <SearchBoxWrapper>
      <SearchBoxInnerWrapper>
        <CategoryWrapper
          onClick={() => {
            setCatagoryIsOpen(!catagoryIsOpen);
          }}
        >
          {CategoryTitles[category]}
          <OpenIconBox>
            <img src="/assets/opening/dropdown.svg" />
          </OpenIconBox>
        </CategoryWrapper>
        {catagoryIsOpen && (
          <ModalWrapper
            onClick={() => {
              setCatagoryIsOpen(!catagoryIsOpen);
            }}
          >
            {CategoryTitles.map((v, index) => {
              return (
                <ModalElement
                  key={index}
                  onClick={() => setCategory(index)}
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
          placeholder={`검색어를 입력해주세요.`}
          onKeyUp={searchKeyUp}
          ref={inputRef}
          autoComplete="off"
        />

        <SearchIconBox onClick={() => gotoResultPage()}>
          <img src="/assets/search/search.svg" />
        </SearchIconBox>
        {searchWord && (
          <ClearIconBox onClick={() => clearSearchWord()}>
            <img src="/assets/search/searchclear.svg" />
          </ClearIconBox>
        )}
      </SearchBoxInnerWrapper>
    </SearchBoxWrapper>
  );
}
