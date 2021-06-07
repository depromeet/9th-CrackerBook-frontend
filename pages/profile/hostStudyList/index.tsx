import HorizontalStudy from "src/components/common/study/HorizontalStudy";
import React from "react";

export default function InterestedBook(): JSX.Element {
  const studyInfo = {
    title: "사용자의 마음을 움직이는 UX 디자인의 힘",
    type: "토론",
    routingUrl: "profile/hostStudyList/1",
    progressPercent: 15,
  };

  return (
    <div>
      <HorizontalStudy studyInfo={studyInfo} />
      <HorizontalStudy studyInfo={studyInfo} />
      <HorizontalStudy studyInfo={studyInfo} />
      <HorizontalStudy studyInfo={studyInfo} />
      <HorizontalStudy studyInfo={studyInfo} />

    </div>
  );
}
