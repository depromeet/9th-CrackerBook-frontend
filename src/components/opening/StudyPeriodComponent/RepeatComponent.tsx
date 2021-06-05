import styled from "styled-components";
import { useRecoilState } from "recoil";
import { studyFormState } from "../../states/studyForm";
import { useEffect } from "react";

const ContentWrapper = styled.div`
  padding: 40px 20px 0 20px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const LiIcon = styled.img`
  position: absolute;
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
  float: left;
  cursor: pointer;
  display: block;
  margin: 0 0 10px 0;
  &.on {
    cursor: default;
  }
`;
const LiText = styled.div`
  margin: 3px 20px 0 36px;
  float: left;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  text-align: left;
`;
const LiSubText = styled.div`
  float: left;
  margin: 3px 0 0 0;
  font-size: 12px;
  line-height: 17px;
  color: #999999;
  text-align: left;
`;
const LiCircleWrapper = styled.div`
  float: left;
  margin: 12px 0 10px 36px;
  width: 280px;
`;
const LiCircle = styled.div`
  position: relative;
  float: left;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  background: #f1f1f3;
  margin: 0 10px 0 0;
  cursor: pointer;
  &.on {
    background: #ffd262;
  }
`;
const LiCircleText = styled.div`
  position: absolute;
  left: 8px;
  top: 5px;
  font-size: 12px;
  line-height: 17px;
`;
const LocationData = [
  { label: "매주", value: "oneweek" },
  { label: "격주", value: "twoweek" },
  { label: "매월", value: "month" },
  { label: "반복 안함", value: "norepeat" },
];
const WeekData = [
  { label: "일", value: 0 },
  { label: "월", value: 1 },
  { label: "화", value: 2 },
  { label: "수", value: 3 },
  { label: "목", value: 4 },
  { label: "금", value: 5 },
  { label: "토", value: 6 },
];

export default function RepeatComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  useEffect(() => {
    let frequency = 0;
    console.log(studyForm.studyDiffDate);
    console.log(studyForm.repeatWeek);
    for (let i = 0; i < studyForm.studyDiffDate[0]; i++) {
      studyForm.repeatWeek.includes((studyForm.studyDiffDate[1] + i) % 7) &&
        frequency++;
    }
    setStudyForm({
      ...studyForm,
      frequency,
    });
  }, [studyForm.studyDiffDate, studyForm.repeatWeek]);

  const setRepeatFunction = (event, repeat) => {
    event.preventDefault();

    studyForm.repeat !== repeat &&
      setStudyForm({ ...studyForm, repeat, repeatWeek: [] });
  };

  const onRepeatWeek = (event, value) => {
    event.stopPropagation();
    setStudyForm({
      ...studyForm,
      repeatWeek: [...studyForm.repeatWeek, value],
    });
  };
  const offRepeatWeek = (event, value) => {
    event.stopPropagation();
    const repeatWeek = [...studyForm.repeatWeek];
    repeatWeek.splice(repeatWeek.indexOf(value), 1);

    setStudyForm({
      ...studyForm,
      repeatWeek,
    });
  };

  return (
    <ContentWrapper>
      <Title>스터디 반복</Title>
      <Content>
        <UlWrapper>
          {LocationData.map((v, vindex) => {
            return (
              <LiList
                key={vindex}
                className={studyForm.repeat === v.value ? "on" : ""}
                onClick={(event) => setRepeatFunction(event, v.value)}
              >
                {studyForm.repeat === v.value ? (
                  <>
                    <LiIcon src="/assets/opening/check26.svg" />
                    <LiText>{v.label}</LiText>
                    <LiSubText>총 스터디 횟수 {studyForm.frequency}</LiSubText>
                    {studyForm.repeat !== "norepeat" && (
                      <LiCircleWrapper>
                        {WeekData.map((w, windex) => {
                          return studyForm.repeatWeek.indexOf(w.value) !==
                            -1 ? (
                            <LiCircle
                              key={windex}
                              className="on"
                              onClick={(event) => offRepeatWeek(event, w.value)}
                            >
                              <LiCircleText>{w.label}</LiCircleText>
                            </LiCircle>
                          ) : (
                            <LiCircle
                              key={windex}
                              onClick={(event) => onRepeatWeek(event, w.value)}
                            >
                              <LiCircleText>{w.label}</LiCircleText>
                            </LiCircle>
                          );
                        })}
                      </LiCircleWrapper>
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
