import {
  StudyBackground,
  ThisBookWrapper,
} from "../../../styles/main/BooksStyle";
import IndexComponent from "./StudyReview/IndexComponent";
import BookStatusModalComponent from "../../common/bookStatusModal/BookStatusModalComponent";
import MoreButtonComponent from "../../common/moreButton/MoreButtonComponent";
import ThisBookBoxComponent from "../../main/common/BookBoxComponent";

export function BookTabInfo(): JSX.Element {
  return (
    <>
      <StudyBackground>
        <ThisBookWrapper>
          <BookStatusModalComponent />
          <ThisBookBoxComponent />
          <MoreButtonComponent backgroundColor="#f1f1f3" />
        </ThisBookWrapper>
        <IndexComponent />
      </StudyBackground>
    </>
  );
}
