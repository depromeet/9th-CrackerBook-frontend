import {BookInfo, StudyDetailCover} from "../../../containers/detail/study/StudyCommonContainer";
import {Cover, StudyBookCover, StudyBookImg} from "../../../styles/detail/study/studyCommonStyle";

export default function StudyCommon():JSX.Element {
    
    return (
        <>
            <StudyBookImg src="/assets/main/exBook.jpg"/>
            <StudyDetailCover/>
            <BookInfo/>
        </>
    )
}
