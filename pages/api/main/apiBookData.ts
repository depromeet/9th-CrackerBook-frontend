// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  bookName: string;
  img: string;
  studyName: Array<string>;
  host: Array<string>;
  memberCnt: Array<number>;
  startData: Array<string>;
  endData: Array<string>;
};

export default (_req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({
    bookName: "데이터 분석하는 디자이너 되기",
    img: "/assets/main/exBook.jpg",
    studyName: [
      "같이 포트폴리오 만들어요",
      "토론과 함께하는 데이터 디자인",
      "에세이 글쓰기",
      "생각의 힘을 길러주는 토론",
    ],
    host: ["데이지", "김또깡", "김아무개", "장발장"],
    memberCnt: [3, 5, 7, 8],
    startData: ["2021.05.21", "2021.06.28", "2021.08.21", "2021.09.01"],
    endData: ["2021.05.29", "2021.07.08", "2021.09.21", "2021.11.01"],
  });
};
