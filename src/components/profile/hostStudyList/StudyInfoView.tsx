import styled from "styled-components";
import React from "react";
import BookWithShadow from "src/components/common/book/BookWithShadow";
import StudyInfo from "src/components/common/study/StudyInfo";
import MiniPopupList from "src/components/common/MiniPopupList";

const TabBar = styled.div`
  width: 100%;
  height: 62px;
  background: #fff;
  display: flex;
`;

const TabButton = styled.div`
  width: 50%;
  height: 62px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #999999;
  &.on {
    border-bottom: 2px solid #ffd262;
    color: #222222;
  }
`;
const Icon = styled.img`
  width: 18px;
  height: 18px;
  filter: invert(79%) sepia(47%) saturate(7439%) hue-rotate(204deg)
    brightness(84%) contrast(83%);
`;

interface tabInfo {
  name: string;
  index: number;
}

const studyInfo = {
  title: "사용자의 마음을 움직이는 UX 디자인의 힘",
  type: "토론",
  routingUrl: "profile/hostStudyList/1",
  progressPercent: 15,
};

export default function StudyInfoView(): JSX.Element {
  const [optionVisible, setOptiopnVisible] = React.useState(false);

  const optionData = [
    {
      value: "edit",
      text: "수정하기",
      icon: "/assets/profile/edit.svg",
      linkPath: "/profile/hostStudyList/1/editStudyInfo",
    },
    {
      value: "cancle",
      text: "취소하기",
      icon: "/assets/profile/cancle.svg",
      linkPath: "none",
    },
  ];

  return (
    <div style={{ display: "flex", marginTop: "2em" }}>
      <BookWithShadow width={100} height={138} />
      <StudyInfo studyInfo={studyInfo} style={{ display: "flex" }} />
      <div style={{ margin: "20px", marginTop: "10px" }}>
        <Icon
          src="/assets/profile/dotmenubtn.svg"
          onClick={() => setOptiopnVisible(!optionVisible)}
        />
        <div style={{ position: "absolute", right: "1vw" }}>
          {optionVisible && <MiniPopupList listvalue={optionData} />}
        </div>
      </div>
    </div>
  );
}
