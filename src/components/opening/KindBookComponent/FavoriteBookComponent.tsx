import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { bookListState } from "../../states/book";
import { studyFormState } from "../../states/studyForm";

const FavoriteBookWrapper = styled.div`
  position: relative;
  margin: 32px 0 0 20px;
`;
const ListWrapper = styled.ul`
  display: grid;
  grid-auto-rows: 220px;
  grid-template-columns: repeat(3, 120px);
  margin: 20px 0 0 0;
`;
const LiLink = styled.li`
  position: relative;
  float: left;
  cursor: pointer;
  display: block;
  width: 97px;
  height: 201px;
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

export default function FavoriteBookComponent(): JSX.Element {
  const [bookSelected, setBookSelected] = useState(-1);
  const [bookList] = useRecoilState(bookListState);
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  const bookSelect = (index, book) => {
    setBookSelected(index);
    setStudyForm({ ...studyForm, book });
  };

  return (
    <FavoriteBookWrapper>
      <FavoriteText>관심 책으로 스터디 개설하기</FavoriteText>
      <ListWrapper>
        {bookList.map((b, index) => {
          return (
            <LiLink key={index} onClick={() => bookSelect(index, b)}>
              <Profile>
                <ImgShadow />
                <Img src="/assets/main/exBook.jpg" />
              </Profile>
              <Title>{b.title}</Title>
              <Author>{b.author}</Author>
              <CheckIconBox>
                {bookSelected === index ? (
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
