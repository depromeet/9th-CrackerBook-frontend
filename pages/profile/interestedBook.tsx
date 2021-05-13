import Link from "next/link";
import styled from "styled-components";
import ProfileArea from "../../src/components/profile/profileArea";
import StudyArea from "../../src/components/profile/studyArea";
import BookWithShadow from "../../src/components/common/book/BookWithShadow";
import React from "react";
import StudyList from "src/components/profile/interestedBook/studyList";
import BookList from "src/components/profile/interestedBook/bookList";


const ListWrapper = styled.ul`
  margin: 20px 30px;
`;



const StudyTabsArea = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  //top: 422px;
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
  top: 90px;
`

export default function InterestedBook():JSX.Element {

    const SampleBooks = [
        "UX 디자인 실습하기",
        "달리기 수업",
        "숨쉬기 수업",
        "오래자기 챌린지",
    ];
    const arr = [{id: 0, name: "스터디", count: 0},
        {id: 1, name: "책", count: 0},]

    const [tabState, setTabSTate] = React.useState(0);


    const clickHandler = (tabName, index) => {
        // setTab(tabName);
        setTabSTate(index);
    };


    const tabContents = [<StudyList/>,<BookList/>]
    return (
        <div>
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
            <TabContentsArea>
                {tabContents[tabState]}
            </TabContentsArea>
            {/*<ListWrapper>*/}
            {/*    {SampleBooks.map((title, index) => {*/}
            {/*            <BookWithShadow title={title} index={index}/>*/}
            {/*    })}*/}
            {/*</ListWrapper>*/}

        </div>
    );
}
