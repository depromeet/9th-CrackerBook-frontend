import { useState } from "react";
import {
  TabButton,
  TabWrapper,
} from "../../../../styles/detail/common/commonStyle";
import { ReviewIndex } from "./review/ReviewIndex";
import { QnAIndex } from "./qna/QnAIndex";
import { DetailInfoComponent } from "./detailInfo/DetailInfoIndex";
import styled from "styled-components";

export const Tab = (): JSX.Element => {
  const tabList = ["상세정보", "후기(23)", "문의"];
  const [selected, setSelected] = useState(0);
  const reviewDiv = (): JSX.Element => {
    return (
      <ReviewDivWrapper>
        <ReveiwText2>후기</ReveiwText2>
        <ReviewText>(23)</ReviewText>
      </ReviewDivWrapper>
    );
  };

  return (
    <>
      <TabWrapper>
        {tabList.map((tab, index) => {
          return (
            <>
              <TabButton
                key={index}
                className={selected === index ? "active" : ""}
                onClick={() => setSelected(index)}
              >
                {tab.includes("후기") ? reviewDiv() : tab}
              </TabButton>
            </>
          );
        })}
      </TabWrapper>
      {selected === 0 && <DetailInfoComponent />}
      {selected === 1 && <ReviewIndex />}
      {selected === 2 && <QnAIndex />}
    </>
  );
};

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
