import {
  NewStudyWrapper,
  StudyBackground,
} from "../../../styles/main/BooksStyle";
import NewStudyBox from "./NewStudyBoxComponent";
import { NewStudyTitleComponent } from "./NewStudyTitleComponent";
import MoreButtonComponent from "../../common/moreButton/MoreButtonComponent";

const studyList = [
  {
    studyName: "하루 한장 아이패드 드로잉",
    startDate: "2021.04.26",
    endDate: "05.21 토 14:00",
    memberCnt: "4/10",
    imgPath: "/assets/main/miniBook1.svg",
    studyType: "기타",
  },
  {
    studyName: "유저 리서치 실습해요",
    startDate: "2021.04.26",
    endDate: "05.21 토 14:00",
    memberCnt: "4/10",
    imgPath: "/assets/main/miniBook2.svg",
    studyType: "발표",
  },
  {
    studyName: "프로 일잘러를 위한 디자인...",
    startDate: "2021.04.26",
    endDate: "05.21 토 14:00",
    memberCnt: "4/10",
    imgPath: "/assets/main/miniBook3.svg",
    studyType: "토론",
  },
  {
    studyName: "헤르만헤세 팬 모여라!",
    startDate: "2021.04.26",
    endDate: "05.21 토 14:00",
    memberCnt: "4/10",
    imgPath: "/assets/main/miniBook4.svg",
    studyType: "기타",
  },
  {
    studyName: "커넥티드 글쓰기 모임",
    startDate: "2021.04.26",
    endDate: "05.21 토 14:00",
    memberCnt: "4/10",
    imgPath: "/assets/main/miniBook5.svg",
    studyType: "글쓰기",
  },
  {
    studyName: "웹소설 써서 먹고사는 사람들",
    startDate: "2021.04.26",
    endDate: "05.21 토 14:00",
    memberCnt: "4/10",
    imgPath: "/assets/main/miniBook6.svg",
    studyType: "포트폴리오",
  },
];

export default function NewStudyComponent(): JSX.Element {
  return (
    <>
      <StudyBackground>
        <NewStudyWrapper>
          <NewStudyTitleComponent />
          {studyList.map((study) => {
            return (
              <>
                <NewStudyBox study={study} />
              </>
            );
          })}
          <MoreButtonComponent backgroundColor="#f1f1f3" />
        </NewStudyWrapper>
      </StudyBackground>
    </>
  );
}
