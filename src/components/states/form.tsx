import { atom } from "recoil";

const typeState = atom({
  key: `type`,
  default: "",
});
const typeEtcStringState = atom({
  key: `typeEtcString`,
  default: "",
});

export { typeState, typeEtcStringState };
