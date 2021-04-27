import {BookInfo, StudyDetailCover, StudyInfo} from "../../../containers/detail/study/studyCommonContainer";
import {InfoWrapper, StudyBookImg} from "../../../styles/detail/study/studyCommonStyle";
import {DivLine} from "../../../styles/detail/common/commonStyle";
import {TabContainer} from "../../../containers/detail/common/commonContainer";
import DetailInfo from "./DetailInfo";
import {NewStudyWrapper, StudyBackground} from "../../../styles/main/BooksStyle";
import {BookStudyContainer, MoreButton, ThisBookBox} from "../../../containers/main/BooksContainer";
import {GoStudyDetail} from "../../../containers/detail/study/detailInfoContainer";

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

            {/* 나중에 따로 분리         */}
            <InfoWrapper>
                <DetailInfo/>
            </InfoWrapper>
            <StudyBackground>
                <NewStudyWrapper>
                    <BookStudyContainer />
                    <ThisBookBox />
                    <MoreButton />
                </NewStudyWrapper>
            </StudyBackground>
            <GoStudyDetail/>
        </>
    )
}
