import { atom } from "recoil";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const studyFormState = atom({
  key: `studyForm`,
  default: {
    book: { title: "", author: "" },
    type: "",
    typeEtcString: "",
    name: "",
    introduction: "",
    personnel: 1,
    Difficult: "",
    place: "",
    placeDetail: "",
    periodStudyStart: dayjs(new Date()),
    periodStudyEnd: dayjs(new Date()),
    repeat: "",
    repeatWeek: [],
    periodRecruitmentStart: dayjs(new Date()),
    periodRecruitmentEnd: dayjs(new Date()),
  },
});

export { studyFormState };
