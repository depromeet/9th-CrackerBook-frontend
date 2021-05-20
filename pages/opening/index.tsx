import Head from "next/head";
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
  const components = [
    <KindBookComponent key="1" />,
    <KindTypeComponent key="2" />,
    <StudyInfoComponent key="3" />,
    <StudyPeriodComponent key="4" />,
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
