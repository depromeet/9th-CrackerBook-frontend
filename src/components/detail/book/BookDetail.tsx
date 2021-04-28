import {
  BookCover,
  BookInfo,
} from "../../../containers/detail/book/bookDetailContainer";
import {
  NewStudyWrapper,
  StudyBackground,
} from "../../../styles/main/BooksStyle";
import {
  BookStudyContainer,
  MoreButton,
  ThisBookBox,
} from "../../../containers/main/BooksContainer";
import { TabContainer } from "../../../containers/detail/common/commonContainer";
import {DivLine} from "../../../styles/detail/common/commonStyle";
import Link from "next/link";

export default function BookDetailComponent(): JSX.Element {
  return (
    <div>
      <BookCover />
      <BookInfo />
      <DivLine />
      <TabContainer />

      <StudyBackground>
          <Link href='/detail/study/studyDetail'>
              <NewStudyWrapper>
                  <BookStudyContainer />
                  <ThisBookBox />
                  <MoreButton />
              </NewStudyWrapper>
          </Link>
      </StudyBackground>
    </div>
  );
}
