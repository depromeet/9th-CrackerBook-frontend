import styled from "styled-components";
import React from "react";

const TabBar = styled.div`
  width: 100%;
  height: 62px;
  background: #fff;
  display: flex;
`;

const TabButton = styled.div`
  width: 50%;
  height: 62px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  &.on {
    border-bottom: 2px solid #ffd262;
  }
`;
const TabContentsArea = styled.div`
  height: 100%;
  background: #f1f1f3;
  padding-top: 1vh;
`;

type tabInfo = {
  name: string;
  index: number;
};

export default function TabView(props: { tabInfo }): JSX.Element {
  const tabList: tabInfo[] = [];

  props.tabInfo.forEach(function (infoObj, index) {
    tabList.push({ name: infoObj.tabName, index: index });
  });

  const [tabState, setTabSTate] = React.useState(0);

  const clickHandler = (index) => {
    setTabSTate(index);
  };

  return (
    <>
      <TabBar>
        {tabList.map((tab, index) => {
          return (
            <TabButton
              style={{ width: 100 / tabList.length + "%" }}
              key={tab.index}
              onClick={() => clickHandler(index)}
              className={tabState === index ? "on" : ""}
            >
              <div>{tab.name}</div>
            </TabButton>
          );
        })}
      </TabBar>
      <TabContentsArea>{props.tabInfo[tabState].tabContents}</TabContentsArea>
    </>
  );
}
