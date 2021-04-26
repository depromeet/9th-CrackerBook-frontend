import {
  MobileTitle,
  SearchBoxWrapper,
  SearchBoxInnerWrapper,
  IconBox,
  InputBox,
  InputSearch,
  SearchInit,
  CategorySubWrapper,
  CategoryListWrapper,
  LiLink,
  BtnTag,
  TabSubWrapper,
  NotFoundWrapper,
  Svgbox,
  NotFoundMain,
  NotFoundSub,
  Ul,
  UlDiv,
  FilterInnerWrapper,
  FilterTitle,
  ListHeadWrapper,
  ListHeadTitle,
  ListHeadDetail,
  DetailLink,
  BookListWrapper,
  StudyListWrapper,
  ListFooterWrapper,
  ListFooterIconBox,
} from "../../styles/search/detailStyle";
import Head from "next/head";
import Link from "next/link";

export default function DetailContainer(): JSX.Element {
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
      <StudyListWrapper></StudyListWrapper>
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
