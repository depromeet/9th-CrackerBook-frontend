import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const MobileTitle = styled.div`
  margin: 20px 0 0 0;
  text-align: center;
  font-size: 20px;
  color: #222222;
  font-family: "Nunito", sans-serif;
`;
const SearchBoxWrapper = styled.div`
  border: 1px solid #ffd262;
  margin: 30px 20px 10px 20px;
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
const TabSubWrapper = styled.div`
  position: relative;
`;
const Ul = styled.ul`
  display: flex;
  height: 80px;
`;
const UlDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  line-height: 125.69%;
  color: #999999;
  border-bottom: 2px solid #f1f1f3;
  &.on {
    color: #222222;
    border-bottom: 2px solid #ffd262;
  }
`;

const FilterInnerWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const FilterTitle = styled.div`
  font-size: 14px;
  line-height: 40px;
  color: #777777;
`;
const ListHeadWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  color: #000000;
`;
const Detail = styled.div`
  position: absolute;
  z-index: 10;
  top: 5px;
  right: 17px;
  font-size: 14px;
  line-height: 20px;
  color: #999999;
  cursor: pointer;
`;
const DetailLink = styled.div`
  position: absolute;
  z-index: 10;
  top: 7px;
  right: 0px;
  font-size: 14px;
  line-height: 20px;
  color: #999999;
  cursor: pointer;
`;
const BookListWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const StudyListWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
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
      <MobileTitle>CRACKER BOOK</MobileTitle>
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
        </SearchBoxInnerWrapper>
      </SearchBoxWrapper>
      <TabSubWrapper>
        <Ul>
          <UlDiv className="on">
            전체
            <br />
            (38)
          </UlDiv>
          <UlDiv>
            책
            <br />
            (38)
          </UlDiv>
          <UlDiv>
            스터디
            <br />
            (38)
          </UlDiv>
        </Ul>
      </TabSubWrapper>
      <FilterInnerWrapper>
        <FilterTitle>38건의 검색결과</FilterTitle>
      </FilterInnerWrapper>
      <ListHeadWrapper>
        <Title>책</Title>
        <Detail>전체보기</Detail>
        <DetailLink>
          <Link href="/login/setNicname">
            <a>
              <img src="/assets/search/detaillink.svg" />
            </a>
          </Link>
        </DetailLink>
      </ListHeadWrapper>
      <BookListWrapper>
        <ul>
          <li>책 리스트</li>
          <li>책 리스트</li>
          <li>책 리스트</li>
          <li>책 리스트</li>
        </ul>
      </BookListWrapper>
      <ListHeadWrapper>
        <Title>스터디</Title>
        <Detail>전체보기</Detail>
        <DetailLink>
          <Link href="/login/setNicname">
            <a>
              <img src="/assets/search/detaillink.svg" />
            </a>
          </Link>
        </DetailLink>
      </ListHeadWrapper>
      <StudyListWrapper>
        <ul>
          <li>스터디 리스트</li>
          <li>스터디 리스트</li>
          <li>스터디 리스트</li>
          <li>스터디 리스트</li>
        </ul>
      </StudyListWrapper>
    </>
  );
}
