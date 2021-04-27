import {
  ArrowLeft,
  SearchBoxWrapper,
  SearchBoxInnerWrapper,
  IconBox,
  InputBox,
  InputSearch,
} from "../../styles/search/common";
import {
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
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

export default function DetailContainer(): JSX.Element {
  const [tabSelected, setTabSelected] = useState(0);
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
        <title>검색 결과</title>
      </Head>
      <ArrowLeft>
        <Link href="/search">
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
      <SearchInit>
        책, 저자, 스터디명을 검색하며 찾아보실 수 있어요.
        <br />
        철자와 띄어쓰기를 정확하게 입력해주세요.
      </SearchInit>
      <CategoryWrapper></CategoryWrapper>
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
      <TabWrapper
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      ></TabWrapper>
      <FilterInnerWrapper>
        <FilterTitle>38건의 검색결과</FilterTitle>
      </FilterInnerWrapper>
      {[0, 1].includes(tabSelected) && (
        <>
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
        </>
      )}
      {[0, 2].includes(tabSelected) && (
        <>
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
        </>
      )}
      <ListFooterWrapper>
        더 보기
        <ListFooterIconBox>
          <img src="/assets/search/arrowdown.svg" />
        </ListFooterIconBox>
      </ListFooterWrapper>
    </>
  );
}

const CategoryTitles = ["발표", "토론", "글쓰기", "포트폴리오", "배고프다"];
const CategoryWrapper = () => {
  const [selected, setSelected] = useState(0);

  return (
    <CategorySubWrapper>
      <CategoryListWrapper>
        {CategoryTitles.map((v, index) => {
          return (
            <LiLink key={index}>
              <BtnTag
                className={selected === index ? "on" : ""}
                onClick={() => setSelected(index)}
              >
                {v}
              </BtnTag>
            </LiLink>
          );
        })}
      </CategoryListWrapper>
    </CategorySubWrapper>
  );
};

type NumberProps = {
  tabSelected: number;
  setTabSelected: (index: number) => void; // Dispatch<SetStateAction<number>>;
};

const TabTitles = ["전체", "책", "스터디"];
const TabWrapper = ({ tabSelected, setTabSelected }: NumberProps) => {
  return (
    <TabSubWrapper>
      <Ul>
        {TabTitles.map((v, index) => {
          return (
            <UlDiv
              key={index}
              className={tabSelected === index ? "on" : ""}
              onClick={() => setTabSelected(index)}
            >
              {v}
              <br />
              (38)
            </UlDiv>
          );
        })}
      </Ul>
    </TabSubWrapper>
  );
};
