import { atom } from "recoil";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const bookState = atom({
  key: `book`,
  default: { title: "" },
});
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
  periodStudyStartState,
  periodStudyEndState,
  periodRecruitmentStartState,
  periodRecruitmentEndState,
};
