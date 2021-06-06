import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { kakaoLogin } from "../../api/login";
import { setKakaoToken } from "../../storage/storage";
import styled from "styled-components";

const useLogin = (code: string) => {
  try {
    useEffect(() => {
      const login = async () => {
        const res = await kakaoLogin(code);
        setKakaoToken(res.data.data.access_token);
        await Router.push({
          pathname: "/main",
        });
      };

      login();
    }, []);
  } catch (e) {
    console.error(e);
  }
};

export default function KakaoRedirectComponent(): JSX.Element {
  const router = useRouter();
  const url = router.asPath;
  const kakaoCode = url.split("code=")[1];
  useLogin(kakaoCode);

  return (
    <Background>
      <LoadingWrapper>
        <LoadingImg src="/assets/main/mainIcon.svg" />
        <LoadingComment>Loading...</LoadingComment>
      </LoadingWrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: #fff6e1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingImg = styled.img`
  width: 57px;
  height: 69px;
  padding-bottom: 10px;
`;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const LoadingComment = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;
