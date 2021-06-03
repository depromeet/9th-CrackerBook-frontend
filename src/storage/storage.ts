const setKakaoToken = (token: string) => {
  window.localStorage.setItem("kakao", token);
};

const getKakaoToken = () => {
  window.localStorage.getItem("kakao");
};

const removeKakaoToken = () => {
  window.localStorage.removeItem("kakao");
};

const setUserIdToken = (userId: string) => {
  window.localStorage.setItem("userId", userId);
};

const getUserIdToken = () => {
  window.localStorage.getItem("userId");
};

const removeUserIdToken = () => {
  window.localStorage.removeItem("userId");
};

export {
  setKakaoToken,
  getKakaoToken,
  removeKakaoToken,
  setUserIdToken,
  getUserIdToken,
  removeUserIdToken,
};
