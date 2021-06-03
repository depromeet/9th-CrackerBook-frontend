import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";

const kaKaoLogin = async () => {
  try {
    await Router.push({
      pathname: process.env.NEXT_PUBLIC_PATH_NAME,
      query: {
        response_type: "code",
        client_id: process.env.NEXT_PUBLIC_KAKAO_KEY,
        redirect_uri: process.env.NEXT_PUBLIC_BASE_URL,
      },
    });
  } catch (error) {
    console.error(`fail kakao login : ${error}`);
  }
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
          <KakaoLoginBtn onClick={kaKaoLogin}>
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
  background-color: #fff6e1;
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
  color: #222222;
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
`;

const KakaoLoginBtn = styled.button`
  background-color: #fee500 !important;
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
