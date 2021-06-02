import { instance } from "./index";
import { AxiosResponse } from "axios";
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
