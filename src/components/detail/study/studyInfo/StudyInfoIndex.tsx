import { DivLine } from "../../../../styles/detail/common/commonStyle";
import { Cover } from "./Cover";
import { BookInfo } from "./BookInfo";
import { StudyDetailInfo } from "./StudyDetailInfo";

export function StudyInfoIndexComponent(): JSX.Element {
  return (
    <>
      <Cover />
      <BookInfo />
      <DivLine />
      <StudyDetailInfo />
      <DivLine />
    </>
  );
}
