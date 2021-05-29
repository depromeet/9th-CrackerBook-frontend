import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  CompleteBoxState,
  EnrollConfirmBoxState,
} from "../../../state/detail/detailState";

export function EnrollStudy(): JSX.Element {
  const [enrollSate, setEnrollState] = useRecoilState<boolean>(
    EnrollConfirmBoxState,
  );
  const [completeBoxState, setCompleteBoxState] =
    useRecoilState<boolean>(CompleteBoxState);
  // @ts-ignore
  document.body.style.overflow = "hidden";
  return (
    <ConfirmWrapper>
      <ConfirmBox>
        <Close
          src="/assets/detail/close.svg"
          onClick={() => {
            // @ts-ignore
            document.body.style.overflow = "auto";
            setEnrollState(!enrollSate);
          }}
        />
        <InnerBox>
          <ContentBox>
            <StudyName>'일센스'가 있는 살미이 되기 위해서는?</StudyName>
            <Date>2021.04.26 ~ 05.21 토 14:00</Date>
          </ContentBox>
        </InnerBox>
      </ConfirmBox>
      <ApplyButtom
        onClick={() => {
          setEnrollState(!enrollSate);
          setCompleteBoxState(!completeBoxState);
        }}
      >
        스터디 신청하기
      </ApplyButtom>
    </ConfirmWrapper>
  );
}

const ConfirmWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

const ApplyButtom = styled.div`
  background-color: #ffd262;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  cursor: pointer;
`;

const ConfirmBox = styled.div`
  border-radius: 15px 15px 0 0;
  background-color: white;
  min-height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3px;
  padding-left: 3px;
`;

const Close = styled.img`
  width: 35px;
  height: 10px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const InnerBox = styled.div`
  border-radius: 15px;
  margin: 0 20px 32px 20px;
  border: 1px solid #ffd262;
  box-shadow: 0 -3px 7px -6px grey;
`;

const ContentBox = styled.div`
  padding: 20px 52px 20px 20px;
  display: flex;
  flex-direction: column;
`;

const StudyName = styled.div`
  color: #222222;
  padding-bottom: 10px;
`;

const Date = styled.div`
  color: #777777;
`;
