import {BottomBarStyle, ModalElement, ModalWrapper} from "../../../styles/detail/common/commonStyle";
import styled from "styled-components";
import {useState} from "react";
import {ConfirmStudy} from "../confirmStudy/confirmStudy";

type ModalPosition = {
    pageX: number;
    pageY: number;
};

export function Modal(props: { modalPosition: ModalPosition }): JSX.Element {
    return (
        <ModalWrapper
            pageX={props.modalPosition.pageX}
            pageY={props.modalPosition.pageY}
        >
            <ModalElement>모집중</ModalElement>
            <ModalElement>진행중</ModalElement>
            <ModalElement>종료</ModalElement>
        </ModalWrapper>
    );
}

export function BottomBar(props: { text: string, type: string }): JSX.Element {
    const [confirmBox, setConfirmBox] = useState<boolean>(false);
    return confirmBox ? <ConfirmStudy/>
        : (
            <BottomBarStyle>
                <BottomBarWrapper>
                    <BookLikeIcon src='/assets/main/bookLike.svg'/>
                    <ShareIcon src='/assets/detail/share.svg'/>
                    <GoCreate onClick={() => setConfirmBox(!confirmBox)}>{props.text}</GoCreate>
                </BottomBarWrapper>
            </BottomBarStyle>
        );
}


const BottomBarWrapper = styled.div`
  background-color: #FFD262;
  display: flex;
  align-items: center;
  height: 90px;
`;

const BookLikeIcon = styled.img`
  padding-left: 20px;
  cursor: pointer;
`;

const ShareIcon = styled.img`
  border-right: 1px solid #f4f4f4;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

const GoCreate = styled.div`
  color: #222222;
  padding-left: 75px;
  padding-right: 74px;
  cursor: pointer;
`;


