import {BookInfo, StudyDetailCover, StudyInfo} from "../../../containers/detail/study/studyCommonContainer";
import {InfoWrapper, StudyBookImg} from "../../../styles/detail/study/studyCommonStyle";
import {DivLine} from "../../../styles/detail/common/commonStyle";
import {TabContainer} from "../../../containers/detail/common/commonContainer";
import DetailInfo from "./DetailInfo";

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
            <InfoWrapper>
                <DetailInfo/>
            </InfoWrapper>

        </>
    )
}
