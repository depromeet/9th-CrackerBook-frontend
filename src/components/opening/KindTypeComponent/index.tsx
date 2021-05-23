import styled from "styled-components";
import DebateComponent from "./DebateComponent";
import AnnouncementComponent from "./AnnouncementComponent";
import WriteComponent from "./WriteComponent";
import PortfolioComponent from "./PortfolioComponent";
import EtcComponent from "./EtcComponent";
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
// "debate", "announcement", "writing", "portfolio", "etc"
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
          <DebateComponent />
          <AnnouncementComponent />
          <WriteComponent />
          <PortfolioComponent />
          <EtcComponent />
        </SvgInnerWrapper>
      </SvgWrapper>
      {showEtcType && <EtcTypeComponent />}
    </KindBookWrapper>
  );
}
