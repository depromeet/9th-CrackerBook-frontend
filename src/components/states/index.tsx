import { atom } from "recoil";

const showCompleteState = atom({
  key: `showComplete`,
  default: false,
});

export { showCompleteState };
