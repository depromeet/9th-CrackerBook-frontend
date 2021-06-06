import { AxiosResponse } from "axios";
import { instance } from "./index";

type kakaoRes = {
  data: {
    access_token: string;
  };
};

const kakaoLogin = (code: string): Promise<AxiosResponse<kakaoRes>> => {
  return instance.post("/users/sign-in/kakao", {
    code,
  });
};

export { kakaoLogin };
