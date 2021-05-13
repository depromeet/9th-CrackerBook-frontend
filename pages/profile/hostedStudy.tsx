import Link from "next/link";
import styled from "styled-components";
import ProfileArea from "../../src/components/profile/profileArea";
import StudyArea from "../../src/components/profile/studyArea";
import HorizontalStudy from "../../src/components/common/study/horizontalStudy";


// const ProfileArea = styled.div`
//   height: 359px;
// `;


export default function InterestedBook():JSX.Element {
    return (
        <div>
            <HorizontalStudy/>
        </div>
    );
}
