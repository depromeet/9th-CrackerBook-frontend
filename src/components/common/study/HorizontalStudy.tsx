import styled from "styled-components";
import BookWithShadow from "../book/BookWithShadow";
import Link from "next/link";
import React from "react";
import StudyInfo from "./StudyInfo";

const ListWrapper = styled.ul`
  position: relative;
  //margin: 20px;
  margin: 2vw;
  width: 100%;
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
  margin: 0 0 15px 0;
  height: 128px;

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

const LikeBtn = styled.div`
  height: fit-content;
  margin: auto;
  position: inherit;
  right: 10%;
  p : {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    /* text2 */

    color: #777777;
  }
`;

const LikeImg = styled.img`
  font-size: 14px;
  color: #999999;
  top: 42.69%;
`;

export default function HorizontalStudy(props: any): JSX.Element {
  return (
    <LiArea style={{ marginTop: props.isOver ? "30px" : "0px" }}>
      <div
        style={{
          position: "relative",
          top: props.isOver ? "-30px" : "0px",
          margin: props.isOver ? "0px" : "auto",
        }}
      >
        <BookWithShadow
          width={props.size ? props.size.width : 51}
          height={props.size ? props.size.height : 74}
          imgUrl={props.studyInfo.imgUrl}
        />
      </div>

      <StudyInfo studyInfo={props.studyInfo} />
      {props.isLike && (
        <LikeBtn>
          <LikeImg src="/assets/profile/heart.svg" />
          <p>12</p>
        </LikeBtn>
      )}
    </LiArea>
  );
}
