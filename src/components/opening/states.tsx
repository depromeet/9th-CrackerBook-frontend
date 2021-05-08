import { atom } from "recoil";

const nextStepState = atom({
  key: `nextStep`,
  default: false,
});

export { nextStepState };
