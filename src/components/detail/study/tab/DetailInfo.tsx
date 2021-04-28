import {GoStudyDetail, StudyIntro, StudyNotice} from "../../../../containers/detail/study/detailInfoContainer";
import {InfoWrapper} from "../../../../styles/detail/study/studyCommonStyle";
import {NewStudyWrapper, StudyBackground} from "../../../../styles/main/BooksStyle";
import {BookStudyContainer, MoreButton, ThisBookBox} from "../../../../containers/main/BooksContainer";

export default function DetailInfo(): JSX.Element {
    return (
        <>
            <StudyIntro />
            <StudyNotice />
        </>
    )
}

export const DetailInfoContainer = (): JSX.Element => {

    return (
        <>
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
