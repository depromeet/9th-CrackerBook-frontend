import {
  ArrowLeft,
  SearchBoxWrapper,
  SearchBoxInnerWrapper,
  IconBox,
  InputBox,
  InputSearch,
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

export default function IndexContainer(): JSX.Element {
  const registerUser = async (event) => {
    event.preventDefault();
    console.log(event.target.value);

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
        <Link href="/login/setNicname">
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
          {/* <form onSubmit={registerUser}>
          <label htmlFor="name">Name</label> */}
          {/* <button type="submit">Register</button>
        </form> */}
        </SearchBoxInnerWrapper>
      </SearchBoxWrapper>
      <KeywordHeadWrapper>
        <TitSearch>최근 검색어</TitSearch>
        <UtilSet>전체삭제</UtilSet>
      </KeywordHeadWrapper>
      <KeywordSubWrapper>
        <KeywordListWrapper>
          <LiLink>
            <BtnTag>디자인</BtnTag>
            <LiIconBox>
              <img src="/assets/search/cross.svg" />
            </LiIconBox>
          </LiLink>
          <LiLink>
            <BtnTag>난배고프다</BtnTag>
            <LiIconBox>
              <img src="/assets/search/cross.svg" />
            </LiIconBox>
          </LiLink>
          <LiLink>
            <BtnTag>도레미파솔라시</BtnTag>
            <LiIconBox>
              <img src="/assets/search/cross.svg" />
            </LiIconBox>
          </LiLink>
          <LiLink>
            <BtnTag>조선왕조실록</BtnTag>
            <LiIconBox>
              <img src="/assets/search/cross.svg" />
            </LiIconBox>
          </LiLink>
          <LiLink>
            <BtnTag>백엔드개발</BtnTag>
            <LiIconBox>
              <img src="/assets/search/cross.svg" />
            </LiIconBox>
          </LiLink>
          <LiLink>
            <BtnTag>프론트엔드</BtnTag>
            <LiIconBox>
              <img src="/assets/search/cross.svg" />
            </LiIconBox>
          </LiLink>
        </KeywordListWrapper>
      </KeywordSubWrapper>
    </>
  );
}
