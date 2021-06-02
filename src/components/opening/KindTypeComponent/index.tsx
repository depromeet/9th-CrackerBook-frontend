import styled from "styled-components";
import DebateComponent from "./svg/DebateComponent";
import AnnouncementComponent from "./svg/AnnouncementComponent";
import FilterComponent from "./svg/common/FilterComponent";
import WriteComponent from "./svg/WriteComponent";
import PortfolioComponent from "./svg/PortfolioComponent";
import EtcComponent from "./svg/EtcComponent";
import EtcTypeComponent from "./EtcTypeComponent";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nextStepState, showEtcTypeState } from "../../states/opening";
import { useEffect } from "react";
import { studyFormState } from "src/components/states/studyForm";

const SvgWrapper = styled.div`
  position: relative;
  height: 477px;
`;
const SvgInnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -187px;
  margin-top: -277px;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "write", "portfolio", "etc"
export default function KindTypeComponent(): JSX.Element {
  const [studyForm] = useRecoilState(studyFormState);
  const [showEtcType] = useRecoilState(showEtcTypeState);
  const setNextStep = useSetRecoilState(nextStepState);
  useEffect(() => {
    studyForm.type === "" ? setNextStep(2) : setNextStep(3);
  });

  return (
    <>
      <SvgWrapper>
        <SvgInnerWrapper>
          <svg
            width="375"
            height="550"
            viewBox="0 0 375 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <DebateComponent />
            <PortfolioComponent />
            <AnnouncementComponent />
            <WriteComponent />
            <FilterComponent />
            <EtcComponent />
          </svg>
        </SvgInnerWrapper>
      </SvgWrapper>
      {showEtcType && <EtcTypeComponent />}
    </>
  );
}
