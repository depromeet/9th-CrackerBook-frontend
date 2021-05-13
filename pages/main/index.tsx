// import axios from "axios";
import { useEffect, useState } from "react";
import BooksComponent from "../../src/components/main/BooksComponent";
import HeaderComponent from "../../src/components/common/Header";

interface BookData {
  bookName: string;
  img: string;
  studyName: string;
  host: string;
  memberCnt: number;
  startData: string;
  endData: string;
}

export default function Index(): JSX.Element {
  const [bookData, setBookData] = useState<Array<BookData>>();
  useEffect(() => {
    setBookData([
      {
        bookName: "데이터 분석하는 디자이너 되기",
        img: "/assets/main/exBook.jpg",
        studyName: "같이 포트폴리오 만들어요",
        host: "데이지",
        memberCnt: 3,
        startData: "2021.05.21",
        endData: "05.29",
      },
      {
        bookName: "기록하기로 했습니다.",
        img: "/assets/main/exBook.jpg",
        studyName: "토론과 함께하는 데이터 디자인",
        host: "김또깡",
        memberCnt: 5,
        startData: "2021.06.28",
        endData: "07.08",
      },
      {
        bookName: "그림으로 배우는 클라우드",
        img: "/assets/main/exBook.jpg",
        studyName: "에세이 글쓰기",
        host: "김아무개",
        memberCnt: 7,
        startData: "2021.08.21",
        endData: "2021.09.21",
      },
    ]);
  }, []);

  return (
    <>
      <HeaderComponent/>
      <BooksComponent bookData={bookData} />
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
