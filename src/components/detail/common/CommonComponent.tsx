import {ModalElement, ModalWrapper} from "../../../styles/detail/common/commonStyle";

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
