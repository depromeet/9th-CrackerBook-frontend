import Router from "next/router";
import { getKakaoToken } from "../storage/storage";

const kaKaoLogin = async () => {
  try {
    await Router.push({
      pathname: process.env.NEXT_PUBLIC_PATH_NAME,
      query: {
        response_type: "code",
        client_id: process.env.NEXT_PUBLIC_KAKAO_KEY,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
      },
    });
  } catch (error) {
    console.error(`fail kakao login : ${error}`);
  }
};

const loginCheck = async (setOpenModal) => {
  const loginState = areULogin();
  setOpenModal(!loginState);
  if (loginState) {
    await Router.push({
      pathname: "/profile",
    });
  }
};

const areULogin = (): boolean => {
  return !!getKakaoToken();
};

export { kaKaoLogin, loginCheck, areULogin };
