import {NewStudyWrapper, StudyBackground} from "../../../styles/main/BooksStyle";
import {MoreButton, NewStudyBox, StudyContainer} from "../index/MainIndexComponent";

export default function NewStudyComponent(): JSX.Element {
    return (
        <StudyBackground>
            <NewStudyWrapper>
                <StudyContainer />
                <NewStudyBox />
                <MoreButton backgroundColor='#f1f1f3'/>
            </NewStudyWrapper>
        </StudyBackground>
    )
}
