import { atom } from "recoil";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const EndDate = new Date();
EndDate.setDate(EndDate.getDate() + 1);

const studyFormState = atom({
  key: `studyForm`,
  default: {
    book: { name: "", authors: "", title: "", author: "" },
    type: "",
    typeEtcString: "",
    name: "",
    introduction: "",
    personnel: 1,
    Difficult: "",
    place: "",
    placeDetail: "",
    periodStudyStart: dayjs(new Date()),
    periodStudyEnd: dayjs(EndDate),
    repeat: "",
    repeatWeek: [],
    periodRecruitmentStart: dayjs(new Date()),
    periodRecruitmentEnd: dayjs(EndDate),
  },
});

export { studyFormState };
