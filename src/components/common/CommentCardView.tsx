import styled from "styled-components";


const CardWrapper = styled.div`
  padding: 20px;

  width: 80%;
  max-height: 211px;
  margin: 5%;

  /* cracker white */

  background: #ffffff;
  /* text box Shadow */

  box-shadow: 3px 3px 15px -2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;


const ProfileArea = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;

const UserName = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  /* text1 */

  color: #222222;
`;
const WritingTime = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  /* text3 */

  color: #999999;
`;


const NoticeContents = styled.div`
  padding-top: 2vh;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  /* text1 */

  color: #222222;
`;

export default function CommentCardView(): JSX.Element {
    return (
        <CardWrapper>
            <ProfileArea>
                <ProfileImage src="/assets/profile/profile1.svg" />
                <div>
                    <UserName>빈센조</UserName>
                    <WritingTime>2021.05.05</WritingTime>
                </div>
            </ProfileArea>
            <NoticeContents>내용 입니다.</NoticeContents>
        </CardWrapper>
    );
}
