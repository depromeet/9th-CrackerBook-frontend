import {BookCover, BookInfo, TabContainer} from "../../../containers/detail/book/bookDetailContainer";
import {DivLine} from "../../../styles/detail/book/bookDetailStyle";
import {NewStudyWrapper, StudyBackground} from "../../../styles/main/BooksStyle";
import {MoreButton, StudyContainer, ThisBookBox} from "../../../containers/main/BooksContainer";

export default function BookDetailComponent(): JSX.Element {
  return (
    <div>
        <BookCover/>
        <BookInfo/>
        <DivLine />
        <TabContainer/>

        <StudyBackground>
            <NewStudyWrapper>
                <StudyContainer />
                <ThisBookBox />
                <MoreButton />
            </NewStudyWrapper>
        </StudyBackground>
    </div>
  );
}
