import HorizontalStudy from "src/components/common/study/HorizontalStudy";
import React from "react";
import Head from "next/head";

import HeaderBar from "src/components/common/HeaderBar";

export default function InterestedBook(): JSX.Element {
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

  const bookSize = { height: 137, width: 95 };

  return (
    <div>
      <HeaderBar title={"주최한 스터디"} routingUrl={"profile"} />
      <div style={{ height: "100%", padding: "20px" }}>
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
    </div>
  );
}
