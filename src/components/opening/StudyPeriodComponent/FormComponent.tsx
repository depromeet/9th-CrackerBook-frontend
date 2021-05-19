import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  periodStudyStartState,
  periodStudyEndState,
  periodRecruitmentStartState,
  periodRecruitmentEndState,
} from "../../states/studyForm";
import amber from "@material-ui/core/colors/amber";
import { DateTimePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const FormWrapper = styled.div`
  padding: 0 0 80px 0;
`;
const BoxWrapper = styled.div`
  padding: 40px 20px 0 20px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const TimeBoxWrapper = styled.div`
  padding: 40px 0 0 0;
  height: 138px;
`;
const LiIcon = styled.img`
  position: absolute;
`;
const TimeTitle = styled.div`
  padding: 0 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const Content = styled.div`
  position: relative;
  padding: 10px 0;
`;
const TimeStartWrapper = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 88px;
  border-top: 1px solid #f1f1f3;
  border-bottom: 1px solid #f1f1f3;
`;
const TimeEndWrapper = styled.div`
  position: relative;
  float: right;
  width: 50%;
  height: 88px;
  border-top: 1px solid #f1f1f3;
  border-bottom: 1px solid #f1f1f3;
`;
const StartImg = styled.img`
  position: absolute;
  cursor: pointer;
`;
const DateStartText = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  width: 140px;
  font-size: 12px;
  line-height: 16px;
  color: #222222;
  cursor: pointer;
`;
const TimeStartText = styled.div`
  position: absolute;
  top: 36px;
  left: 40px;
  width: 140px;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #222222;
  cursor: pointer;
`;
const DateEndText = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  width: 140px;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  color: #222222;
  cursor: pointer;
`;
const TimeEndText = styled.div`
  position: absolute;
  top: 36px;
  left: 40px;
  width: 140px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #222222;
  cursor: pointer;
`;
const DateTimePickerWrapper = styled.div`
  position: absolute;
  display: none;
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
  { label: "일", value: "SUN" },
  { label: "월", value: "MON" },
  { label: "화", value: "TUE" },
  { label: "수", value: "WED" },
  { label: "목", value: "THU" },
  { label: "금", value: "FRI" },
  { label: "토", value: "SAT" },
];

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

