import { atom } from "recoil";

const categoryState = atom({
  key: `category`,
  default: 0,
});
const inputClickState = atom({
  key: `inputClick`,
  default: false,
});

export { categoryState, inputClickState };
