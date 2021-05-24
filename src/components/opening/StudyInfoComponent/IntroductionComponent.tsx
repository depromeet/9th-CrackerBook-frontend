import styled from "styled-components";
import { useRecoilState } from "recoil";
import { studyFormState } from "src/components/states/studyForm";
import { useRef } from "react";

const ContentWrapper = styled.div`
  padding: 40px 0 0 0;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const Content = styled.div`
  position: relative;
  padding: 10px 0;
`;
const Textarea = styled.textarea`
  font-family: inherit;
  padding: 10px 0;
  width: 100%;
  height: 123px;
  border: 1px solid #f1f1f3;
  font-size: 14px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  resize: none;
  ::placeholder {
    color: #999999;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px #ffd262;
  }
`;

export default function FormComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  const introductionRef = useRef<HTMLTextAreaElement>(null);

  return (
    <ContentWrapper>
      <Title>스터디소개</Title>
      <Content>
        <Textarea
          defaultValue={studyForm.introduction}
          onKeyUp={() =>
            setStudyForm({
              ...studyForm,
              introduction: introductionRef.current.value,
            })
          }
          ref={introductionRef}
          placeholder="스터디를 소개해보세요."
        />
      </Content>
    </ContentWrapper>
  );
}
