import HorizontalStudy from "../../common/study/HorizontalStudy";
import React from "react";

export default function StudyList(): JSX.Element {
  const studyInfo = [
    {
      imgUrl: "/assets/mock/Book15.svg",
      title: "데이터 분석하는 디자이너 되기",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
    },
    {
      imgUrl: "/assets/mock/Book16.svg",
      title: "IT 서비스 마케터 모임",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
    },

    {
      imgUrl: "/assets/mock/Book17.svg",
      title: "비전공자를 위한 IT 지식",
      type: "토론",
      routingUrl: "detail/study/studyDetail",
    },
    {
      imgUrl: "/assets/mock/Book15.svg",
      title: "데이터 분석하는 디자이너 되기",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
    },
    {
      imgUrl: "/assets/mock/Book16.svg",
      title: "IT 서비스 마케터 모임",
      type: "글쓰기",
      routingUrl: "detail/study/studyDetail",
    },

    {
      imgUrl: "/assets/mock/Book17.svg",
      title: "비전공자를 위한 IT 지식",
      type: "토론",
      routingUrl: "detail/study/studyDetail",
    },
  ];

  return (
    <div>
      <div style={{ height: "100%", padding: "20px" }}>
        {studyInfo.map((data, index) => {
          return <HorizontalStudy key={index} isLike={true} studyInfo={data} />;
        })}
      </div>
    </div>
  );
}
