const setKakaoToken = (token: string) => {
  window.localStorage.setItem("kakao", token);
};

const getKakaoToken = () => {
  window.localStorage.getItem("kakao");
};

export { setKakaoToken, getKakaoToken };
