import Link from "next/link";
import styled from "styled-components";
import ProfileArea from "../../src/components/profile/profileArea";
import StudyArea from "../../src/components/profile/studyArea";


// const ProfileArea = styled.div`
//   height: 359px;
// `;


export default function Index():JSX.Element {
    return (
        <div>
            <ProfileArea/>
            <StudyArea/>
        </div>
    );
}
