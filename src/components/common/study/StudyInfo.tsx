import styled from "styled-components";
import BookWithShadow from "../book/BookWithShadow";
import Link from "next/link";

const Title = styled.div`
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  width: 173px;
  color: #222222;
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
  height: 4px;
  background-color: #F1F1F3;
  margin-top: 5px;
`;

const Gage = styled.div`
  /* cracker yellow */
  position: absolute;
  height: 4px;
  background-color: #ffd262;
`;

const ProgressArea = styled.div`
  display: flex;
  height: 100%;
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

export default function StudyInfo(props: any): JSX.Element {
  return (
    <div style={{ height: "100%s" }}>
      {props.studyInfo ? (
        <ContentWrapper>
          <Content>
            <Icon src="/assets/main/bookIcon.svg" />
            <IconText>{props.studyInfo.type}</IconText>
            <Icon src="/assets/main/memberIcon.svg" />
            <IconText>멤버 3/6</IconText>
          </Content>
          <Link
            href={
              "/" +
              (props.studyInfo.routingUrl ? props.studyInfo.routingUrl : "")
            }
          >
            <Title>{props.studyInfo.title}</Title>
          </Link>
          <DateArea>2017.04.12 ~ 2017.04.12</DateArea>
          <>
            {props && props.studyInfo.progressPercent && (
              <ProgressArea>
                <ProgressBar>
                  <Gage
                      style={{
                        width: props.studyInfo.progressPercent,
                      }}
                  />
                </ProgressBar>

                <PercentFont>{props.studyInfo.progressPercent}%</PercentFont>
              </ProgressArea>
            )}
          </>
        </ContentWrapper>
      ) : (
        <div />
      )}
    </div>
  );
}
