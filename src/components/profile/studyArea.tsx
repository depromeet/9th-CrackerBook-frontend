import Link from "next/link";
import styled from "styled-components";
import React, {useState} from "react";
import HorizontalStudy from "../common/study/horizontalStudy";


const StudyTitle = styled.div`

  position: absolute;

  height: 30px;
  left: 20px;
  top: 392px;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #222222;
`;

const StudyTabsArea = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  top: 422px;
  margin-top: 10px;
  /* cracker white */
  background: #fff;
  display: flex;

`;

const TabButton = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  

  display: flex;
  justify-content: center;
  align-items: center;
  &.on {
    border-bottom: 2px solid #FFD262;
  }

`

const TabContentsArea = styled.div`
  position: absolute;
  width: 375px;
  height: 723px;
  left: 0px;
  top: 500px;
`



export default function StudyArea():JSX.Element {

    // const tabs  = [{id: "proceed", name: "진행", count: 0},
    //     {id: "complete", name: "완료", count: 0},
    //     {id: "favorite", name: "찜한 스터디", count: 0},]

    const arr = [{id: 0, name: "진행", count: 0},
         {id: 1, name: "완료", count: 0},]


    const clickHandler = (tabName, index) => {
        // setTab(tabName);
        setTabSTate(index);
    };

    const tabContents = ['proceed','complete']

    const [tabState, setTabSTate] = React.useState(0);

    return (
        <div>
            <StudyTitle>{"나의 스터디"}</StudyTitle>
            <StudyTabsArea>
                {arr.map((tab, index) => {
                    return (
                        <TabButton key={tab.id} onClick={() => clickHandler(tab.id, index)}
                                   className={tabState === index ? "on" : ""}>
                            <div>{tab.name}</div>
                        </TabButton>
                    );
                })}
            </StudyTabsArea>
            <TabContentsArea className="contents" >
                {/*<div contents={tabContents[tabState]}>*/}
                {/*    */}
                {/*</div>*/}
                <HorizontalStudy/>
            </TabContentsArea>
        </div>
    );
}
