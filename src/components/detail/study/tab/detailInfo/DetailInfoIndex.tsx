import { InfoWrapper } from "../../../../../styles/detail/study/studyCommonStyle";
import { StudyBackground } from "../../../../../styles/main/BooksStyle";
import { StudyIntro } from "./StudyIntro";
import { StudyNotice } from "./StudyNotice";
import { NewStudy } from "./NewStudy";
import { GoStudyDetail } from "./GoStudyDetail";

export const DetailInfoComponent = (): JSX.Element => {
  return (
    <>
      <InfoWrapper>
        <StudyIntro />
        <StudyNotice />
      </InfoWrapper>
      <StudyBackground>
        <NewStudy />
      </StudyBackground>
      <GoStudyDetail />
    </>
  );
};
