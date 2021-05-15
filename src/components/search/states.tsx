import { atom } from "recoil";

const categoryState = atom({
  key: `category`,
  default: 0,
});

export { categoryState };
