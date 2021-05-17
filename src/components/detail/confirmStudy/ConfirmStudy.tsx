import styled from "styled-components";
import {BlackBackground} from "../../../styles/detail/common/commonStyle";
import {ConfirmBox} from "../../common/confirmModal/ConfirmBox";
import {useSetRecoilState} from "recoil";
import {ConfirmBoxState} from "../../../state/detail/detailState";

export function ConfirmStudy(): JSX.Element {
    const setConfirmBoxSate = useSetRecoilState<boolean>(ConfirmBoxState);
    // @ts-ignore
    document.childNodes[1].setAttribute('style', 'overflow:hidden');
    const param = {
        mainComment: '로그인한 회원만 이용할 수 있어요.',
        subComment: '스터디에 참여하시려면 로그인 해주세요',
        buttonComponent: (
            <ButtonComponent>
                <CancelButton>
                    취소
                </CancelButton>
                <ConfirmButton onClick={() => setConfirmBoxSate(false)}>
                    확인
                </ConfirmButton>
            </ButtonComponent>
        )
    };

    // 임시
    const param2 = {
        mainComment: '스터디 신청기간이 마감되었습니다.',
        subComment: '이 책으로 주최된 다른 스터디도 찾아보세요',
        buttonComponent: (
            <ButtonComponent>
                <ConfirmButton onClick={() => {
                    // @ts-ignore
                    document.childNodes[1].setAttribute('style', 'overflow:auto');
                    setConfirmBoxSate(false);
                }}>
                    확인
                </ConfirmButton>
            </ButtonComponent>
        )
    };

    return (
        <>
            <BlackBackground>
                <ConfirmBox param={param2} />
            </BlackBackground>
        </>
    )
}

const ButtonComponent= styled.div`
  width: 311px;
  background-color: #FFD262;
  border-radius: 0 0 15px 15px;
  display: flex;
  justify-content: space-around;
  height: 62px;
`;

const CancelButton = styled.button`
  border-radius: 0 0 15px 15px;
  background-color: #FFD262;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const ConfirmButton = styled.button`
  border-radius: 0 0 15px 15px;
  background-color: #FFD262;
  border: none;
  cursor: pointer;
  width: 100%;
`;
