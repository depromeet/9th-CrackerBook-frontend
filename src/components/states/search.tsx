import { atom } from "recoil";

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
const resultTitleListState = atom({
  key: `resultTitleList`,
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

export {
  categoryState,
  inputClickState,
  historyState,
  resultTitleListState,
  resultAuthorListState,
  resultStudyListState,
};
