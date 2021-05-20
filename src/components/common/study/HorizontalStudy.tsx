import styled from "styled-components";
import BookWithShadow from "../book/BookWithShadow";
import Link from "next/link";

const ListWrapper = styled.ul`
  position: relative;
  //margin: 20px 20px;
  margin: 2vw;
`;
const Title = styled.div`
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  width: 173px;
  color: #222222;
`;
const LiArea = styled.li`
  position: relative;
  display: flex;
  margin: 0 0 30px 0;

  /* cracker white */

  background: #ffffff;
  /* text box Shadow */

  box-shadow: 3px 3px 15px -2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  flex-direction: column;
  width: 173px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #677ac7;
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

  //color: #777777;
`;

const ProgressBar = styled.div`
  width: 97px;
  height: 1px;
  border: 2px solid #f1f1f3;
`;

const Gage = styled.div`
  /* cracker yellow */
  height: 1px;
  //width: 30px;
  border: 2px solid #ffd262;
`;

const ProgressArea = styled.div`
  display: flex;
`;

const PercentFont = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  padding-left: 1em;

  /* cracker yellow */
  color: #ffd262;
`;

const Result = ["사용자의 마음을 움직이는 UX 디자인의 힘"];

export default function HorizontalStudy(props: any): JSX.Element {
  return (
    <>
      <ListWrapper>
        {Result.map((title, index) => {
          return (
            <LiArea key={index}>
              <BookWithShadow width={51} height={74} />
              <ContentWrapper>
                <Content>
                  <Icon src="/assets/main/bookIcon.svg" />
                  <IconText>토론</IconText>
                  <Icon src="/assets/main/memberIcon.svg" />
                  <IconText>멤버 3/6</IconText>
                </Content>
                <Link href={"/" + (props.routingUrl ? props.routingUrl : "")}>
                  <Title>{title}</Title>
                </Link>
                <DateArea>2017.04.12 ~ 2017.04.12</DateArea>
                <>
                  {props && props.progress && (
                    <ProgressArea>
                      <ProgressBar />
                      <Gage style={{ width: props.percent }} />
                      <PercentFont>{props.percent}%</PercentFont>
                    </ProgressArea>
                  )}
                </>
              </ContentWrapper>
              <LikeImg src="/assets/profile/heart.svg" />
            </LiArea>
          );
        })}
      </ListWrapper>
    </>
  );
}
