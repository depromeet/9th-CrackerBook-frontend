import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBoxWrapper = styled.div`
  position: relative;
`;
const ArrowLeft = styled.div`
  width: 45px;
  height: 45px;
  line-height: 45px;
  position: absolute;
  left: 20px;
  font-size: 19px;
`;
const SearchBoxInnerWrapper = styled.div`
  border: 1px solid #ffd262;
  margin: 30px 20px 10px 40px;
  border-radius: 20px;
  line-height: 40px;
  height: 40px;
  position: relative;
  padding: 0 80px 0 17px;
`;
const SearchIconBox = styled.div`
  position: absolute;
  top: 3px;
  right: 20px;
`;
const ClearIconBox = styled.div`
  position: absolute;
  top: 3px;
  right: 50px;
`;
const InputSearch = styled.input`
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  border: 0;
  width: 100%;
  display: block;
  margin: 0;
  padding: 11px 0 0;
  outline: none;
`;

export default function SearchBoxComponent(): JSX.Element {
  const Router = useRouter();
  const [searchWord, setSearchWord] = useState(
    Router.query.name ? Router.query.name : "",
  );

  const search = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) routeResult();
  };

  const routeResult = () =>
    searchWord
      ? Router.push({
          pathname: `/search/result/${searchWord}`,
        })
      : alert("검색어를 입력해주세요.");

  return (
    <SearchBoxWrapper>
      <ArrowLeft>
        <Link href={Router.pathname === "/search" ? "/main/books" : "/search"}>
          <a>
            <img src="/assets/search/arrowleft.svg" />
          </a>
        </Link>
      </ArrowLeft>
      <SearchBoxInnerWrapper>
        <InputSearch
          type="text"
          name="searchWord"
          value={searchWord}
          placeholder="책, 저자, 스터디를 검색해주세요."
          onChange={({ target: { value } }) => setSearchWord(value)}
          onKeyUp={search}
        />
        {searchWord && (
          <ClearIconBox onClick={() => setSearchWord("")}>
            <img src="/assets/search/searchclear.svg" />
          </ClearIconBox>
        )}

        <SearchIconBox onClick={() => routeResult()}>
          <img src="/assets/search/search.svg" />
        </SearchIconBox>
      </SearchBoxInnerWrapper>
    </SearchBoxWrapper>
  );
}
