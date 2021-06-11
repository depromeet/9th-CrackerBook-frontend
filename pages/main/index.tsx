// import axios from "axios";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
import { studyFormState } from "src/components/states/studyForm";
import MainIndexComponent from "../../src/components/main/index/MainIndexComponent";
import HeaderComponent from "../../src/components/common/Header";
import FooterComponent from "../../src/components/common/Footer/FooterIndex";
import {
  currentStepState,
  nextStepState,
  resultListIndexState,
} from "src/components/states/opening";

type BookData = {
  bookName: string;
  img: string;
  study: Array<{
    studyName: string;
    host: string;
    memberCnt: number;
    startData: string;
    endData: string;
    profile: string;
  }>;
};

const EndDate = new Date();
EndDate.setDate(EndDate.getDate() + 1);

export default function Index(): JSX.Element {
  const [bookData, setBookData] = useState<Array<BookData>>();
  // init opening
  const setStudyForm = useSetRecoilState(studyFormState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const setNextStep = useSetRecoilState(nextStepState);
  const setResultListIndex = useSetRecoilState(resultListIndexState);
  // END : init opening
  useEffect(() => {
    setBookData([
      {
        bookName: "눈치껏 못 배웁니다, 일센스",
        img: "/assets/main/greenBook.jpg",
        study: [
          {
            studyName: "사회초년생을 위한 직팁",
            host: "데이지",
            memberCnt: 3,
            startData: "2021.05.21",
            endData: "05.29",
            profile: "/assets/main/profile2.svg",
          },
          {
            studyName: "'일센스'가 있는 사람이 되기 위해",
            host: "이지지",
            memberCnt: 3,
            startData: "2021.05.21",
            endData: "05.29",
            profile: "/assets/main/profileGreen.svg",
          },
        ],
      },
      {
        bookName: "생각의 쓰임",
        img: "/assets/main/thinkBook.svg",
        study: [
          {
            studyName: "사소한 일상으로 만드는 콘텐츠",
            host: "김또깡",
            memberCnt: 6,
            startData: "2021.06.28",
            endData: "07.08",
            profile: "/assets/main/profilePuple.svg",
          },
          {
            studyName: "마케터들의 아이디어 모임",
            host: "주리",
            memberCnt: 5,
            startData: "2021.06.28",
            endData: "07.08",
            profile: "/assets/main/profileYellow.svg",
          },
        ],
      },
      {
        bookName: "엘라스틱서치 실무 가이드",
        img: "/assets/main/elasticSearch.svg",

        study: [
          {
            studyName: "엘라스틱서치 시스템 실습",
            host: "김아무개",
            memberCnt: 7,
            startData: "2021.08.21",
            endData: "2021.09.21",
            profile: "/assets/main/profileBlue.svg",
          },
          {
            studyName: "개발자의 검색 시스템 노하우",
            host: "아무동생",
            memberCnt: 7,
            startData: "2021.08.21",
            endData: "2021.09.21",
            profile: "/assets/main/profileOrange.svg",
          },
        ],
      },
    ]);
    // init opening
    setCurrentStep(1);
    setNextStep(1);
    setResultListIndex(-1);
    setStudyForm({
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
      frequency: 0,
      repeat: "",
      repeatWeek: [],
      recruitStartAt: dayjs(new Date()),
      recruitEndAt: dayjs(EndDate),
    });
    // END : init opening
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainIndexComponent bookData={bookData} />
      <FooterComponent />
    </>
  );
}

// async function getBookData(): Promise<Array<BookData>> {
//   try {
//     const apiUrl = "/api/main/apiBookData";
//     const res = await axios.get(apiUrl);
//     if (res.status !== 200) throw new Error("데이터 Fetch 실패");

//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// }
