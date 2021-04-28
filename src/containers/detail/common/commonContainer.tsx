import {
  ModalElement,
  ModalWrapper,
  TabButton,
  TabWrapper,
} from "../../../styles/detail/common/commonStyle";
import {useState} from "react";

type ModalPosition = {
  pageX: number;
  pageY: number;
};

export function TabContainer(): JSX.Element {
  const tabList = ['스터디(4)', '후기(23)', '책소개'];
  const [selected, setSelected] = useState(0);
  return (
    <TabWrapper>
      {tabList.map((tab, index) => {
        return (
            <>
              <TabButton
                  key={index} className={selected === index ? 'active' : ''}
                  onClick={() => setSelected(index)}
              >{tab}</TabButton>
            </>
        );
      })}
    </TabWrapper>
  );
}

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
