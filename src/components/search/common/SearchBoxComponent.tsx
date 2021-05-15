import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../states";

const SearchBoxWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  line-height: 40px;
  height: 40px;
  margin: 46px 20px 10px 40px;
  border: 1px solid #ffd262;
  border-radius: 20px;
  line-height: 40px;
  height: 40px;
`;
const ArrowLeft = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 13px;
  top: 54px;
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

  const routeResult = () =>
    searchWord
      ? Router.push({
          pathname: `/search/result/${searchWord}`,
        })
      : alert("검색어를 입력해주세요.");

  const clearSearchWord = () => {
    const node = inputRef.current;
    node.value = "";
    setSearchWord("");
  };

  return (
    <>
      <ArrowLeft>
        <Link href={Router.pathname === "/search" ? "/main/books" : "/search"}>
          <a>
            <img src="/assets/search/arrowleft.svg" />
          </a>
        </Link>
      </ArrowLeft>
      <SearchBoxWrapper>
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
            placeholder={
              category !== 2
                ? `검색어를 검색해주세요.`
                : `스터디를 선택해주세요.`
            }
            disabled={category === 2}
            onKeyUp={search}
            ref={inputRef}
          />

          {category !== 2 && (
            <>
              <SearchIconBox onClick={() => routeResult()}>
                <img src="/assets/search/search.svg" />
              </SearchIconBox>
              {searchWord && (
                <ClearIconBox onClick={() => clearSearchWord()}>
                  <img src="/assets/search/searchclear.svg" />
                </ClearIconBox>
              )}
            </>
          )}
        </SearchBoxInnerWrapper>
      </SearchBoxWrapper>
    </>
  );
}