export default function FormComponent(): JSX.Element {
  const [periodStudyStart, setPeriodStudyStart] = useRecoilState(
    periodStudyStartState,
  );
  const [periodStudyEnd, setPeriodStudyEnd] = useRecoilState(
    periodStudyEndState,
  );
  const [periodRecruitmentStart, setPeriodRecruitmentStart] = useRecoilState(
    periodRecruitmentStartState,
  );
  const [periodRecruitmentEnd, setPeriodRecruitmentEnd] = useRecoilState(
    periodRecruitmentEndState,
  );
  const [isOpenStudyStart, setIsOpenStudyStart] = useState(false);
  const [isOpenStudyEnd, setIsOpenStudyEnd] = useState(false);
  const [isOpenRecruitmentStart, setIsOpenRecruitmentStart] = useState(false);
  const [isOpenRecruitmentEnd, setIsOpenRecruitmentEnd] = useState(false);
  const [repeat, setRepeat] = useState("");
  const [week, setWeek] = useState("");
  const setRepeatFunction = (event, value) => {
    event.preventDefault();
    setRepeat(value);
    setWeek("");
  };
  const setWeekFunction = (event, value) => {
    event.stopPropagation();
    setWeek(value);
  };

  return (
    <FormWrapper>
      <TimeBoxWrapper>
        <TimeTitle>스터디 기간</TimeTitle>
        <Content>
          <TimeStartWrapper onClick={() => setIsOpenStudyStart(true)}>
            <StartImg src="/assets/opening/period.svg" />
            <DateStartText>
              {periodStudyStart.locale("ko").format("YY년 MM월 DD일(ddd)")}
            </DateStartText>
            <TimeStartText>
              {periodStudyStart.locale("en").format("A H:mm")}
            </TimeStartText>
          </TimeStartWrapper>
          <TimeEndWrapper onClick={() => setIsOpenStudyEnd(true)}>
            <DateEndText>
              {periodStudyEnd.locale("ko").format("YY년 MM월 DD일(ddd)")}
            </DateEndText>
            <TimeEndText>
              {periodStudyEnd.locale("en").format("A H:mm")}
            </TimeEndText>
          </TimeEndWrapper>
          <DateTimePickerWrapper>
            <ThemeProvider theme={defaultMaterialTheme}>
              <DateTimePicker
                value={periodStudyStart}
                open={isOpenStudyStart}
                onOpen={() => setIsOpenStudyStart(true)}
                onClose={() => setIsOpenStudyStart(false)}
                onChange={(date) => setPeriodStudyStart(dayjs(date))}
              ></DateTimePicker>
            </ThemeProvider>
          </DateTimePickerWrapper>
          <DateTimePickerWrapper>
            <ThemeProvider theme={defaultMaterialTheme}>
              <DateTimePicker
                value={periodStudyEnd}
                open={isOpenStudyEnd}
                onOpen={() => setIsOpenStudyEnd(true)}
                onClose={() => setIsOpenStudyEnd(false)}
                onChange={(date) => setPeriodStudyEnd(dayjs(date))}
              ></DateTimePicker>
              <DateEndText></DateEndText>
            </ThemeProvider>
          </DateTimePickerWrapper>
        </Content>
      </TimeBoxWrapper>
      <BoxWrapper>
        <Title>스터디 반복</Title>
        <Content>
          <UlWrapper>
            {LocationData.map((v, vindex) => {
              return (
                <LiList
                  key={vindex}
                  className={repeat === v.value ? "on" : ""}
                  onClick={(event) => setRepeatFunction(event, v.value)}
                >
                  {repeat === v.value ? (
                    <>
                      <LiIcon src="/assets/opening/check26.svg" />
                      <LiText>{v.label}</LiText>
                      <LiSubText>총 스터디 횟수 20</LiSubText>
                      {repeat === "oneweek" && (
                        <LiCircleWrapper>
                          {WeekData.map((w, windex) => {
                            return (
                              <LiCircle
                                key={windex}
                                className={week === w.value ? "on" : ""}
                                onClick={(event) =>
                                  setWeekFunction(event, w.value)
                                }
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
      </BoxWrapper>
      <TimeBoxWrapper>
        <TimeTitle>모집 기간</TimeTitle>
        <Content>
          <TimeStartWrapper onClick={() => setIsOpenRecruitmentStart(true)}>
            <StartImg src="/assets/opening/period.svg" />
            <DateStartText>
              {periodRecruitmentStart
                .locale("ko")
                .format("YY년 MM월 DD일(ddd)")}
            </DateStartText>
            <TimeStartText>
              {periodRecruitmentStart.locale("en").format("A H:mm")}
            </TimeStartText>
          </TimeStartWrapper>
          <TimeEndWrapper onClick={() => setIsOpenRecruitmentEnd(true)}>
            <DateEndText>
              {periodRecruitmentEnd.locale("ko").format("YY년 MM월 DD일(ddd)")}
            </DateEndText>
            <TimeEndText>
              {periodRecruitmentEnd.locale("en").format("A H:mm")}
            </TimeEndText>
          </TimeEndWrapper>
          <DateTimePickerWrapper>
            <ThemeProvider theme={defaultMaterialTheme}>
              <DateTimePicker
                value={periodRecruitmentStart}
                open={isOpenRecruitmentStart}
                onOpen={() => setIsOpenRecruitmentStart(true)}
                onClose={() => setIsOpenRecruitmentStart(false)}
                onChange={(date) => setPeriodRecruitmentStart(dayjs(date))}
              ></DateTimePicker>
            </ThemeProvider>
          </DateTimePickerWrapper>
          <DateTimePickerWrapper>
            <ThemeProvider theme={defaultMaterialTheme}>
              <DateTimePicker
                value={periodRecruitmentEnd}
                open={isOpenRecruitmentEnd}
                onOpen={() => setIsOpenRecruitmentEnd(true)}
                onClose={() => setIsOpenRecruitmentEnd(false)}
                onChange={(date) => setPeriodRecruitmentEnd(dayjs(date))}
              ></DateTimePicker>
              <DateEndText></DateEndText>
            </ThemeProvider>
          </DateTimePickerWrapper>
        </Content>
      </TimeBoxWrapper>
    </FormWrapper>
  );
}
