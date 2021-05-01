import {
    InfoBold, InfoContent,
    InfoContentWrapper,
    StudyInfoWrapper
} from "../../../../styles/detail/study/studyCommonStyle";
import {
    DivLine
} from "../../../../styles/detail/common/commonStyle";
import {Cover} from "./Cover";
import {BookInfo} from "./BookInfo";

export function StudyInfoComponent(): JSX.Element {
    return (
        <>
            <Cover/>
            <BookInfo/>
            <DivLine/>
            <StudyInfo />
            <DivLine/>
        </>
    )
}

export function StudyInfo(): JSX.Element {
    return (
        <StudyInfoWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    스터디기간
                </InfoBold>
                <InfoContent>
                    2021.4.26 (월) 00:00 ~ 2021.5.21(토) 00:00
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    모집기간
                </InfoBold>
                <InfoContent>
                    2021.4.26 (월) 00:00 ~ 2021.5.21(토) 00:00
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    스터디장소
                </InfoBold>
                <InfoContent>
                    온라인
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    활동료
                </InfoBold>
                <InfoContent>
                    무료
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    유형
                </InfoBold>
                <InfoContent>
                    글쓰기
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    모집인원
                </InfoBold>
                <InfoContent>
                    10명
                </InfoContent>
                <InfoBold>
                    (9명 모집완료)
                </InfoBold>
            </InfoContentWrapper>
        </StudyInfoWrapper>
    )
}

