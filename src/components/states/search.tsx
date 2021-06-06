import { atom } from "recoil";

const categoryListState = atom({
  key: `categoryList`,
  default: ["책", "저자", "스터디"],
});
const categoryState = atom({
  key: `category`,
  default: 0,
});
const inputClickState = atom({
  key: `inputClick`,
  default: false,
});
const historyState = atom({
  key: `history`,
  default: [
    "전체",
    "난배고프다",
    "도레미파솔라시",
    "조선왕조실록",
    "백엔드개발",
    "프론트엔드",
  ],
});
const resultNameListState = atom({
  key: `resultNameList`,
  default: [],
});
const resultAuthorListState = atom({
  key: `resultAuthorList`,
  default: [],
});
const resultStudyListState = atom({
  key: `resultStudyList`,
  default: [],
});
const resultStudyFilterState = atom({
  key: `resultStudyFilter`,
  default: [],
});

export {
  categoryListState,
  categoryState,
  inputClickState,
  historyState,
  resultNameListState,
  resultAuthorListState,
  resultStudyListState,
  resultStudyFilterState,
};
