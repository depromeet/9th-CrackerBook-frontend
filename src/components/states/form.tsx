import { atom } from "recoil";

const typeState = atom({
  key: `type`,
  default: "",
});
const typeEtcStringState = atom({
  key: `typeEtcString`,
  default: "",
});
const periodStudyStartState = atom({
  key: `periodStudyStart`,
  default: new Date(),
});
const periodStudyEndState = atom({
  key: `periodStudyEnd`,
  default: new Date(),
});
const periodRecruitmentStartState = atom({
  key: `periodRecruitmentStart`,
  default: new Date(),
});
const periodRecruitmentEndState = atom({
  key: `periodRecruitmentEnd`,
  default: new Date(),
});

export {
  typeState,
  typeEtcStringState,
  periodStudyStartState,
  periodStudyEndState,
  periodRecruitmentStartState,
  periodRecruitmentEndState,
};
