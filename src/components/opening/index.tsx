import styled from "styled-components";
import { useRecoilState } from "recoil";
import { currentStepState } from "src/components/states/opening";
import SubHeaderComponent from "./common/SubHeaderComponent";
import KindBookComponent from "./KindBookComponent";
import KindTypeComponent from "./KindTypeComponent";
import StudyInfoComponent from "./StudyInfoComponent";
import StudyPeriodComponent from "./StudyPeriodComponent";
import FooterComponent from "./common/FooterComponent";
import HeaderComponent from "./common/HeaderComponent";

const MainContentWrapper = styled.div`
  padding: 18px 0;
`;

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
      <HeaderComponent />
      <MainContentWrapper>
        <SubHeaderComponent />
        {components[currentStep - 1]}
      </MainContentWrapper>
      <FooterComponent />
    </>
  );
}
