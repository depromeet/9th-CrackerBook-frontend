import styled from "styled-components";

const ProfileImgArea = styled.div`
  width: 100px;
  height: 100px;
  left: 138px;
  margin: auto;
  margin-top: 1em;

  border: 1px solid #f1f1f3;
  box-sizing: border-box;
  border-radius: 100px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 100px;
`;
const InfoArea = styled.div`
  width: 100%;
  padding: 20px;
  height: auto;
`;
const SaveBtn = styled.div`
  position: absolute;
  width: 100%;
  height: 90px;
  bottom: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd262;
`;

const InputBoxArea = styled.div`
  width: 100%;
`;

const InputBox = styled.input`
  width: 90%;
  height: 46px;
  /* cracker grey */

  border: 1px solid #f1f1f3;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 1em;
  margin-bottom: 1em;
`;
const InfoTitle = styled.p`
  height: 23px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  margin-top: 1em;

  color: #222222;
`;
const SnsIcon = styled.img`
  width: 46px;
  height: 46px;
  margin: 10px;
`;

const SnsInfo = styled.div`
  display: flex;
`;

export default function setting(): JSX.Element {
  return (
    <div>
      <ProfileImgArea>
        <ProfileImg src="/assets/profile/profile1.svg" />
      </ProfileImgArea>
      <InfoArea>
        <InfoTitle>닉네임</InfoTitle>
        <InputBox />

        <InfoTitle>자기소개</InfoTitle>
        <InputBox />

        <InfoTitle>이메일 정보</InfoTitle>
        <SnsInfo>
          <SnsIcon src="/assets/profile/kakaoTalkIcon.svg" />
          <InputBoxArea>
            <InputBox />
          </InputBoxArea>
        </SnsInfo>
      </InfoArea>
      <SaveBtn>저장하기</SaveBtn>
    </div>
  );
}
