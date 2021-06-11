import styled from "styled-components";
import HorizontalStudy from "src/components/common/study/HorizontalStudy";
import React from "react";
import Attendance from "src/components/profile/hostStudyList/Attendance";
import TabView from "src/components/common/TabView";
import StudyList from "src/components/profile/interestedBook/StudyList";
import BookList from "src/components/profile/interestedBook/BookList";
import Notice from "src/components/profile/hostStudyList/Notice";
import StudyInfoView from "src/components/profile/hostStudyList/StudyInfoView";

import HeaderBar from "src/components/common/HeaderBar";


// const StudyInfoArea = styled.div`
//   display: inline-flex;
//   height: 268px;
// `;
const StudyTabsArea = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  top: 268px;
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
  height: 100%;
  //height: 723px;
  left: 0px;
  top: 328px;

  background: #f1f1f3;
`;

export default function Detail(): JSX.Element {
  const tabInfo = [
    { tabName: "출석부", tabContents: <Attendance /> },
    { tabName: "공지사항", tabContents: <Notice /> },
  ];
  return (
    <>

      <HeaderBar
        title={"주최한 스터디"}
        routingUrl={"profile/hostStudyList/"}
      />

      <StudyInfoView />
      <TabView tabInfo={tabInfo} />
    </>
  );
}
