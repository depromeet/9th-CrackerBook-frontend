import styled from "styled-components";
import { useState } from "react";

const FormWrapper = styled.div`
  padding: 0 20px 80px 20px;
`;
const BoxWrapper = styled.div`
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
  margin: 3px 0 0 0;
  font-size: 12px;
  line-height: 17px;
  color: #999999;
  text-align: left;
`;
const LiCircleWrapper = styled.div`
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

export default function FormComponent(): JSX.Element {
  const [repeat, setRepeat] = useState("");

  return (
    <FormWrapper>
      <BoxWrapper>
        <Title>스터디 기간</Title>
        <Content></Content>
      </BoxWrapper>
      <BoxWrapper>
        <Title>스터디 반복</Title>
        <Content>
          <UlWrapper>
            {LocationData.map((v, index) => {
              return (
                <>
                  {repeat === v.value ? (
                    <LiList
                      className="on"
                      key={index}
                      onClick={() => setRepeat(v.value)}
                    >
                      <LiIcon src="/assets/opening/check26.svg" />
                      <LiText>{v.label}</LiText>
                      <LiSubText>총 스터디 횟수 20</LiSubText>
                      <LiCircleWrapper>
                        <LiCircle>
                          <LiCircleText>일</LiCircleText>
                        </LiCircle>
                        <LiCircle>
                          <LiCircleText>월</LiCircleText>
                        </LiCircle>
                        <LiCircle>
                          <LiCircleText>화</LiCircleText>
                        </LiCircle>
                        <LiCircle>
                          <LiCircleText>수</LiCircleText>
                        </LiCircle>
                        <LiCircle>
                          <LiCircleText>목</LiCircleText>
                        </LiCircle>
                        <LiCircle>
                          <LiCircleText>금</LiCircleText>
                        </LiCircle>
                        <LiCircle>
                          <LiCircleText>토</LiCircleText>
                        </LiCircle>
                      </LiCircleWrapper>
                    </LiList>
                  ) : (
                    <LiList key={index} onClick={() => setRepeat(v.value)}>
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
