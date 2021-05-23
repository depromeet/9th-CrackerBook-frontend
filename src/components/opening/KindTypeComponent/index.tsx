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

const KindBookWrapper = styled.div`
  padding: 18px 0;
`;
const MainText = styled.div`
  margin: 0 0 10px 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
  white-space: pre-line;
`;
const SubText = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #677ac7;
`;
const TitleText = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  float: left;
  margin: 0 0 0 20px;
  font-weight: 500;
  max-width: 250px;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Divider = styled.div`
  float: left;
  margin: 6px 10px;
  width: 2px;
  height: 12px;
  background: #677ac7;
`;
const AuthorText = styled.div`
  font-weight: 300;
`;
const SvgWrapper = styled.div`
  position: relative;
  height: 577px;
`;
const SvgInnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -187px;
  margin-top: -290px;
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
    <KindBookWrapper>
      <MainText>
        {`어떤 유형으로
        스터디를 하고 싶나요?`}
      </MainText>
      <SubText>
        <TitleText>{studyForm.book.title}</TitleText>
        <Divider />
        <AuthorText>{studyForm.book.author}</AuthorText>
      </SubText>
      <SvgWrapper>
        <SvgInnerWrapper>
          <svg
            width="375"
            height="516"
            viewBox="0 0 375 516"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <DebateComponent />
            <PortfolioComponent />
            <AnnouncementComponent />
            <WriteComponent />
            <FilterComponent />
            <EtcComponent />
            {/* 기타 */}
            {true ? (
              <></>
            ) : (
              <>
                <path
                  d="M246.981 413.496C204.579 419.931 173.605 454.973 170.696 496.032C169.915 507.05 180.356 514.637 191.277 512.98L329.692 491.975C340.613 490.318 348.333 479.975 344.318 469.684C329.359 431.337 289.383 407.062 246.981 413.496Z"
                  fill="#FFDFC1"
                />
                <path
                  d="M242.605 452.836V453.76H247.323C247.085 456.742 245.405 459.15 242.031 460.76L242.647 461.698C246.819 459.654 248.485 456.462 248.485 452.836H242.605ZM251.019 451.478V464.036H252.167V451.478H251.019ZM256.436 457.064H260.86V456.14H256.436V453.55H261.14V452.612H255.288V461.012H256.268C258.634 461.012 260.258 460.928 262.19 460.592L262.078 459.668C260.23 459.976 258.662 460.074 256.436 460.074V457.064ZM266.474 456.518H264.402V451.478H263.254V464.022H264.402V457.484H266.474V456.518Z"
                  fill="#222222"
                />
              </>
            )}
            {/* 발표 */}
            {true ? (
              <></>
            ) : (
              <>
                <circle cx="68" cy="160" r="55" fill="#E8DFF1" />
                <path
                  d="M61.073 159.56H57.517V157.684H61.073V159.56ZM62.193 154.996H61.073V156.802H57.517V154.996H56.383V160.484H62.193V154.996ZM58.791 164.614H65.609V161.562H57.629V162.472H64.475V163.76H57.671V166.896H66.071V165.986H58.791V164.614ZM65.609 157.18V154.492H64.461V160.974H65.609V158.132H67.471V157.18H65.609ZM73.042 161.59H75.772V164.572H73.042V161.59ZM72.846 156.564H75.968V160.666H72.846V156.564ZM76.92 164.572V161.59H79.048V160.666H77.116V156.564H79.062V155.64H69.752V156.564H71.698V160.666H69.78V161.59H71.894V164.572H68.73V165.51H80.126V164.572H76.92Z"
                  fill="#222222"
                />
              </>
            )}
            {/* 포트폴리오 */}
            {true ? (
              <></>
            ) : (
              <>
                <rect
                  x="204"
                  y="253"
                  width="170"
                  height="170"
                  rx="20"
                  transform="rotate(-30 204 253)"
                  fill="#FFDBD0"
                />
                <path
                  d="M293.147 280.606H296.269V284.722H293.147V280.606ZM295.289 288.53V285.646H299.335V284.722H297.417V280.606H299.363V279.682H290.053V280.606H291.999V284.722H290.081V285.646H294.127V288.53H289.045V289.468H300.427V288.53H295.289ZM312.004 285.254H304.542V283.266H311.598V282.356H304.542V280.494H311.878V279.57H303.38V286.178H312.004V285.254ZM301.91 288.474V289.412H313.306V288.474H301.91ZM317.323 288.796H324.701V286.094H316.161V286.948H323.567V287.984H316.203V290.896H325.079V290.028H317.323V288.796ZM318.905 279.696H322.027V282.09H318.905V279.696ZM321.047 284.176V282.972H325.023V282.09H323.175V279.696H325.065V278.814H315.853V279.696H317.757V282.09H315.895V282.972H319.899V284.176H314.789V285.1H326.143V284.176H321.047ZM329.557 284.12H334.191V279.64H328.367V280.578H333.029V283.196H328.409V288.012H329.445C331.601 288.012 333.505 287.928 335.773 287.55L335.661 286.612C333.463 286.962 331.615 287.06 329.557 287.06V284.12ZM336.837 278.464V291.05H337.985V278.464H336.837ZM342.772 282.594C342.772 281.152 344.242 280.214 346.244 280.214C348.246 280.214 349.702 281.152 349.702 282.594C349.702 284.036 348.246 284.974 346.244 284.974C344.242 284.974 342.772 284.036 342.772 282.594ZM346.818 288.474V285.856C349.156 285.688 350.794 284.442 350.794 282.594C350.794 280.592 348.89 279.304 346.244 279.304C343.584 279.304 341.666 280.592 341.666 282.594C341.666 284.442 343.318 285.688 345.656 285.856V288.474H340.546V289.426H351.956V288.474H346.818Z"
                  fill="#222222"
                />
              </>
            )}
          </svg>

          {/* <DebateComponent />
          
          <WriteComponent />
          <PortfolioComponent />
          <EtcComponent /> */}
        </SvgInnerWrapper>
      </SvgWrapper>
      {showEtcType && <EtcTypeComponent />}
    </KindBookWrapper>
  );
}
