import {
  ArrowLeft,
  SearchBoxWrapper,
  SearchBoxInnerWrapper,
  IconBox,
  InputBox,
  InputSearch,
} from "../../styles/search/common";
import {
  KeywordHeadWrapper,
  TitSearch,
  UtilSet,
  KeywordSubWrapper,
  KeywordListWrapper,
  LiLink,
  BtnTag,
  LiIconBox,
} from "../../styles/search/indexStyle";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

export default function IndexContainer(): JSX.Element {
  const registerUser = async (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      Router.push({
        pathname: "/search/detail",
      });
    }

    // const res = await fetch("/api/register", {
    //   body: JSON.stringify({
    //     name: event.target.name.value,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    // });

    // const result = await res.json();
    // result.user => 'Ada Lovelace'
  };

  return (
    <>
      <Head>
        <title>검색</title>
      </Head>
      <ArrowLeft>
        <Link href="/main/books">
          <a>
            <img src="/assets/search/arrowleft.svg" />
          </a>
        </Link>
      </ArrowLeft>
      <SearchBoxWrapper>
        <SearchBoxInnerWrapper>
          <InputBox>
            <InputSearch
              id="name"
              name="asd"
              type="text"
              autoComplete="name"
              placeholder="책, 저자, 스터디를 검색해주세요."
              onKeyUp={registerUser}
              required
            />
          </InputBox>
          <IconBox>
            <img src="/assets/search/icon.svg" />
          </IconBox>
        </SearchBoxInnerWrapper>
      </SearchBoxWrapper>
      <KeywordWrapper></KeywordWrapper>
    </>
  );
}

const KeywordTitles = [
  "전체",
  "난배고프다",
  "도레미파솔라시",
  "조선왕조실록",
  "백엔드개발",
  "프론트엔드",
];
const KeywordWrapper = () => {
  return (
    <>
      <KeywordHeadWrapper>
        <TitSearch>최근 검색어</TitSearch>
        <UtilSet>전체삭제</UtilSet>
      </KeywordHeadWrapper>
      <KeywordSubWrapper>
        <KeywordListWrapper>
          {KeywordTitles.map((v, index) => {
            return (
              <LiLink key={index}>
                <BtnTag>{v}</BtnTag>
                <LiIconBox>
                  <img src="/assets/search/cross.svg" />
                </LiIconBox>
              </LiLink>
            );
          })}
        </KeywordListWrapper>
      </KeywordSubWrapper>
    </>
  );
};
