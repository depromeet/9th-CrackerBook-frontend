import { atom } from "recoil";

const bookListState = atom({
  key: `booklist`,
  default: [
    {
      title: "화성 갈 거니까",
      author: "일론머스크",
      publish: "도지코인",
      date: "2021.02.22",
    },
    {
      title: "민태님이 안 된다고 했다",
      author: "김민태",
      publish: "민태사",
      date: "2021.02.22",
    },
    {
      title:
        "책 하나 제가 했습니다. 긴 제목의 책이 필요해서 정말 제목이 긴 책 이름으로",
      author: "이성용",
      publish: "맹그로브숲",
      date: "2021.02.22",
    },
    {
      title: "가나다라마바사",
      author: "세종대왕",
      publish: "세종대왕",
      date: "2021.02.22",
    },
    {
      title: "코로나 팬데믹 리포트",
      author: "차우준",
      publish: "민음사",
      date: "2021.04.09",
    },
    {
      title: "드론과 현장 : 산림 편",
      author: "김신지",
      publish: "맹그로브숲",
      date: "2021.02.22",
    },
    {
      title: "비전공자를 위해 이해할 수 있는 정말 긴 책 제목의 책",
      author: "김신지",
      publish: "맹그로브숲",
      date: "2021.02.22",
    },
    {
      title: "드론과 현장 : 산림 편",
      author: "김신지",
      publish: "맹그로브숲",
      date: "2021.02.22",
    },
    {
      title: "노자 도덕경",
      author: "도덕경",
      publish: "민음사",
      date: "2021.04.09",
    },
    {
      title:
        "책 하나 제가 했습니다. 긴 제목의 책이 필요해서 정말 제목이 긴 책 이름으로",
      author: "이성용",
      publish: "맹그로브숲",
      date: "2021.02.22",
    },
    {
      title: "코로나 팬데믹 리포트",
      author: "차우준",
      publish: "민음사",
      date: "2021.04.09",
    },
    {
      title: "드론과 현장 : 산림 편",
      author: "김신지",
      publish: "맹그로브숲",
      date: "2021.02.22",
    },
    {
      title: "비전공자를 위해 이해할 수 있는 정말 긴 책 제목의 책",
      author: "김신지",
      publish: "민음사",
      date: "2021.04.09",
    },
    {
      title: "드론과 현장 : 산림 편",
      author: "김신지",
      publish: "맹그로브숲",
      date: "2021.02.22",
    },
    {
      title: "노자 도덕경",
      author: "도덕경",
      publish: "민음사",
      date: "2021.04.09",
    },
  ],
});

export { bookListState };
