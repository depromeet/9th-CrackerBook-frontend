import styled from "styled-components";
import HorizontalStudy from "../../../src/components/common/study/HorizontalStudy";
import React from "react";
import Attendance from "../../../src/components/profile/hostStudyList/Attendance";


const StudyInfoArea = styled.div`
  display: inline-flex;
  height: 268px;
  
`
const StudyTabsArea = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  top: 268px;
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
  //height: 723px;
  left: 0px;
  top: 328px;

  background: #F1F1F3;
`


export default function Detail(): JSX.Element {
    const [tabState, setTabSTate] = React.useState(0);

    const arr = [{id: 0, name: "출석부", count: 0},
        {id: 1, name: "공지사항", count: 0},]

    const tabContents = [<Attendance/>,'complete']

    const clickHandler = (tabName, index) => {
        // setTab(tabName);
        setTabSTate(index);
    };
    return (
        <>
            <StudyInfoArea>
                <HorizontalStudy progress={true} percent={30}/>
            </StudyInfoArea>
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
                {tabContents[tabState]}
            </TabContentsArea>
        </>
    );
}
