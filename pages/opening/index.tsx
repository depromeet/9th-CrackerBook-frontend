import Head from "next/head";
import { useRecoilState } from "recoil";
import { currentStepState } from "src/components/states/opening";
import KindBookComponent from "src/components/opening/KindBookComponent";
import KindTypeComponent from "src/components/opening/KindTypeComponent";
import StudyInfoComponent from "src/components/opening/StudyInfoComponent";
import StudyPeriodComponent from "src/components/opening/StudyPeriodComponent";
import FooterComponent from "src/components/opening/common/FooterComponent";
import HeaderComponent from "src/components/opening/common/HeaderComponent";

export default function Index(): JSX.Element {
  const [currentStep] = useRecoilState(currentStepState);
  const components = [
    <KindBookComponent key="KindBook" />,
    <KindTypeComponent key="KindType" />,
    <StudyInfoComponent key="StudyInfo" />,
    <StudyPeriodComponent key="StudyPeriod" />,
  ];
  return (
    <>
      <Head>
        <title>스터디 개설하기</title>
      </Head>
      <HeaderComponent />
      {components[currentStep - 1]}
      <FooterComponent />
    </>
  );
}
