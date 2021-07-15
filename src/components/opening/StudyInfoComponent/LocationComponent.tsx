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
const LiInput = styled.input`
  margin: 10px 0 10px 36px;
  padding: 20px;
  width: 299px;
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
const LocationData = [
  { label: "온라인", value: "ONLINE" },
  { label: "오프라인", value: "OFFLINE" },
  { label: "온+오프라인", value: "BOTHLINE" },
];

export default function LocationComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  const placeDetailRef = useRef<HTMLInputElement>(null);

  const setPlaceFunction = (event, placeType) => {
    event.preventDefault();
    setStudyForm({ ...studyForm, placeDetail: "", placeType });
  };

  return (
    <ContentWrapper>
      <Title>장소</Title>
      <Content>
        <UlWrapper>
          {LocationData.map((v, index) => {
            return (
              <LiList
                key={index}
                onClick={(event) => setPlaceFunction(event, v.value)}
              >
                {studyForm.placeType === v.value ? (
                  <>
                    <LiIcon src="/assets/opening/check26.svg" />
                    <LiText>{v.label}</LiText>
                    {index !== 0 && (
                      <LiInput
                        placeholder="모임 장소를 입력해주세요."
                        defaultValue={studyForm.placeDetail}
                        onKeyUp={() =>
                          setStudyForm({
                            ...studyForm,
                            placeDetail: placeDetailRef.current.value,
                          })
                        }
                        ref={placeDetailRef}
                        disabled={studyForm.placeType !== v.value}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <LiIcon src="/assets/opening/notcheck26.svg" />
                    <LiText>{v.label}</LiText>
                  </>
                )}
              </LiList>
            );
          })}
        </UlWrapper>
      </Content>
    </ContentWrapper>
  );
}
