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
`;
const InputMarginRight = styled.input`
  margin: 0 10px 0 0;
  padding: 20px;
  width: 312px;
  height: 46px;
  border: 1px solid #f1f1f3;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 10px;
  ::placeholder {
    color: #999999;
  }
`;
const RightText = styled.div`
  position: absolute;
  top: 23px;
  right: 0;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;
const Textarea = styled.textarea`
  font-family: inherit;
  padding: 10px 0;
  width: 100%;
  height: 123px;
  border: 1px solid #f1f1f3;
  font-size: 14px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  resize: none;
  ::placeholder {
    color: #999999;
  }
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
`;

const DifficultyData = [
  { label: "초급", value: "beginner" },
  { label: "중급", value: "intermediate" },
  { label: "고급", value: "advanced" },
];
const LocationData = [
  { label: "온라인", value: "online" },
  { label: "오프라인", value: "offline" },
  { label: "온+오프라인", value: "bothline" },
];

export default function FormComponent(): JSX.Element {
  const [difficulty, setDifficulty] = useState("");
  const [location, setLocation] = useState("");

  return (
    <FormWrapper>
      <BoxWrapper>
        <Title>스터디명</Title>
        <Content>
          <Input placeholder="예) 초보 에세이 글쓰기" />
        </Content>
      </BoxWrapper>
      <BoxWrapper>
        <Title>스터디소개</Title>
        <Content>
          <Textarea placeholder="스터디를 소개해보세요." />
        </Content>
      </BoxWrapper>
      <BoxWrapper>
        <Title>인원</Title>
        <Content>
          <InputMarginRight placeholder="스터디 인원을 입력해주세요." />
          <RightText>명</RightText>
        </Content>
      </BoxWrapper>
      <BoxWrapper>
        <Title>스터디 난이도</Title>
        <Content>
          <UlWrapper>
            {DifficultyData.map((v, index) => {
              return (
                <LiList key={index} onClick={() => setDifficulty(v.value)}>
                  {difficulty === v.value ? (
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
      </BoxWrapper>
      <BoxWrapper>
        <Title>장소</Title>
        <Content>
          <UlWrapper>
            {LocationData.map((v, index) => {
              return (
                <LiList key={index} onClick={() => setLocation(v.value)}>
                  {location === v.value ? (
                    <LiIcon src="/assets/opening/check26.svg" />
                  ) : (
                    <LiIcon src="/assets/opening/notcheck26.svg" />
                  )}
                  <LiText>{v.label}</LiText>
                  {index !== 0 && (
                    <LiInput
                      placeholder="모임 장소를 입력해주세요."
                      disabled={location !== v.value}
                    />
                  )}
                </LiList>
              );
            })}
          </UlWrapper>
        </Content>
      </BoxWrapper>
    </FormWrapper>
  );
}