import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nextStepState } from "src/components/states/opening";
import { studyFormState } from "src/components/states/studyForm";
import styled from "styled-components";
import FormComponent from "./FormComponent";

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
export default function StudyInfoComponent(): JSX.Element {
  const setNextStep = useSetRecoilState(nextStepState);
  const [studyForm] = useRecoilState(studyFormState);
  useEffect(() => {
    studyForm.name === "" ||
    studyForm.difficulty === "" ||
    studyForm.place === ""
      ? setNextStep(3)
      : setNextStep(4);
  });

  return (
    <KindBookWrapper>
      <MainText>
        {`스터디에 대한 정보를
        입력해주세요.`}
      </MainText>
      <SubText>
        <TitleText>{studyForm.book.title}</TitleText>
        <Divider />
        <AuthorText>{studyForm.book.author}</AuthorText>
      </SubText>
      <FormComponent />
    </KindBookWrapper>
  );
}
