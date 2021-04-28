import {DivLine} from "../../../styles/detail/common/commonStyle";
import {BookCover, BookInfo} from "./BookInfo";
import {TabContainer} from "./BookTab";

export default function BookDetailIndexComponent(): JSX.Element {
  return (
    <div>
      <BookCover />
      <BookInfo />
      <DivLine />
      <TabContainer />
    </div>
  );
}
