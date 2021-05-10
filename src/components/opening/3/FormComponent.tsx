import styled from "styled-components";

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

export default function FormComponent(): JSX.Element {
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
        <Content></Content>
      </BoxWrapper>
      <BoxWrapper>
        <Title>장소</Title>
        <Content></Content>
      </BoxWrapper>
    </FormWrapper>
  );
}
