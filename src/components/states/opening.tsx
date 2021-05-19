import { atom } from "recoil";

// common
const currentStepState = atom({
  key: `currentStep`,
  default: 1,
});
const nextStepState = atom({
  key: `nextStep`,
  default: 1,
});
// 1
const categoryState = atom({
  key: `category`,
  default: 0,
});
// 2
const showEtcTypeState = atom({
  key: `showEtcType`,
  default: false,
});
// 4
const showCompleteState = atom({
  key: `showComplete`,
  default: false,
});

export {
  currentStepState,
  nextStepState,
  categoryState,
  showEtcTypeState,
  showCompleteState,
};
