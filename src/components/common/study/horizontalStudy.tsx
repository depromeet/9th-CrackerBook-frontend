import styled from "styled-components";
import BookWithShadow from "../book/BookWithShadow";

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

  /* cracker white */

  background: #FFFFFF;
  /* text box Shadow */

  box-shadow: 3px 3px 15px -2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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
  //margin: 0 10px;
  width: 173px;
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
  //top: 9px;
  right: 3.74%;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
  top: 42.69%;



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

const DateArea = styled.p`
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* identical to box height */


color: #777777;
`

const Result = [
    "사용자의 마음을 움직이는 UX 디자인의 힘",
    "이것이 UX/UI디자인이다",
];

export default function HorizontalStudy(): JSX.Element {
    return (
        <>
            <ListWrapper>
                {Result.map((v, index) => {
                    return (
                        <LiLink key={index}>
                            <BookWithShadow width={51} height={74}/>
                            <ContentWrapper>
                                <Content>
                                    <Icon src="/assets/main/bookIcon.svg" />
                                    <IconText>토론</IconText>
                                    <Icon src="/assets/main/memberIcon.svg" />
                                    <IconText>멤버 3/6</IconText>
                                </Content>
                                <Title>{v}</Title>
                                <DateArea>2017.04.12 ~ 2017.04.12</DateArea>
                            </ContentWrapper>
                            {/*<div>*/}
                                <LikeImg src="/assets/profile/heart.svg" />
                            {/*</div>*/}
                        </LiLink>
                    );
                })}
            </ListWrapper>
        </>
    );
}