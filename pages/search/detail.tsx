import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const MobileTitle = styled.div`
  margin: 20px 0 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
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
const SearchInit = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
`;
const CategorySubWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
const CategoryListWrapper = styled.ul`
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
  color: #677ac7;
  font-size: 14px;
  line-height: 32px;
  padding: 0 10px 0 10px;
  display: inline-block;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #677ac7;
  &.on {
    background: #677ac7;
    color: #ffffff;
  }
`;
const TabSubWrapper = styled.div`
  position: relative;
`;
const NotFoundWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Svgbox = styled.div`
  position: relative;
  padding: 109px 0 0 0;
  font-weight: 500;
  font-size: 20px;
`;
const NotFoundMain = styled.div`
  position: relative;
  padding: 32px 0 0 0;
  font-weight: 500;
  font-size: 20px;
`;
const NotFoundSub = styled.div`
  position: relative;
  padding: 10px 0 109px 0;
  line-height: 20px;
  color: #222222;
  font-size: 14px;
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
  font-size: 14px;
  line-height: 125.69%;
  color: #999999;
  border-bottom: 2px solid #f1f1f3;
  &.on {
    font-weight: 500;
    color: #222222;
    border-bottom: 2px solid #ffd262;
  }
`;

const FilterInnerWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const FilterTitle = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 40px;
  color: #777777;
`;
const ListHeadWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const ListHeadTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  color: #000000;
`;
const ListHeadDetail = styled.div`
  position: absolute;
  z-index: 10;
  top: 8px;
  right: 17px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
const DetailLink = styled.div`
  position: absolute;
  z-index: 10;
  top: 7px;
  right: 0px;
  font-size: 14px;
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
const ListFooterWrapper = styled.div`
  width: 335px;
  height: 48px;
  margin: 10px 20px 10px;
  position: relative;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: #777777;
  cursor: pointer;
`;
const ListFooterIconBox = styled.div`
  margin: 0 2px;
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
      <SearchInit>
        책, 저자, 스터디명을 검색하며 찾아보실 수 있어요.
        <br />
        철자와 띄어쓰기를 정확하게 입력해주세요.
      </SearchInit>
      <CategorySubWrapper>
        <CategoryListWrapper>
          <LiLink>
            <BtnTag className="on">발표</BtnTag>
          </LiLink>
          <LiLink>
            <BtnTag>토론</BtnTag>
          </LiLink>
          <LiLink>
            <BtnTag>글쓰기</BtnTag>
          </LiLink>
          <LiLink>
            <BtnTag>포트폴리오</BtnTag>
          </LiLink>
          <LiLink>
            <BtnTag>오늘도배고프다...</BtnTag>
          </LiLink>
        </CategoryListWrapper>
      </CategorySubWrapper>
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
      <NotFoundWrapper>
        <Svgbox>
          <img src="/assets/search/notfound.svg" />
        </Svgbox>
        <NotFoundMain>검색 결과가 없습니다.</NotFoundMain>
        <NotFoundSub>
          다른 검색어를 입력하시거나
          <br />
          철자와 띄어쓰기를 확인해보세요.
        </NotFoundSub>
      </NotFoundWrapper>
      <FilterInnerWrapper>
        <FilterTitle>38건의 검색결과</FilterTitle>
      </FilterInnerWrapper>
      <ListHeadWrapper>
        <ListHeadTitle>책</ListHeadTitle>
        <ListHeadDetail>전체보기</ListHeadDetail>
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
        <ListHeadTitle>스터디</ListHeadTitle>
        <ListHeadDetail>전체보기</ListHeadDetail>
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
      <BookListWrapper>
        <ul>
          <li>책 리스트</li>
          <li>책 리스트</li>
          <li>책 리스트</li>
          <li>책 리스트</li>
        </ul>
      </BookListWrapper>
      <ListFooterWrapper>
        더 보기
        <ListFooterIconBox>
          <img src="/assets/search/arrowdown.svg" />
        </ListFooterIconBox>
      </ListFooterWrapper>
    </>
  );
}
