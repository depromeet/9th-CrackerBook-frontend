import Head from "next/head";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentStepState } from "src/components/opening/states";
import KindBookComponent from "src/components/opening/1/KindBookComponent";
import KindTypeComponent from "src/components/opening/2/KindTypeComponent";
import StudyInfoComponent from "src/components/opening/3/StudyInfoComponent";
import StudyPeriodComponent from "src/components/opening/4/StudyPeriodComponent";
import FooterComponent from "src/components/opening/common/FooterComponent";
import HeaderComponent from "src/components/opening/common/HeaderComponent";

export default function Index(): JSX.Element {
  const [currentStep] = useRecoilState(currentStepState);

  return (
    <>
      <Head>
        <title>스터디 개설하기</title>
      </Head>
      <HeaderComponent />
      {currentStep === 1 && <KindBookComponent />}
      {currentStep === 2 && <KindTypeComponent />}
      {currentStep === 3 && <StudyInfoComponent />}
      {currentStep === 4 && <StudyPeriodComponent />}
      <FooterComponent />
    </>
  );
}
