import { NewStudyWrapper } from "../../../../../styles/main/BooksStyle";
import BookStatusModalComponent from "../../../../common/bookStatusModal/BookStatusModalComponent";
import MoreButtonComponent from "../../../../common/moreButton/MoreButtonComponent";
import ThisBookBoxComponent from "../../../../main/common/BookBoxComponent";

export function NewStudy(): JSX.Element {
  return (
    <NewStudyWrapper>
      <BookStatusModalComponent />
      <ThisBookBoxComponent />
      <MoreButtonComponent backgroundColor="#f1f1f3" />
    </NewStudyWrapper>
  );
}
