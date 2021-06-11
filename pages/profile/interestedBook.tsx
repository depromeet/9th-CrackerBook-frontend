import styled from "styled-components";
import React from "react";
import StudyList from "src/components/profile/interestedBook/StudyList";
import BookList from "src/components/profile/interestedBook/BookList";
import TabView from "../../src/components/common/TabView";
import HeaderBar from "src/components/common/HeaderBar";

export default function InterestedBook(): JSX.Element {
  const tabInfo = [
    { tabName: "스터디", tabContents: <StudyList /> },
    { tabName: "책", tabContents: <BookList /> },
  ];

  return (
    <div>
      <HeaderBar title={"관심 목록"} routingUrl={"profile"} />
      <TabView tabInfo={tabInfo} />
    </div>
  );
}
