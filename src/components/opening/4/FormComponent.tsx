import styled from "styled-components";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";

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
const LiIcon = styled.img`
  position: absolute;
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

export default function FormComponent(): JSX.Element {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [repeat, setRepeat] = useState("");
  const [week, setWeek] = useState("");
  const initWeek = (event, value) => {
    event.preventDefault();
    setRepeat(value);
    setWeek("");
  };

  return (
    <FormWrapper>
      <TimeBoxWrapper>
        <TimeTitle>스터디 기간</TimeTitle>
        <Content>
          <svg width="375" height="90" viewBox="0 0 375 90" fill="none">
            <line y1="0.5" x2="375" y2="0.5" stroke="#F1F1F3" />
            <line y1="88.5" x2="375" y2="88.5" stroke="#F1F1F3" />
            <path d="M178 1L198 45L178 89" stroke="#F1F1F3" />
          </svg>
        </Content>
        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          value="2018-06-12T19:30"
          min="2018-06-07T00:00"
          max="2018-06-14T00:00"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            value={selectedDate}
            onChange={handleDateChange}
          ></DateTimePicker>
        </MuiPickersUtilsProvider>
      </TimeBoxWrapper>
      <BoxWrapper>
        <Title>스터디 반복</Title>
        <Content>
          <UlWrapper>
            {LocationData.map((v, index) => {
              return (
                <>
                  {repeat === v.value ? (
                    <LiList className="on" key={index}>
                      <LiIcon src="/assets/opening/check26.svg" />
                      <div>
                        <LiText>{v.label}</LiText>
                        <LiSubText>총 스터디 횟수 20</LiSubText>
                      </div>
                      {repeat !== "norepeat" && (
                        <LiCircleWrapper>
                          {WeekData.map((w, index) => {
                            return (
                              <LiCircle
                                key={index}
                                className={week === w.value ? "on" : ""}
                                onClick={() => setWeek(w.value)}
                              >
                                <LiCircleText>{w.label}</LiCircleText>
                              </LiCircle>
                            );
                          })}
                        </LiCircleWrapper>
                      )}
                    </LiList>
                  ) : (
                    <LiList
                      key={index}
                      onClick={(event) => initWeek(event, v.value)}
                    >
                      <LiIcon src="/assets/opening/notcheck26.svg" />
                      <LiText>{v.label}</LiText>
                    </LiList>
                  )}
                </>
              );
            })}
          </UlWrapper>
        </Content>
      </BoxWrapper>
      <BoxWrapper>
        <Title>모집 기간</Title>
        <Content></Content>
      </BoxWrapper>
    </FormWrapper>
  );
}
