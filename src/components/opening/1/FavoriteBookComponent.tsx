import styled from "styled-components";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { nextStepState } from "../states";

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
const FavoriteText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
  z-index: 0;
`;
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

export default function FavoriteBookComponent(): JSX.Element {
  const [categorySelected, setCategorySelected] = useState(-1);
  const setNextStep = useSetRecoilState(nextStepState);
  const categorySelect = (index) => {
    setCategorySelected(index);
    setNextStep(true);
  };

  return (
    <FavoriteBookWrapper>
      <FavoriteText>관심 책으로 스터디 개설하기</FavoriteText>
      <ListWrapper>
        {Result.map((v, index) => {
          return (
            <LiLink key={index} onClick={() => categorySelect(index)}>
              <Profile>
                <ImgShadow></ImgShadow>
                <Img src="/assets/main/exBook.jpg" />
              </Profile>
              <Title>{v.title}</Title>
              <Author>{v.author}</Author>
              <CheckIconBox>
                {categorySelected === index ? (
                  <img src="/assets/opening/check26.svg" />
                ) : (
                  <img src="/assets/opening/favorite.svg" />
                )}
              </CheckIconBox>
            </LiLink>
          );
        })}
      </ListWrapper>
    </FavoriteBookWrapper>
  );
}
