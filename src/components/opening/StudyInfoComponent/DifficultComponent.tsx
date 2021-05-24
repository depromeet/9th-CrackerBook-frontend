import styled from "styled-components";
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
const UlWrapper = styled.ul`
  position: relative;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;
const LiList = styled.li`
  position: relative;
  float: left;
  cursor: pointer;
  display: block;
  margin: 0 0 10px 0;
`;
const LiIcon = styled.img`
  position: absolute;
  left: 0;
`;
const LiText = styled.div`
  margin: 3px 0 0 36px;
  float: left;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  text-align: left;
`;

const DifficultData = [
  { label: "초급", value: "beginner" },
  { label: "중급", value: "intermediate" },
  { label: "고급", value: "advanced" },
];

export default function FormComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);

  return (
    <ContentWrapper>
      <Title>스터디 난이도</Title>
      <Content>
        <UlWrapper>
          {DifficultData.map((v, index) => {
            return (
              <LiList
                key={index}
                onClick={() =>
                  setStudyForm({
                    ...studyForm,
                    Difficult: v.value,
                  })
                }
              >
                {studyForm.Difficult === v.value ? (
                  <LiIcon src="/assets/opening/check26.svg" />
                ) : (
                  <LiIcon src="/assets/opening/notcheck26.svg" />
                )}
                <LiText>{v.label}</LiText>
              </LiList>
            );
          })}
        </UlWrapper>
      </Content>
    </ContentWrapper>
  );
}
