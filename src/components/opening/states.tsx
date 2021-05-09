import { atom } from "recoil";

const currentStepState = atom({
  key: `currentStep`,
  default: 1,
});
const nextStepState = atom({
  key: `nextStep`,
  default: false,
});
const typeState = atom({
  key: `type`,
  default: "",
});
export { currentStepState, nextStepState, typeState };
