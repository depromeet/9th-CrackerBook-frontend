import { atom } from "recoil";

const hello = atom({
  key: "hello",
  default: "",
});

export { hello };
