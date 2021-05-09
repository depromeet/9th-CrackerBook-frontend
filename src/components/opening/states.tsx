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
const typeState = atom({
  key: `type`,
  default: "",
});
const typeEtcStringState = atom({
  key: `typeEtcString`,
  default: "",
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

export {
  currentStepState,
  nextStepState,
  typeState,
  typeEtcStringState,
  categoryState,
  showEtcTypeState,
};
