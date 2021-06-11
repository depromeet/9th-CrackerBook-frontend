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
// 1 - KindBookComponent
const categoryState = atom({
  key: `category`,
  default: 0,
});
const searchKeywordState = atom({
  key: `searchKeyword`,
  default: "",
});
const loadingState = atom({
  key: `loading`,
  default: false,
});
const resultListState = atom({
  key: `resultList`,
  default: [],
});
const resultListIndexState = atom({
  key: `resultListIndex`,
  default: -2, // -2 === init, -1 === firstSearch
});
// 2 - KindTypeComponent
const showEtcTypeState = atom({
  key: `showEtcType`,
  default: false,
});

export {
  currentStepState,
  nextStepState,
  categoryState,
  searchKeywordState,
  loadingState,
  resultListState,
  resultListIndexState,
  showEtcTypeState,
};
