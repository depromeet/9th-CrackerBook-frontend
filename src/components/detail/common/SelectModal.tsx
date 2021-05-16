import {ModalElement, ModalWrapper} from "../../../styles/detail/common/commonStyle";

export function SelectModal(): JSX.Element {
    return (
        <ModalWrapper
        >
            <ModalElement>모집중</ModalElement>
            <ModalElement>진행중</ModalElement>
            <ModalElement>종료</ModalElement>
        </ModalWrapper>
    );
}
