import Router from "next/router";
import { getKakaoToken } from "../storage/storage";
import { Dispatch, SetStateAction } from "react";

const kaKaoLogin = async (): Promise<void> => {
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

const loginCheck = async (
  setOpenModal: Dispatch<SetStateAction<boolean>>,
  nextUrl: string | null
): Promise<void> => {
  const loginState = areULogin();
  setOpenModal(!loginState);

  // 로그인이 되어 있으면 next
  if (loginState && nextUrl) {
    await Router.push({
      pathname: `/${nextUrl}`,
    });
  }
};

const areULogin = (): boolean => {
  return !!getKakaoToken();
};

export { kaKaoLogin, loginCheck, areULogin };
