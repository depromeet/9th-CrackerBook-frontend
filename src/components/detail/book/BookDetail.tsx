import {
  BookCover,
  BookInfo,
} from "../../../containers/detail/book/bookDetailContainer";
import { DivLine } from "../../../styles/detail/book/bookDetailStyle";
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

export default function BookDetailComponent(): JSX.Element {
  return (
    <div>
      <BookCover />
      <BookInfo />
      <DivLine />
      <TabContainer />

      <StudyBackground>
        <NewStudyWrapper>
          <BookStudyContainer />
          <ThisBookBox />
          <MoreButton />
        </NewStudyWrapper>
      </StudyBackground>
    </div>
  );
}
