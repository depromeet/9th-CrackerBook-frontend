import styled from "styled-components";
import { useRecoilState } from "recoil";
import { studyFormState } from "src/components/states/studyForm";

const ContentWrapperFloatLeft = styled.div`
  padding: 40px 0 40px 0;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const ContentFloatLeft = styled.div`
  position: relative;
  padding: 10px 0;
  div {
    float: left;
  }
`;
const ImgCursor = styled.img`
  cursor: pointer;
`;
const ContentNumber = styled.div`
  margin: 3px 20px 0 20px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #222222;
`;
const RightText = styled.div`
  margin: 3px 4px;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;

export default function FormComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);

  const setPersonnelFunction = (event, value) => {
    event.preventDefault();
    setStudyForm({ ...studyForm, capacity: value === 0 ? 1 : value });
  };

  return (
    <ContentWrapperFloatLeft>
      <Title>인원</Title>
      <ContentFloatLeft>
        <div>
          <ImgCursor
            src="/assets/opening/formminus.svg"
            onClick={(event) =>
              setPersonnelFunction(event, studyForm.capacity - 1)
            }
          />
        </div>
        <ContentNumber>{studyForm.capacity}</ContentNumber>
        <div>
          <ImgCursor
            src="/assets/opening/formplus.svg"
            onClick={(event) =>
              setPersonnelFunction(event, studyForm.capacity + 1)
            }
          />
        </div>
        <RightText>명</RightText>
      </ContentFloatLeft>
    </ContentWrapperFloatLeft>
  );
}
