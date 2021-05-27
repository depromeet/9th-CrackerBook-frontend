import Link from "next/link";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import { setKakaoToken } from "../storage/storage";
import axios from "axios";

const successKaKaoLogin = async (response) => {
  console.log(response);
  try {
    const kakaoLogin = await axios.get(
      "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=8975849c679f23f51fe72cd0a1581921&redirect_uri=http://localhost:3000",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
    debugger
    // setKakaoToken(res)
  } catch (error) {
    console.error(`fail kakao login : ${error}`);
    debugger
  }

};

const failKakaoLogin = (error) => {
  console.error(`fail to get kakao token : ${error}`);
};

export default function IndexComponent(): JSX.Element {
  return (
    <MainContainer>
      <ImgWrapper>
        <MobileTitle src="/assets/main/mainTitle.svg" />
        <MainIcon src="/assets/main/mainIcon.svg" />
      </ImgWrapper>
      <NextDiv>
        <div>
          <KakaoLoginBtn>
            <KakaoIcon src="/assets/main/kakao.svg" />
            카카오로 로그인
          </KakaoLoginBtn>
        </div>
        <Link href="/main">
          <GoMainBtn>서비스 둘러보기 &gt;</GoMainBtn>
        </Link>
      </NextDiv>
    </MainContainer>
  );
}

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  height: 100vh;
  background-color: white;
`;

const MobileTitle = styled.img`
  height: 78px;
  width: 200px;
  padding-top: 18vh;
  font-size: 20px;
  color: #000000;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
`;

const MainIcon = styled.img`
  padding-top: 150px;
  padding-bottom: 140px;
  width: 57px;
  height: 69px;
`;

const NextDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  color: #222222;
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
`;

const KakaoLoginBtn = styled.button`
  background-color: #FEE500 !important;
  font-size: 14px !important;
  height: 48px !important;
  width: 335px !important;
  border-radius: 10px !important;
  border: none !important;
  cursor: pointer !important;
  outline: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  &:active {
    background-color: #ffd262;
    box-shadow: 0 1px #666;
    transform: translateY(3px);
  }
`;
const KakaoIcon = styled.img`
  width: 18px;
  height: 16px;
  padding-right: 7px;
  padding-top: 1px;
`;

const GoMainBtn = styled.a`
  padding-top: 18px;
  text-decoration: none;
  cursor: pointer;
`;
