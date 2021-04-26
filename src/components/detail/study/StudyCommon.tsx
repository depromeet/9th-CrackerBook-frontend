import {BookInfo, StudyDetailCover, StudyInfo} from "../../../containers/detail/study/StudyCommonContainer";
import {StudyBookImg} from "../../../styles/detail/study/studyCommonStyle";
import {DivLine} from "../../../styles/detail/common/commonStyle";
import {TabContainer} from "../../../containers/detail/common/commonContainer";

export default function StudyCommon():JSX.Element {
    
    return (
        <>
            <StudyBookImg src="/assets/main/exBook.jpg"/>
            <StudyDetailCover/>
            <BookInfo/>
            <DivLine/>
            <StudyInfo />
            <DivLine/>
            <TabContainer/>
        </>
    )
}
