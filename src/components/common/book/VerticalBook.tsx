import styled from "styled-components";
import BookWithShadow from "../book/BookWithShadow";

const LiLink = styled.div`
  float: left;
  cursor: pointer;
  display: block;
  width: 130px;
  //margin: 0 13px 30px 13px;
`;

const Title = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 137.5%;

  /* text1 */

  color: #222222;
`;

const Author = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */

  /* text3 */

  color: #999999;
`;

const ContentARea = styled.div`
  margin: 1em;
`;

export default function VerticalBook(prop): JSX.Element {
  return (
    <LiLink key={prop.index}>
      <BookWithShadow width={95} height={132} />
      <ContentARea>
        <Title>{prop.title}</Title>
        <Author>{prop.author}</Author>
      </ContentARea>
    </LiLink>
  );
}
