import React from "react";
import StudyInfoComponent from "src/components/opening/StudyInfoComponent";
import DifficultComponent from "src/components/opening/StudyInfoComponent/DifficultComponent";
import IntroductionComponent from "src/components/opening/StudyInfoComponent/IntroductionComponent";
import LocationComponent from "src/components/opening/StudyInfoComponent/LocationComponent";
import NameComponent from "src/components/opening/StudyInfoComponent/NameComponent";
import PersonnelComponent from "src/components/opening/StudyInfoComponent/PersonnelComponent";
import StudyPeriodComponent from "src/components/opening/StudyPeriodComponent";

export default function EditStudyInfo(): JSX.Element {
  const studyInfo = {
    title: "사용자의 마음을 움직이는 UX 디자인의 힘",
    type: "토론",
    routingUrl: "profile/hostStudyList/admin/1",
    progressPercent: 15,
  };
  return <div>
    {/*TODO: 분기 필요*/}
    <StudyInfoComponent/>
    <StudyPeriodComponent/>
  </div>;
}
