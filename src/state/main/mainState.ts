import { atom } from "recoil";

const CategoryTypeState = atom<string>({
  key: "CategoryTypeState",
  default: "none",
});

export { CategoryTypeState };
