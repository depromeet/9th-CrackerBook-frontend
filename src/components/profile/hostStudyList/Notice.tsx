import styled from "styled-components";
import React from "react";
import CommentCardView from "src/components/common/CommentCardView";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const WriteArea = styled.div`
  //width: 100%;
  display: inline-flex;
`;

const InputBox = styled.input`
  width: 245px;
  height: 80px;
  margin: 1vmin;
  /* cracker white */

  background: #ffffff;
  /* cracker yellow */

  border: 1px solid #ffd262;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  /* text3 */

  color: #999999;
`;

const ResisterBtn = styled.div`
  width: 80px;
  height: 80px;
  margin: 1vmin;

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  /* cracker yellow */

  background: #ffd262;
  border-radius: 10px;
`;

const BoardArea = styled.div`
  height: 100%;
`;

export default function Notice(props): JSX.Element {
  return (
    <>
      <Wrapper>
        <WriteArea>
          <InputBox></InputBox>
          <ResisterBtn>
            <div>등록</div>
          </ResisterBtn>
        </WriteArea>
      </Wrapper>
      <BoardArea>
        <CommentCardView />
        <CommentCardView />
        <CommentCardView />

      </BoardArea>
    </>
  );
}
