import styled from "styled-components";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { studyFormState } from "src/components/states/studyForm";

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
const Input = styled.input`
  padding: 20px;
  width: 100%;
  height: 46px;
  border: 1px solid #f1f1f3;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 10px;
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
  const studyNameRef = useRef<HTMLInputElement>(null);
  return (
    <ContentWrapper>
      <Title>스터디명</Title>
      <Content>
        <Input
          defaultValue={studyForm.studyName}
          onKeyUp={() =>
            setStudyForm({
              ...studyForm,
              studyName: studyNameRef.current.value,
            })
          }
          ref={studyNameRef}
          placeholder="예) 초보 에세이 글쓰기"
        />
      </Content>
    </ContentWrapper>
  );
}
