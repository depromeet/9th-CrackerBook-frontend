import { atom } from "recoil";

// common
const currentStepState = atom({
  key: `currentStep`,
  default: 1,
});
const nextStepState = atom({
  key: `nextStep`,
  default: false,
});
// 1
const categoryState = atom({
  key: `category`,
  default: 0,
});
// 2
const typeState = atom({
  key: `type`,
  default: "",
});
export { currentStepState, nextStepState, categoryState, typeState };
