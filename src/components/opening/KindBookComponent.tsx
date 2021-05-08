import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { nextStepState } from "./states";

const KindBookWrapper = styled.div`
  padding: 18px 0;
`;
const MainText = styled.div`
  margin: 0 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
`;
const SearchBoxInnerWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #222222;
  margin: 20px 0 10px 20px;
  line-height: 40px;
  height: 40px;
  padding: 0 0;
`;
const CategoryWrapper = styled.div`
  position: relative;
  float: left;
  width: 100px;
  height: 40px;
  margin: 10px 0 0 0;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;
const OpenIconBox = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
`;
const ModalWrapper = styled.div`
  position: absolute;
  text-align: center;
  background: #ffffff;
  border: 1px solid #f1f1f3;
  box-shadow: 3px 3px 15px -2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
  color: #677ac7;
  font-size: 14px;
  width: 79px;
  top: 41px;
  z-index: 1;
`;
const ModalElement = styled.div`
  cursor: pointer;
  width: 79px;
  border-bottom: 1px solid #f1f1f3;
  border-collapse: collapse;
  display: flex;
  align-items: center;
  margin: 0 20px;
  justify-content: left;
  &:last-child {
    border-bottom: 0;
  },
`;
const SearchInput = styled.input`
  float: left;
  font-size: 14px;
  line-height: 20px;
  padding: 17px 0 0 0;
  border: 0;
  background: initial;
  height: 10px;
  outline: none;
  ::placeholder {
    color: #999999;
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
const FavoriteBookWrapper = styled.div`
  position: relative;
  margin: 32px 0 0 20px;
`;
const ListWrapper = styled.ul`
  overflow: auto;
  margin: 20px 0;
`;
const LiLink = styled.li`
  position: relative;
  float: left;
  cursor: pointer;
  display: block;
  width: 97px;
  height: 201px;
  margin: 0 22px 20px 0;
  &:nth-child(3n) {
    margin: 0;
  }
`;
const Profile = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 15px;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 0px;
  height: 132px;
  width: 20px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const Img = styled.img`
  height: 132px;
  width: 95px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const Title = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;

  height: 40px;
  margin: 10px 0 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 137.5%;
  color: #222222;
  white-space: nowrap;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Author = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #777777;
`;
const CheckIconBox = styled.div`
  position: absolute;
  bottom: 80px;
  right: 13px;
  cursor: pointer;
`;
const SearchResultWrapper = styled.div`
  position: relative;
  margin: 70px 0 0 20px;
`;
const ResultList = styled.div`
  position: relative;
  margin: 70px 0 0 20px;
`;

const FavoriteText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
  z-index: 0;
`;
const CategoryTitles = ["책", "저자", "관심 책"];
const Result = [
  {
    title:
      "책 하나 제가 했습니다. 긴 제목의 책이 필요해서 정말 제목이 긴 책 이름으로",
    author: "이성용",
  },
  {
    title: "코로나 팬데믹 리포트",
    author: "차우준",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
  },
  {
    title: "비전공자를 위해 이해할 수 있는 정말 긴 책 제목의 책",
    author: "김신지",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
  },
  {
    title: "노자 도덕경",
    author: "도덕경",
  },
  {
    title:
      "책 하나 제가 했습니다. 긴 제목의 책이 필요해서 정말 제목이 긴 책 이름으로",
    author: "이성용",
  },
  {
    title: "코로나 팬데믹 리포트",
    author: "차우준",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
  },
  {
    title: "비전공자를 위해 이해할 수 있는 정말 긴 책 제목의 책",
    author: "김신지",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
  },
  {
    title: "노자 도덕경",
    author: "도덕경",
  },
];

export default function KindBookComponent(props: {
  setDashoffset: (index: number) => void;
}): JSX.Element {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const [categorySelected, setCategorySelected] = useState(-1);
  const setNextStep = useSetRecoilState(nextStepState);
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
    searchWord ? props.setDashoffset(50) : alert("검색어를 입력해주세요.");
  const clearSearchWord = () => {
    const node = inputRef.current;
    node.value = "";
    setSearchWord("");
  };
  const categorySelect = (index) => {
    setCategorySelected(index);
    setNextStep(true);
  };

  return (
    <KindBookWrapper>
      <MainText>
        어떤 책으로
        <br />
        스터디를 하고 싶으세요?
      </MainText>
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
            <ModalElement onClick={() => setCategory(0)}>책</ModalElement>
            <ModalElement onClick={() => setCategory(1)}>저자</ModalElement>
            <ModalElement onClick={() => setCategory(2)}>관심책</ModalElement>
          </ModalWrapper>
        )}
        <SearchInput
          type="text"
          name="searchWord"
          defaultValue={searchWord}
          placeholder={
            category !== 2 ? `검색어를 검색해주세요` : `관심 책을 선택해주세요.`
          }
          onKeyUp={search}
          ref={inputRef}
          disabled={category === 2}
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
      {category === 2 && (
        <FavoriteBookWrapper>
          <FavoriteText>관심 책으로 스터디 개설하기</FavoriteText>
          <ListWrapper>
            {Result.map((v, index) => {
              return (
                <LiLink
                  key={index}
                  className={categorySelected === index ? "on" : ""}
                  onClick={() => categorySelect(index)}
                >
                  <Profile>
                    <ImgShadow></ImgShadow>
                    <Img src="/assets/main/exBook.jpg" />
                  </Profile>
                  <Title>{v.title}</Title>
                  <Author>{v.author}</Author>
                  <CheckIconBox>
                    {categorySelected === index ? (
                      <img src="/assets/opening/favoritecheck.svg" />
                    ) : (
                      <img src="/assets/opening/favorite.svg" />
                    )}
                  </CheckIconBox>
                </LiLink>
              );
            })}
          </ListWrapper>
        </FavoriteBookWrapper>
      )}
      <SearchResultWrapper>
        <ResultList></ResultList>
      </SearchResultWrapper>
    </KindBookWrapper>
  );
}
