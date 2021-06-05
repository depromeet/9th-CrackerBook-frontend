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
    studyName: "",
    description: "",
    capacity: 1,
    difficulty: "",
    placeType: "",
    placeDetail: "", //
    studyStartDate: dayjs(new Date()),
    studyEndDate: dayjs(EndDate),
    studyDiffDate: [], // 0 : 기간, 1 : 시작 요일
    frequency: 0,
    repeat: "", //
    repeatWeek: [], //
    recruitStartAt: dayjs(new Date()),
    recruitEndAt: dayjs(EndDate),
  },
});

export { studyFormState };
