import {ModalElement, ModalWrapper, TabButton, TabWrapper} from "../../../styles/detail/common/commonStyle";

type ModalLocation = {
    pageX: number;
    pageY: number;
}
export function TabContainer():JSX.Element {

    return (
        <TabWrapper>
            <TabButton active={true}> 스터디(4)</TabButton>
            <TabButton active={false}> 후기(23)</TabButton>
            <TabButton active={false}> 책소개</TabButton>
        </TabWrapper>
    )
}

export function Modal(props : {location: ModalLocation}):JSX.Element {

    return (
        <ModalWrapper location={props.location}>
            <ModalElement>모집중</ModalElement>
            <ModalElement>진행중</ModalElement>
            <ModalElement>종료</ModalElement>
        </ModalWrapper>
    );
}
