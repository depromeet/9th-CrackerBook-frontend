import { atom } from "recoil";

const CategoryTypeState = atom<string>({
  key: "CategoryTypeState",
  default: "main",
});

const HeaderTextState = atom<string>({
  key: "HeaderTextState",
  default: "CrackerBook",
});

export { CategoryTypeState, HeaderTextState };
