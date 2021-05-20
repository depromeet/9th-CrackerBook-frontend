import styled from "styled-components";
import BookWithShadow from "../book/BookWithShadow";

const LiLink = styled.li`
  float: left;
  cursor: pointer;
  display: block;
  width: 130px;
  margin: 0 13px 30px 13px;
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

export default function VerticalStudy(prop): JSX.Element {
  return (
    <LiLink key={prop.index}>
      <BookWithShadow />
      <Content>
        <Icon src="/assets/main/bookIcon.svg" />
        <IconText>토론</IconText>
        <Icon src="/assets/main/memberIcon.svg" />
        <IconText>멤버 3/6</IconText>
      </Content>
      <Title>{prop.title}</Title>
      <Date>04.26 ~ 05.26 토 14:00</Date>
    </LiLink>
  );
}
