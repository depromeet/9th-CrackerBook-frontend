import React from "react";
import HeaderBar from "src/components/common/HeaderBar";
import StudyInfoComponent from "src/components/opening/StudyInfoComponent";
import DifficultComponent from "src/components/opening/StudyInfoComponent/DifficultComponent";
import IntroductionComponent from "src/components/opening/StudyInfoComponent/IntroductionComponent";
import LocationComponent from "src/components/opening/StudyInfoComponent/LocationComponent";
import NameComponent from "src/components/opening/StudyInfoComponent/NameComponent";
import PersonnelComponent from "src/components/opening/StudyInfoComponent/PersonnelComponent";
import StudyPeriodComponent from "src/components/opening/StudyPeriodComponent";
import styled from "styled-components";

const EditBtn = styled.div`
  position: fixed;
  width: 100%;
  max-width: 375px;

  height: 90px;
  bottom: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd262;
`;

const BtnSpacer = styled.div`
  width: 100%;
  height: 90px;
`;


export default function EditStudyInfo(): JSX.Element {
  const studyInfo = {
    title: "사용자의 마음을 움직이는 UX 디자인의 힘",
    type: "토론",
    routingUrl: "profile/hostStudyList/admin/1",
    progressPercent: 15,
  };
  return (
    <div>
      {/*TODO: 분기 필요*/}
      <HeaderBar title={"스터디 수정"} routingUrl={"profile/hostStudyList/1"} />
      <StudyInfoComponent />
      <StudyPeriodComponent />
      <BtnSpacer />
      <EditBtn>수정하기</EditBtn>
    </div>
  );
  return <div>
    {/*TODO: 분기 필요*/}
    <StudyInfoComponent/>
    <StudyPeriodComponent/>
  </div>;

}
