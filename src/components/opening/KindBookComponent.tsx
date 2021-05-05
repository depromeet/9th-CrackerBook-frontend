import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

const KindBookWrapper = styled.div`
  margin: 18px 0;
`;
const MainText = styled.div`
  margin: 0 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
`;
const SearchBoxInnerWrapper = styled.div`
  border-bottom: 1px solid #222222;
  margin: 88px 0 10px 20px;
  line-height: 40px;
  height: 40px;
  position: relative;
  padding: 0 0;
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
const InputSearch = styled.input`
  font-size: 14px;
  line-height: 20px;
  border: 0;
  width: 100%;
  display: block;
  margin: 0;
  padding: 11px 0 0;
  outline: none;
  ::placeholder {
    color: #999999;
  }
`;
const FavoriteWrapper = styled.div`
  position: relative;
  margin: 70px 0 0 20px;
`;
const FavoriteList = styled.div`
  position: relative;
  margin: 70px 0 0 20px;
`;

const FavoriteText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;

export default function KindBookComponent(props: {
  setDashoffset: (index: number) => void;
}): JSX.Element {
  const Router = useRouter();
  const [searchWord, setSearchWord] = useState(
    Router.query.name ? Router.query.name : "",
  );
  const inputRef = useRef();

  const search = (event) => {
    event.preventDefault();
    setSearchWord(event.target.value);
    if (event.keyCode === 13) routeResult();
  };

  const routeResult = () =>
    searchWord ? props.setDashoffset(50) : alert("검색어를 입력해주세요.");

  const clearSearchWord = () => {
    const node = inputRef.current as any;
    node.value = "";
  };

  return (
    <KindBookWrapper>
      <MainText>
        어떤 책으로
        <br />
        스터디를 하고 싶으세요?
      </MainText>
      <SearchBoxInnerWrapper>
        <InputSearch
          type="text"
          name="searchWord"
          defaultValue={searchWord}
          placeholder="검색어를 검색해 주세요."
          onKeyUp={search}
          ref={inputRef}
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
      <FavoriteWrapper>
        <FavoriteText>관심 책으로 스터디 개설하기</FavoriteText>
      </FavoriteWrapper>
      <FavoriteList></FavoriteList>
    </KindBookWrapper>
  );
}
