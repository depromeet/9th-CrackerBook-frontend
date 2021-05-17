import { atom } from "recoil";

const studyState = atom({
  key: `study`,
  default: [
    {
      category: "etc",
      members: 1,
      title: "UX 디자인 실습하기",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "debate",
      members: 1,
      title: "달리기 수업",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "announcement",
      members: 1,
      title: "드론과 현장 : 산림 편",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "debate",
      members: 1,
      title: "UX 디자인 실습하기",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "portfolio",
      members: 1,
      title: "달리기 수업",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "debate",
      members: 1,
      title: "노자 도덕경",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "writing",
      members: 1,
      title: "오래자기 챌린지",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "announcement",
      members: 1,
      title: "코로나 팬데믹 리포트",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "debate",
      members: 1,
      title: "드론과 현장 : 산림 편",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "announcement",
      members: 1,
      title: "UX 디자인 실습하기",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "writing",
      members: 1,
      title: "드론과 현장 : 산림 편",
      date: "04.26 ~ 05.26 토 14:00",
    },
    {
      category: "debate",
      members: 1,
      title: "노자 도덕경",
      date: "04.26 ~ 05.26 토 14:00",
    },
  ],
});

export { studyState };
