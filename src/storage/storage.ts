const setKakaoToken = (token: string) => {
  window.localStorage.setItem("kakao", token);
};

const getKakaoToken = () => {
  window.localStorage.getItem("kakao");
};

const removeKakaoToken = () => {
  window.localStorage.removeItem("kakao");
};

export { setKakaoToken, getKakaoToken, removeKakaoToken };
