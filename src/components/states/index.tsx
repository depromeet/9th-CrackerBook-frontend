import { atom } from "recoil";

const showCompleteState = atom({
  key: `showComplete`,
  default: false,
});

const studyKindState = atom({
  key: `studyKind`,
  default: [
    { label: "토론", value: "debate" },
    { label: "발표", value: "announcement" },
    { label: "글쓰기", value: "writing" },
    { label: "포트폴리오", value: "portfolio" },
    { label: "기타", value: "etc" },
  ],
});

export { showCompleteState, studyKindState };
