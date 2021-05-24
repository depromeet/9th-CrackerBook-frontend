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

export default function PeriodStudyComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  const [isOpenStudyStart, setIsOpenStudyStart] = useState(false);
  const [isOpenStudyEnd, setIsOpenStudyEnd] = useState(false);

  return (
    <TimeContentWrapper>
      <TimeTitle>스터디 기간</TimeTitle>
      <Content>
        <TimeStartWrapper onClick={() => setIsOpenStudyStart(true)}>
          <StartImg src="/assets/opening/period.svg" />
          <DateStartText>
            {studyForm.periodStudyStart
              .locale("ko")
              .format("YY년 MM월 DD일(ddd)")}
          </DateStartText>
          <TimeStartText>
            {studyForm.periodStudyStart.locale("en").format("A hh:mm")}
          </TimeStartText>
        </TimeStartWrapper>
        <TimeEndWrapper onClick={() => setIsOpenStudyEnd(true)}>
          <DateEndText>
            {studyForm.periodStudyEnd
              .locale("ko")
              .format("YY년 MM월 DD일(ddd)")}
          </DateEndText>
          <TimeEndText>
            {studyForm.periodStudyEnd.locale("en").format("A hh:mm")}
          </TimeEndText>
        </TimeEndWrapper>
        <DateTimePickerWrapper>
          <ThemeProvider theme={defaultMaterialTheme}>
            <DateTimePicker
              value={studyForm.periodStudyStart}
              open={isOpenStudyStart}
              onOpen={() => setIsOpenStudyStart(true)}
              onClose={() => setIsOpenStudyStart(false)}
              onChange={(date) =>
                setStudyForm({ ...studyForm, periodStudyStart: dayjs(date) })
              }
            ></DateTimePicker>
            <DateTimePicker
              value={studyForm.periodStudyEnd}
              open={isOpenStudyEnd}
              onOpen={() => setIsOpenStudyEnd(true)}
              onClose={() => setIsOpenStudyEnd(false)}
              onChange={(date) =>
                setStudyForm({ ...studyForm, periodStudyEnd: dayjs(date) })
              }
            ></DateTimePicker>
          </ThemeProvider>
        </DateTimePickerWrapper>
      </Content>
    </TimeContentWrapper>
  );
}
