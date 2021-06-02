import Router from "next/router";
import styled from "styled-components";
import ListHeaderComponent from "src/components/search/common/ListHeaderComponent";
import ListFooterComponent from "src/components/search/common/ListFooterComponent";
import { useRecoilState } from "recoil";
import { resultTitleListState } from "src/components/states/search";
import NotFoundComponent from "src/components/common/NotFoundComponent";
import { useEffect, useState } from "react";

const ResultTitle = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 19px;
  color: #777777;
  margin: 20px;
`;
const ListWrapper = styled.ul`
  position: relative;
  margin: 20px;
`;
const Title = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  width: 173px;
  color: #222222;
  white-space: nowrap;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const LiLink = styled.li`
  position: relative;
  display: flex;
  margin: 0 0 30px 0;
  cursor: pointer;
`;
const Profile = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
`;
const Img = styled.img`
  height: 115px;
  width: 80px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 0px;
  height: 115px;
  width: 13.33px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
const ContentWrapper = styled.div`
  flex-direction: column;
  margin: 0 10px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #677ac7;
`;
const SubTitle = styled.div`
  margin: 0 0 4px 0;
  font-size: 14px;
  line-height: 20px;
  color: #777777;
`;
const SubContent = styled.div`
  margin: 0 0 4px 10px;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;
const LikeImg = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

export default function ResultTitleComponent(): JSX.Element {
  const [resultTitleList] = useRecoilState(resultTitleListState);
  const [Lilist, setLilist] = useState([]);
  const [viewCount, setViewCount] = useState(6);

  useEffect(() => {
    const temp = [];
    const maxIndex =
      resultTitleList.length > viewCount ? viewCount : resultTitleList.length;

    for (let i = 0; i < maxIndex; i++) {
      temp.push(
        <LiLink
          key={i}
          onClick={() =>
            Router.push({
              pathname: `/detail/book/bookDetail`,
              query: { title: resultTitleList[i].title },
            })
          }
        >
          <Profile>
            <ImgShadow />
            <Img src="/assets/main/exBook.jpg" />
          </Profile>
          <ContentWrapper>
            <Title>{resultTitleList[i].title}</Title>
            <Content>
              <SubTitle>저자</SubTitle>
              <SubContent>{resultTitleList[i].author}</SubContent>
            </Content>
            <Content>
              <SubTitle>출판</SubTitle>
              <SubContent>{resultTitleList[i].publish}</SubContent>
              <SubContent>{resultTitleList[i].date}</SubContent>
            </Content>
          </ContentWrapper>
          <LikeImg src="/assets/search/likeBook.svg" />
        </LiLink>,
      );
    }

    setLilist(temp);
  }, [resultTitleList, viewCount]);

  return (
    <>
      {resultTitleList.length ? (
        <>
          <ResultTitle>{resultTitleList.length}건의 검색결과</ResultTitle>
          <ListHeaderComponent title={"책"} />
          <ListWrapper>{Lilist}</ListWrapper>
          {resultTitleList.length > viewCount && (
            <ListFooterComponent
              viewCount={viewCount}
              setViewCount={setViewCount}
            />
          )}
        </>
      ) : (
        <NotFoundComponent />
      )}
    </>
  );
}
