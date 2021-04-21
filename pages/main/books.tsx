import axios from "axios";
import { useEffect, useState } from "react";
import BooksComponent from "../../src/components/main/BooksComponent";

interface BookData {
  bookName: string;
  img: string;
  studyName: string;
  host: string;
  memberCnt: number;
  startData: string;
  endData: string;
}

export default function Books(): JSX.Element {
  const [bookData, setBookData] = useState<Array<BookData>>();
  useEffect(() => {
    getBookData().then((book) => {
      setBookData(book);
    });
  }, []);

  return (
    <>
      <BooksComponent bookData={bookData} />
    </>
  );
}

async function getBookData(): Promise<Array<BookData>> {
  try {
    const apiUrl = "/api/main/apiBookData";
    const res = await axios.get(apiUrl);
    if (res.status !== 200) throw new Error("데이터 Fetch 실패");

    return res.data;
  } catch (e) {
    console.error(e);
  }
}
