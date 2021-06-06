const setKakaoToken = (token: string): void => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("kakao", token);
  }
};

const getKakaoToken = (): string | null => {
  let result = null;
  if (typeof window !== "undefined") {
    result = window.localStorage.getItem("kakao");
  }
  return result;
};

const removeKakaoToken = (): void => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("kakao");
  }
};

const setUserIdToken = (userId: string): void => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("userId", userId);
  }
};

const getUserIdToken = (): string | null => {
  let result = null;
  if (typeof window !== "undefined") {
    result = window.localStorage.getItem("userId");
  }
  return result;
};

const removeUserIdToken = (): void => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("userId");
  }
};

const areULogin = (): boolean => {
  return !!getKakaoToken();
};

export {
  areULogin,
  setKakaoToken,
  getKakaoToken,
  removeKakaoToken,
  setUserIdToken,
  getUserIdToken,
  removeUserIdToken,
};
