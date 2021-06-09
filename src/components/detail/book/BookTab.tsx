import { useState } from "react";
import {
  TabButton,
  TabWrapper,
} from "../../../styles/detail/common/commonStyle";
import { BookTabInfo } from "./BookTabInfo";
import styled from "styled-components";

export function TabContainer(): JSX.Element {
  const tabList = ["책소개", "스터디 (23)", "후기 (24)"];
  const [selected, setSelected] = useState(0);
  const tabDiv = (name: string, count: string): JSX.Element => {
    return (
      <ReviewDivWrapper>
        <ReveiwText2>{name}</ReveiwText2>
        <ReviewText>{count}</ReviewText>
      </ReviewDivWrapper>
    );
  };

  return (
    <>
      <TabWrapper>
        {tabList.map((tab, index) => {
          const splitText = tab.split(" ");
          return (
            <>
              <TabButton
                key={index}
                className={selected === index ? "active" : ""}
                onClick={() => setSelected(index)}
              >
                {tab.includes("책소개")
                  ? tab
                  : tabDiv(splitText[0], splitText[1])}
              </TabButton>
            </>
          );
        })}
      </TabWrapper>
      <BookTabInfo />
    </>
  );
}

const ReviewDivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewText = styled.div`
  font-family: "Nunito", sans-serif !important;
`;
const ReveiwText2 = styled.div`
  padding-bottom: 2px;
  padding-right: 2px;
`;
