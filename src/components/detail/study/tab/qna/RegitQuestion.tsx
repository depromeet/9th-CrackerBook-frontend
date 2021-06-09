import styled from "styled-components";
import { useState } from "react";

export function RegitQuestion(): JSX.Element {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <>
      <RegitWrapper>
        <Textarea
          placeholder="비방,홍보 등의 글은 이용약관 및 &#13;&#10;관련 법률에 의해 제재될 수 있습니다."
        />
        <InputButton>등록</InputButton>
      </RegitWrapper>
      <PrivateWrapper>
        <PrivateCheckBox
          src={
            isCheck
              ? "/assets/detail/checkBox.svg"
              : "/assets/detail/noneCheckBox.svg"
          }
          onClick={() => setIsCheck(!isCheck)}
        />
        <PrivateText>비공개 등록</PrivateText>
      </PrivateWrapper>
    </>
  );
}

const RegitWrapper = styled.div`
  padding-top: 2 0px;
  display: flex;
`;

const Textarea = styled.textarea`
  outline: none;
  width: 213px;
  height: 53px;
  border: 1px solid #f1f1f3;
  border-radius: 15px;
  margin-right: 10px;
  padding: 13px 12px 12px 20px;
  resize: none;
  color: #999999;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 20px;
`;

const InputButton = styled.button`
  background-color: #ffd262;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const PrivateWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 40px 0;
`;

const PrivateCheckBox = styled.img`
  width: 26px;
  height: 26px;
  padding-right: 10px;
`;

const PrivateText = styled.div`
  color: #677ac7;
`;
