import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { kakaoLogin } from "../../apiSW/login";
import { setKakaoToken } from "../../storage/storage";

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

  return <>로그인 중</>;
}
