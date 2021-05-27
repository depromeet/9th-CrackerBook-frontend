import styled from "styled-components";
import ListHeaderComponent from "src/components/search/common/ListHeaderComponent";
import ListFooterComponent from "src/components/search/common/ListFooterComponent";
import FilterCategoryComponent from "src/components/search/result/FilterCategoryComponent";
import { useRecoilState } from "recoil";
import { resultStudyListState } from "src/components/states/search";
import NotFoundComponent from "src/components/common/NotFoundComponent";
import { studyKindState } from "src/components/states";
import { useEffect, useState } from "react";

const ResultTitle = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 19px;
  color: #777777;
  margin: 20px;
`;
const ListWrapper = styled.ul`
  margin: 20px 30px;
`;
const LiLink = styled.li`
  float: left;
  cursor: pointer;
  display: block;
  width: 130px;
  margin: 0 13px 30px 13px;
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
  height: 173px;
  width: 32px;
  border: 0;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
const Img = styled.img`
  height: 173px;
  width: 120px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const Content = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #677ac7;
`;
const Icon = styled.img`
  width: 18px;
  height: 18px;
  filter: invert(79%) sepia(47%) saturate(7439%) hue-rotate(204deg)
    brightness(84%) contrast(83%);
`;
const IconText = styled.div`
  margin: 0 10px 0 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  &:last-child {
    margin-right: 0;
  }
`;
const Title = styled.div`
  margin: 4px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 137.5%;
  margin-bottom: 10px;
  color: #222222;
`;
const Date = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #777777;
`;

export default function ResultStudyComponent(): JSX.Element {
  const [resultStudyList] = useRecoilState(resultStudyListState);
  const [studyKind] = useRecoilState(studyKindState);
  const [Lilist, setLilist] = useState([]);
  const [viewCount, setViewCount] = useState(6);

  useEffect(() => {
    const temp = [];
    const maxIndex =
      resultStudyList.length > viewCount ? viewCount : resultStudyList.length;

    for (let i = 0; i < maxIndex; i++) {
      console.log(i);
      temp.push(
        <LiLink key={i}>
          <Profile>
            <ImgShadow></ImgShadow>
            <Img src="/assets/main/exBook.jpg" />
          </Profile>
          <Content>
            <Icon src="/assets/main/bookIcon.svg" />
            <IconText>
              {
                studyKind.filter(
                  (kind) => kind.value === resultStudyList[i].category,
                )[0].label
              }
            </IconText>
            <Icon src="/assets/main/memberIcon.svg" />
            <IconText>멤버 {resultStudyList[i].members}/6</IconText>
          </Content>
          <Title>{resultStudyList[i].title}</Title>
          <Date>{resultStudyList[i].date}</Date>
        </LiLink>,
      );
    }

    setLilist(temp);
  }, [resultStudyList]);

  return (
    <>
      <FilterCategoryComponent />
      {resultStudyList.length ? (
        <>
          <ResultTitle>{resultStudyList.length}건의 검색결과</ResultTitle>
          <ListHeaderComponent title={"스터디"} />
          <ListWrapper>{Lilist}</ListWrapper>
          {resultStudyList.length > viewCount && <ListFooterComponent />}
        </>
      ) : (
        <NotFoundComponent />
      )}
    </>
  );
}
