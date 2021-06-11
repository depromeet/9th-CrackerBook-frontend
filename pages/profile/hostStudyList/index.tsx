import HorizontalStudy from "src/components/common/study/HorizontalStudy";
import React from "react";
import Head from "next/head";

import HeaderBar from "src/components/common/HeaderBar";

export default function InterestedBook(): JSX.Element {
  const studyInfo = {
    title: "사용자의 마음을 움직이는 UX 디자인의 힘",
    type: "토론",
    routingUrl: "profile/hostStudyList/1",
    progressPercent: 15,
    isLike: true,
  };

  const bookSize = { height: 137, width: 95 };

  return (
    <div>
      <HeaderBar title={"주최한 스터디"} routingUrl={"profile"} />
      <div>
        <HorizontalStudy isOver={true} size={bookSize} studyInfo={studyInfo} />
        <HorizontalStudy isOver={true} size={bookSize} studyInfo={studyInfo} />
        <HorizontalStudy isOver={true} size={bookSize} studyInfo={studyInfo} />
        <HorizontalStudy isOver={true} size={bookSize} studyInfo={studyInfo} />
      </div>
    </div>
  );
}
