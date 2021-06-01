import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { studyFormState } from "../../states/studyForm";
import amber from "@material-ui/core/colors/amber";
import { DateTimePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const TimeContentWrapper = styled.div`
  padding: 40px 0 0 0;
  height: 138px;
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

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

export default function FormComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  const [isOpenRecruitmentStart, setIsOpenRecruitmentStart] = useState(false);
  const [isOpenRecruitmentEnd, setIsOpenRecruitmentEnd] = useState(false);

  const setStartTime = (date) => {
    let periodRecruitmentStart = dayjs(date);
    if (periodRecruitmentStart > studyForm.periodRecruitmentEnd) {
      alert(`시작 시간은 끝나는 시간보다 늦을 수 없습니다!`);
      periodRecruitmentStart = periodRecruitmentStart.set(
        "minute",
        studyForm.periodRecruitmentEnd.minute() - 1,
      );
    }

    setStudyForm({
      ...studyForm,
      periodRecruitmentStart,
    });
  };

  const setEndTime = (date) => {
    let periodRecruitmentEnd = dayjs(date);
    if (periodRecruitmentEnd < studyForm.periodRecruitmentStart) {
      alert(`끝나는 시간은 시작 시간보다 빠를 수 없습니다!`);
      periodRecruitmentEnd = periodRecruitmentEnd.set(
        "minute",
        studyForm.periodRecruitmentStart.minute() + 1,
      );
    }

    setStudyForm({
      ...studyForm,
      periodRecruitmentEnd,
    });
  };

  return (
    <TimeContentWrapper>
      <TimeTitle>모집 기간</TimeTitle>
      <Content>
        <TimeStartWrapper onClick={() => setIsOpenRecruitmentStart(true)}>
          <StartImg src="/assets/opening/period.svg" />
          <DateStartText>
            {studyForm.periodRecruitmentStart
              .locale("ko")
              .format("YY년 MM월 DD일(ddd)")}
          </DateStartText>
          <TimeStartText>
            {studyForm.periodRecruitmentStart.locale("en").format("A hh:mm")}
          </TimeStartText>
        </TimeStartWrapper>
        <TimeEndWrapper onClick={() => setIsOpenRecruitmentEnd(true)}>
          <DateEndText>
            {studyForm.periodRecruitmentEnd
              .locale("ko")
              .format("YY년 MM월 DD일(ddd)")}
          </DateEndText>
          <TimeEndText>
            {studyForm.periodRecruitmentEnd.locale("en").format("A hh:mm")}
          </TimeEndText>
        </TimeEndWrapper>
        <DateTimePickerWrapper>
          <ThemeProvider theme={defaultMaterialTheme}>
            <DateTimePicker
              value={studyForm.periodRecruitmentStart}
              maxDate={studyForm.periodRecruitmentEnd}
              open={isOpenRecruitmentStart}
              onOpen={() => setIsOpenRecruitmentStart(true)}
              onClose={() => setIsOpenRecruitmentStart(false)}
              onChange={(date) => setStartTime(date)}
            ></DateTimePicker>
            <DateTimePicker
              value={studyForm.periodRecruitmentEnd}
              minDate={studyForm.periodRecruitmentStart}
              open={isOpenRecruitmentEnd}
              onOpen={() => setIsOpenRecruitmentEnd(true)}
              onClose={() => setIsOpenRecruitmentEnd(false)}
              onChange={(date) => setEndTime(date)}
            ></DateTimePicker>
          </ThemeProvider>
        </DateTimePickerWrapper>
      </Content>
    </TimeContentWrapper>
  );
}