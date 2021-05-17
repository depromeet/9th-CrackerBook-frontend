import {NewStudyWrapper, StudyBackground} from "../../../styles/main/BooksStyle";
import {BookStudyContainer, MoreButton, ThisBookBox} from "../../main/index/MainIndexComponent";
import IndexComponent from "./StudyReview/IndexComponent";

export function BookTabInfo(): JSX.Element {
    return (
        <>
            <StudyBackground>
                    <NewStudyWrapper>
                        <BookStudyContainer />
                        <ThisBookBox />
                        <MoreButton backgroundColor='#f1f1f3'/>
                    </NewStudyWrapper>
                    <IndexComponent/>
            </StudyBackground>
        </>
    )
}
