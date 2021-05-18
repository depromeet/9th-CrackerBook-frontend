import styled from "styled-components";
import React from "react";
import StudyList from "src/components/profile/interestedBook/studyList";
import BookList from "src/components/profile/interestedBook/bookList";
import TabView from "../../src/components/common/tabView";


export default function InterestedBook():JSX.Element {
    const tabInfo = [
        {tabName: "스터디",
            tabContents: <StudyList/>
        },
        {tabName: "책",
            tabContents: <BookList/>
        },
    ];

    return (
        <div>
            <TabView
                tabInfo = {tabInfo}
            />
        </div>
    );
}
