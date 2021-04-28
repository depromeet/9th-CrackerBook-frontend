import {BookInfo, StudyDetailCover, StudyInfo} from "../../../containers/detail/study/studyCommonContainer";
import {StudyBookImg} from "../../../styles/detail/study/studyCommonStyle";
import {DivLine} from "../../../styles/detail/common/commonStyle";
import {Tab} from "../../../containers/detail/study/tab/tab";

export default function StudyCommon():JSX.Element {
    
    return (
        <>
            <StudyBookImg src="/assets/main/exBook.jpg"/>
            <StudyDetailCover/>
            <BookInfo/>
            <DivLine/>
            <StudyInfo />
            <DivLine/>
            <Tab/>
        </>
    )
}
