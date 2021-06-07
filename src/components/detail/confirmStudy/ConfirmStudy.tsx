import styled from "styled-components";
import { BlackBackground } from "../../../styles/detail/common/commonStyle";
import { ConfirmBox } from "../../common/confirmModal/ConfirmBox";
import { kaKaoLogin } from "../../../service/loginService";
import { Dispatch, SetStateAction } from "react";

export function LoginConfirm(props: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  document.body.style.overflow = "hidden";

  const param = {
    mainComment: "로그인한 회원만 이용할 수 있어요.",
    subComment: "스터디에 참여하시려면 로그인 해주세요",
    buttonComponent: (
      <ButtonComponent>
        <CancelButton onClick={() => props.setOpenModal(false)}>
          취소
        </CancelButton>
        <ConfirmButton onClick={kaKaoLogin}>확인</ConfirmButton>
      </ButtonComponent>
    ),
  };

  return (
    <>
      <BlackBackground>
        <ConfirmBox param={param} />
      </BlackBackground>
    </>
  );
}

export function DeadLineConfirm(): JSX.Element {
  document.body.style.overflow = "hidden";

  const param = {
    mainComment: "스터디 신청기간이 마감되었습니다.",
    subComment: "이 책으로 주최된 다른 스터디도 찾아보세요",
    buttonComponent: (
      <ButtonComponent>
        <ConfirmButton
          onClick={() => {
            document.body.style.overflow = "auto";
          }}
        >
          확인
        </ConfirmButton>
      </ButtonComponent>
    ),
  };

  return (
    <>
      <BlackBackground>
        <ConfirmBox param={param} />
      </BlackBackground>
    </>
  );
}

const ButtonComponent = styled.div`
  width: 311px;
  background-color: #ffd262;
  border-radius: 0 0 15px 15px;
  display: flex;
  justify-content: space-around;
  height: 62px;
`;

const CancelButton = styled.button`
  border-radius: 0 0 15px 15px;
  background-color: #ffd262;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const ConfirmButton = styled.button`
  border-radius: 0 0 15px 15px;
  background-color: #ffd262;
  border: none;
  cursor: pointer;
  width: 100%;
`;
