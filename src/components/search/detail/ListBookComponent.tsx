import styled from "styled-components";
import ListHeaderComponent from "src/components/search/common/ListHeaderComponent";
import ListFooterComponent from "src/components/search/common/ListFooterComponent";

const ListWrapper = styled.ul`
  position: relative;
  margin: 20px 20px;
`;
const Title = styled.div`
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  width: 173px;
  color: #222222;
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
  margin-right: 17px;
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
  margin: 0 20px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #677ac7;
`;
const Div = styled.div`
  margin: 0 0 4px 0;
  font-size: 14px;
  line-height: 20px;
  color: #777777;
`;
const SubDiv = styled.div`
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

const Result = [
  "사용자의 마음을 움직이는 UX 디자인의 힘",
  "이것이 UX/UI디자인이다",
];

export default function ListComponent(): JSX.Element {
  return (
    <>
      <ListHeaderComponent title={"책"} />
      <ListWrapper>
        {Result.map((v, index) => {
          return (
            <LiLink key={index}>
              <Profile>
                <ImgShadow></ImgShadow>
                <Img src="/assets/main/exBook.jpg" />
              </Profile>
              <ContentWrapper>
                <Title>{v}</Title>
                <Content>
                  <Div>저자</Div>
                  <SubDiv>김동후</SubDiv>
                </Content>
                <Content>
                  <Div>출판</Div>
                  <SubDiv>맹그로브숲</SubDiv>
                  <SubDiv>2021.02.22</SubDiv>
                </Content>
              </ContentWrapper>
              <LikeImgBorder src="/assets/search/bookLikeBorder.svg" />
              <LikeImg src="/assets/search/bookLike.svg" />
            </LiLink>
          );
        })}
      </ListWrapper>
      <ListFooterComponent />
    </>
  );
}
