import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
    width: 100%;
  text-align: center;
`
const WriteArea = styled.div`
  //width: 100%;
  display: inline-flex ;
`;

const InputBox = styled.input`
  width: 245px;
  height: 80px;
  margin: 1vmin;
  /* cracker white */

  background: #ffffff;
  /* cracker yellow */

  border: 1px solid #ffd262;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  /* text3 */

  color: #999999;
`;

const ResisterBtn = styled.div`
  width: 80px;
  height: 80px;
  margin: 1vmin;

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  /* cracker yellow */

  background: #ffd262;
  border-radius: 10px;
`;

const BoardArea = styled.div`
  height: 100%;
`;

const NoticeCard = styled.div`
  padding: 20px;

  width: 80%;
  height: 211px;
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
export default function Notice(props): JSX.Element {
  return (
    <>
        <Wrapper>
          <WriteArea>
            <InputBox></InputBox>
            <ResisterBtn>
              <div>등록</div>
            </ResisterBtn>
          </WriteArea>
        </Wrapper>
      <BoardArea>
        <NoticeCard>
          <ProfileArea>
            <ProfileImage src="/assets/profile/profile1.svg" />
            <div>
              <UserName>빈센조</UserName>
              <WritingTime>2021.05.05</WritingTime>
            </div>
          </ProfileArea>
          <NoticeContents>공지사항 내용 입니다.</NoticeContents>
        </NoticeCard>

        <NoticeCard>
          <ProfileArea>
            <ProfileImage src="/assets/profile/profile1.svg" />
            <div>
              <UserName>빈센조</UserName>
              <WritingTime>2021.05.05</WritingTime>
            </div>
          </ProfileArea>
          <NoticeContents>공지사항 내용 입니다.</NoticeContents>
        </NoticeCard>
      </BoardArea>
    </>
  );
}
