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
    book: {
      id: "",
      isbn_long: "",
      name: "",
      authors: "",
      title: "",
      author: "",
    },
    type: "",
    typeEtcString: "", // Type이 Etc인 경우 수동으로 타입을 입력 함
    studyName: "",
    description: "",
    capacity: 1,
    difficulty: "",
    placeType: "", // 온 + 오프라인인 경우
    placeDetail: "", // 오프라인 or 온 + 오프라인 일 때 모임 장소
    studyStartDate: dayjs(new Date()),
    studyEndDate: dayjs(EndDate),
    frequency: 0,
    repeat: "", // 스터디 반복
    // { label: "매주", value: "oneweek" },
    // { label: "격주", value: "twoweek" },
    // { label: "매월", value: "month" },
    // { label: "반복 안함", value: "norepeat" },
    repeatWeek: [], // 스터디 요일
    // { label: "일", value: 0 },
    // { label: "월", value: 1 },
    // { label: "화", value: 2 },
    // { label: "수", value: 3 },
    // { label: "목", value: 4 },
    // { label: "금", value: 5 },
    // { label: "토", value: 6 },
    recruitStartAt: dayjs(new Date()),
    recruitEndAt: dayjs(EndDate),
  },
});

export { studyFormState };
