import Link from "next/link";
import styled from "styled-components";
import ProfileArea from "../../src/components/profile/profileArea";
import StudyArea from "../../src/components/profile/studyArea";


// const ProfileArea = styled.div`
//   height: 359px;
// `;

const ProfileImgArea = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 138px;
  top: 110px;

  border: 1px solid #F1F1F3;
  box-sizing: border-box;
  border-radius: 100px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 100px;
`

export default function setting():JSX.Element {
    return (
        <div>
            프로필 설정
            <ProfileImgArea>
                <ProfileImg src="/assets/profile/profile1.svg"/>
            </ProfileImgArea>
            
        </div>
    );
}
