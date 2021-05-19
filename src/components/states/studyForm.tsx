import { atom } from "recoil";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

// 1 - KindBookComponent
const bookState = atom({
  key: `book`,
  default: { title: "", author: "" },
});
// 2 - KindTypeComponent
const typeState = atom({
  key: `type`,
  default: "",
});
const typeEtcStringState = atom({
  key: `typeEtcString`,
  default: "",
});
// 3 - StudyInfoComponent
const nameState = atom({
  key: `name`,
  default: "",
});
const introductionState = atom({
  key: `introduction`,
  default: "",
});
const personnelState = atom({
  key: `personnel`,
  default: 1,
});
const difficultyState = atom({
  key: `difficulty`,
  default: "",
});
const placeState = atom({
  key: `place`,
  default: "",
});
const placeDetailState = atom({
  key: `placeDetail`,
  default: "",
});
// 4 - StudyPeriodComponent
const periodStudyStartState = atom({
  key: `periodStudyStart`,
  default: dayjs(new Date()).tz("Asia/Seoul"),
});
const periodStudyEndState = atom({
  key: `periodStudyEnd`,
  default: dayjs(new Date()),
});
const periodRecruitmentStartState = atom({
  key: `periodRecruitmentStart`,
  default: dayjs(new Date()),
});
const periodRecruitmentEndState = atom({
  key: `periodRecruitmentEnd`,
  default: dayjs(new Date()),
});

export {
  bookState,
  typeState,
  typeEtcStringState,
  nameState,
  introductionState,
  personnelState,
  difficultyState,
  placeState,
  placeDetailState,
  periodStudyStartState,
  periodStudyEndState,
  periodRecruitmentStartState,
  periodRecruitmentEndState,
};
