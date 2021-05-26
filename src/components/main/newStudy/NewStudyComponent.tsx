import {
  NewStudyWrapper,
  StudyBackground,
} from "../../../styles/main/BooksStyle";
import NewStudyBox from "./NewStudyBoxComponent";
import { NewStudyTitleComponent } from "./NewStudyTitleComponent";
import MoreButtonComponent from "../../common/moreButton/MoreButtonComponent";

export default function NewStudyComponent(): JSX.Element {
  return (
    <StudyBackground>
      <NewStudyWrapper>
        <NewStudyTitleComponent />
        <NewStudyBox />
        <MoreButtonComponent backgroundColor="#f1f1f3" />
      </NewStudyWrapper>
    </StudyBackground>
  );
}
