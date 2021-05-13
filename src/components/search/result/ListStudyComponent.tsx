import styled from "styled-components";
import ListHeaderComponent from "src/components/search/common/ListHeaderComponent";
import ListFooterComponent from "src/components/search/common/ListFooterComponent";

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

const Result = [
  "UX 디자인 실습하기",
  "달리기 수업",
  "숨쉬기 수업",
  "오래자기 챌린지",
];

export default function ListComponent(): JSX.Element {
  return (
    <>
      <ListHeaderComponent title={"스터디"} />
      <ListWrapper>
        {Result.map((v, index) => {
          return (
            <LiLink key={index}>
              <Profile>
                <ImgShadow></ImgShadow>
                <Img src="/assets/main/exBook.jpg" />
              </Profile>
              <Content>
                <Icon src="/assets/main/bookIcon.svg" />
                <IconText>토론</IconText>
                <Icon src="/assets/main/memberIcon.svg" />
                <IconText>멤버 3/6</IconText>
              </Content>
              <Title>{v}</Title>
              <Date>04.26 ~ 05.26 토 14:00</Date>
            </LiLink>
          );
        })}
      </ListWrapper>
      <ListFooterComponent />
    </>
  );
}
