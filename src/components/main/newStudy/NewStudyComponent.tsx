import {
    NewStudyWrapper,
    StudyBackground
} from "../../../styles/main/BooksStyle";
import {MoreButton} from "../index/MainIndexComponent";
import NewStudyBox from "./NewStudyBoxComponent";
import {NewStudyTitleComponent} from "./NewStudyTitleComponent";

export default function NewStudyComponent(): JSX.Element {
    return (
        <StudyBackground>
            <NewStudyWrapper>
                <NewStudyTitleComponent />
                <NewStudyBox />
                <MoreButton backgroundColor='#f1f1f3'/>
            </NewStudyWrapper>
        </StudyBackground>
    )
}




