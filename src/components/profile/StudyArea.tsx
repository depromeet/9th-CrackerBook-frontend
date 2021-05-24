import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import HorizontalStudy from "../common/study/HorizontalStudy";
import TabView from "../common/TabView";
import StudyList from "./interestedBook/StudyList";
import BookList from "./interestedBook/BookList";

const StudyTitle = styled.div`
  height: 30px;
  margin-left: 2vw;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #222222;
`;

const StudyTabsArea = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  top: 422px;
  margin-top: 10px;
  /* cracker white */
  background: #fff;
  display: flex;
`;

const TabButton = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  &.on {
    border-bottom: 2px solid #ffd262;
  }
`;

const TabContentsArea = styled.div`
  position: absolute;
  width: 375px;
  //height: 723px;
  left: 0px;
  top: 500px;

  background: #f1f1f3;
`;

export default function StudyArea(): JSX.Element {
  const arr = [
    { id: 0, name: "진행", count: 0 },
    { id: 1, name: "완료", count: 0 },
  ];

  const clickHandler = (tabName, index) => {
    setTabSTate(index);
  };

  const tabContents = ["proceed", "complete"];

  const [tabState, setTabSTate] = React.useState(0);

  const studyInfo = {
    title:'사용자의 마음을 움직이는 UX 디자인의 힘',
    type: '토론',
    routingUrl: 'detail/book/bookDetail',
    progressPercent: 15
  }

  const tabInfo = [
    {
      tabName: "진행",
      tabContents: (
        <HorizontalStudy
            studyInfo ={studyInfo}
        />
      ),
    },
    {
      tabName: "완료",
      tabContents: (
        <HorizontalStudy
            studyInfo ={studyInfo}
        />
      ),
    },
  ];

  return (
    <div>
      <StudyTitle>{"나의 스터디"}</StudyTitle>
      <TabView tabInfo={tabInfo} />
    </div>
  );
}
