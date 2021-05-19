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
 

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 137.5%;


  /* text1 */

  color: #222222;

`;
const Date = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #777777;
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
`


export default function VerticalBook(prop): JSX.Element {
    return (
        <LiLink key={prop.index}>
            <BookWithShadow width={95} height={132}/>
            <ContentARea>
                <Title>{prop.title}</Title>
                <Author>{prop.author}</Author>
            </ContentARea>

        </LiLink>
    );
}