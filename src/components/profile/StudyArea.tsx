import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import HorizontalStudy from "../common/study/HorizontalStudy";
import TabView from "../common/TabView";
import StudyList from "./interestedBook/StudyList";
import BookList from "./interestedBook/BookList";
import { useRouter } from "next/router";
import CommentCardView from "../common/CommentCardView";

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

  const studyInfo = [
    {
      imgUrl: "/assets/mock/Book15.svg",
      title: "데이터 분석하는 디자이너 되기",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
      progressPercent: 10,
    },
    {
      imgUrl: "/assets/mock/Book16.svg",
      title: "IT 서비스 마케터 모임",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
      progressPercent: 20,
    },

    {
      imgUrl: "/assets/mock/Book17.svg",
      title: "비전공자를 위한 IT 지식",
      type: "토론",
      routingUrl: "detail/study/studyDetail",
      progressPercent: 50,
    },
  ];
  const suceedStudyInfo = [
    {
      imgUrl: "/assets/mock/Book12.svg",
      title: "박완서 소설 완독하기",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
      progressPercent: 100,
    },
    {
      imgUrl: "/assets/mock/Book14.svg",
      title: "IT 서비스 마케터 모임",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
      progressPercent: 100,
    },

    {
      imgUrl: "/assets/mock/Book13.svg",
      title: "워렌 버핏의 투자 지혜 얻기",
      type: "토론",
      routingUrl: "detail/study/studyDetail",
      progressPercent: 100,
    },
  ];

  const bookSize = { height: 137, width: 95 };
  const myStudyTabInfo = [
    {
      tabName: "진행",
      tabContents: (
        <div style={{ padding: "1em" }}>
          {studyInfo.map((data, index) => {
            return (
              <HorizontalStudy
                key={index}
                isOver={true}
                size={bookSize}
                studyInfo={data}
              />
            );
          })}
        </div>
      ),
    },
    {
      tabName: "완료",
      tabContents: (
        <div style={{ padding: "1em" }}>
          {suceedStudyInfo.map((data, index) => {
            return (
              <HorizontalStudy
                key={index}
                isOver={true}
                size={bookSize}
                studyInfo={data}
              />
            );
          })}
        </div>
      ),
    },
  ];

  const otherStudyTabInfo = [
    {
      tabName: "주최한 스터디",

      tabContents: (
        <div style={{ padding: "1em" }}>
          {studyInfo.map((data, index) => {
            return (
              <HorizontalStudy
                key={index}
                isOver={true}
                size={bookSize}
                studyInfo={data}
              />
            );
          })}
        </div>
      ),
    },
    {
      tabName: "후기",
      tabContents: (
        <>
          <CommentCardView />
          <CommentCardView />
          <CommentCardView />
          <CommentCardView />
          <CommentCardView />
        </>
      ),
    },
  ];
  const router = useRouter();
  const data = router.query;
  const isOtherProfile = data.hasOwnProperty("id");

  return (
    <div>
      {!isOtherProfile && <StudyTitle>{"나의 스터디"}</StudyTitle>}
      <TabView tabInfo={isOtherProfile ? otherStudyTabInfo : myStudyTabInfo} />
    </div>
  );
}
