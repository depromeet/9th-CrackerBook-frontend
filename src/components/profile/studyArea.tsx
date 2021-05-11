import Link from "next/link";
import styled from "styled-components";
import {useState} from "react";


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
  width: 33%;
  height: 100%;
  text-align: center;
  border-bottom: 2px solid #FFD262;
  //border-bottom: 2px solid #FFD262;
  display:table-cell;
  vertical-align:middle;

  .p {
    margin: auto;
  }
`

const TabContentsArea = styled.div`
  position: absolute;
  width: 375px;
  //height: 723px;
  left: 0px;
  top: 484px;
`


export default function StudyArea():JSX.Element {

    // const tabs  = [{id: "proceed", name: "진행", count: 0},
    //     {id: "complete", name: "완료", count: 0},
    //     {id: "favorite", name: "찜한 스터디", count: 0},]

    const arr = [{id: "proceed", name: "진행", count: 0},
         {id: "complete", name: "완료", count: 0},
        {id: "favorite", name: "찜한 스터디", count: 0},]

    const [tab, setTab] = useState("")

    const clickHandler = (tabName) => {
        setTab(tabName);
    };

    const tabContents = {
        proceed: <div>proceed</div>,
        complete: <div>complete</div>,
        favorite: <div>favorite</div>
    }

    return (
        <div>
            <StudyTitle>{"나의 스터디"}</StudyTitle>
            <StudyTabsArea>
                {arr.map((tab, idx) => {
                    return (
                        <TabButton key={tab.id} onClick={() => clickHandler(tab.id)}>
                            {tab.name}
                        </TabButton>
                    );
                })}
            </StudyTabsArea>
            <TabContentsArea className="contents">{tabContents[tab]}</TabContentsArea>
        </div>
    );
}
