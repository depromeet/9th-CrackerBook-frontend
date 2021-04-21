import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const ArrowLeft = styled.div`
  width: 45px;
  height: 45px;
  line-height: 45px;
  position: absolute;
  top: 30px;
  left: 20px;
  font-size: 19px;
`;
const SearchBoxWrapper = styled.div`
  border: 1px solid #ffd262;
  margin: 30px 20px 10px 40px;
  border-radius: 20px;
  line-height: 40px;
  height: 40px;
`;
const SearchBoxInnerWrapper = styled.div`
  position: relative;
  padding: 0 44px 0 17px;
`;
const IconBox = styled.div`
  position: absolute;
  top: 3px;
  right: 20px;
`;
const InputBox = styled.div`
  padding-top: 0px;
`;
const InputSearch = styled.input`
  font-size: 14px;
  line-height: 20px;
  color: #999999;
  border: 0;
  width: 100%;
  display: block;
  margin: 0;
  padding: 11px 0 0;
  outline: none;
`;
const KeywordHeadWrapper = styled.div`
  position: relative;
  min-height: 35px;
  margin: 30px 20px 0;
`;
const TitSearch = styled.div`
  display: block;
  padding: 5px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const UtilSet = styled.div`
  position: absolute;
  padding: 5px 0;
  z-index: 10;
  top: 0px;
  right: 0px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #999999;
  cursor: pointer;
`;
const KeywordSubWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
const KeywordListWrapper = styled.ul`
  margin: 10px 10px 10px 20px;
`;

const LiLink = styled.li`
  position: relative;
  float: left;
  margin: 0 10px 10px 0;
  cursor: pointer;
  display: block;
`;

const BtnTag = styled.div`
  color: #777777;
  font-size: 14px;
  line-height: 32px;
  padding: 0 22px 0 10px;
  display: inline-block;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
`;
const LiIconBox = styled.div`
  position: absolute;
  top: 7px;
  right: 8px;
`;

export default function Search(): JSX.Element {
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
              placeholder="검색어를 입력해주세요"
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
