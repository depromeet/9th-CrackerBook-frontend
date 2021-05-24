import styled from "styled-components";
import ListHeaderComponent from "src/components/search/common/ListHeaderComponent";
import ListFooterComponent from "src/components/search/common/ListFooterComponent";
import { useRecoilState } from "recoil";
import { resultTitleListState } from "src/components/states/search";
import NotFoundComponent from "src/components/common/NotFoundComponent";

const ListWrapper = styled.ul`
  position: relative;
  margin: 20px 20px;
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
const LikeImgBorder = styled.img`
  position: absolute;
  z-index: 10;
  top: 0px;
  right: 0px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
const LikeImg = styled.img`
  position: absolute;
  z-index: 10;
  top: 9px;
  right: 5px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;

export default function ResultTitleComponent(): JSX.Element {
  const [resultTitleList] = useRecoilState(resultTitleListState);

  return (
    <>
      <ListHeaderComponent title={"책"} />
      <ListWrapper>
        {resultTitleList.length ? (
          resultTitleList.map((b, index) => {
            return (
              <LiLink key={index}>
                <Profile>
                  <ImgShadow></ImgShadow>
                  <Img src="/assets/main/exBook.jpg" />
                </Profile>
                <ContentWrapper>
                  <Title>{b.title}</Title>
                  <Content>
                    <SubTitle>저자</SubTitle>
                    <SubContent>{b.author}</SubContent>
                  </Content>
                  <Content>
                    <SubTitle>출판</SubTitle>
                    <SubContent>{b.publish}</SubContent>
                    <SubContent>{b.date}</SubContent>
                  </Content>
                </ContentWrapper>
                <LikeImgBorder src="/assets/search/bookLikeBorder.svg" />
                <LikeImg src="/assets/search/bookLike.svg" />
              </LiLink>
            );
          })
        ) : (
          <NotFoundComponent />
        )}
      </ListWrapper>
      <ListFooterComponent />
    </>
  );
}
