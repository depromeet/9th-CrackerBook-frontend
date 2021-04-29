import Link from "next/link";
import styled from "styled-components";
import ProfileArea from "./ProfileArea";
import StudyArea from "./StudyArea";


// const ProfileArea = styled.div`
//   height: 359px;
// `;


export default function MyPage():JSX.Element {
    return (
        <div>
            <ProfileArea/>
            <StudyArea/>
        </div>
    );
}
