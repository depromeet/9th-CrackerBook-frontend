import styled from "styled-components";

type CommentType = {
  isFirstComment: boolean;
};

const GuidCommnet = styled.div<CommentType>`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding-top: ${(props) => (props.isFirstComment ? "30px" : "15px")};
`;

const NicnameInput = styled.input`
  font-family: "Noto Sans KR", sans-serif;
  margin: 17px 10px 10px 10px;
  padding-left: 15px;
  border-radius: 22px;
  border: none;
  font-size: 20px;
  height: 58px;
  width: 262px;
  box-shadow: 1px 2px 7px 5px #f4f4f4;
  outline: none;
  text-align: center;
`;

const NicnameContainer = styled.div`
  padding: 40% 20px 0 20px;
  font-family: "Noto Sans KR", sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const ExistWrapper = styled.div`
  display: flex;
`;

const ExistCommnet = styled.p`
  font-size: 14px;
  padding-top: 27px;
  color: #777777;
`;

const ExistIcon = styled.img`
  padding-top: 25px;
  padding-right: 5px;
`;

const StartBtnWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

const StartBtn = styled.img`
  cursor: pointer;
`;
export {
  GuidCommnet,
  NicnameInput,
  ExistCommnet,
  NicnameContainer,
  InputWrapper,
  ExistWrapper,
  ExistIcon,
  StartBtnWrapper,
  StartBtn,
};
