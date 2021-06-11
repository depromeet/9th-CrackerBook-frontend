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

export default function HorizontalStudy(props: any): JSX.Element {
  return (
    <LiArea style={{ marginTop: props.isOver ? "30px" : "0px" }}>
      <div
        style={{
          position: "relative",
          top: props.isOver ? "-30px" : "0px",
          margin: "auto",
        }}
      >
        <BookWithShadow
          width={props.size ? props.size.width : 51}
          height={props.size ? props.size.height : 74}
        />
      </div>

      <StudyInfo studyInfo={props.studyInfo} />
      {props.isLike && <LikeImg src="/assets/profile/heart.svg" />}

    </LiArea>
  );
}
