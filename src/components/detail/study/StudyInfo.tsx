import {
    Bar,
    HostBox, HostContent1, HostContent2, HostContent3, HostContentCover,
    InfoBold, InfoContent,
    InfoContentWrapper, Profile,
    StudyBookCover,
    StudyBookImg, StudyContentCover,
    StudyInfoWrapper,
    TitleStudyInfoWrapper
} from "../../../styles/detail/study/studyCommonStyle";
import {
    BackButton,
    BookDetail,
    BookDetailWrapper,
    DivLine,
    SearchButton,
    Title
} from "../../../styles/detail/common/commonStyle";
import {TitleInner} from "../../../styles/detail/book/bookDetailStyle";

export function StudyInfoComponent(): JSX.Element {
    return (
        <>
            <StudyBookImg src="/assets/main/exBook.jpg"/>
            <StudyDetailCover/>
            <BookInfo/>
            <DivLine/>
            <StudyInfo />
            <DivLine/>
        </>
    )
}

export function StudyDetailCover(): JSX.Element {
    return (
        <>
            <StudyBookCover>
                <BackButton src="/assets/detail/back.svg"/>
                <SearchButton src="/assets/detail/magnifyingGlass.svg"/>
            </StudyBookCover>
        </>
    )
}

export function BookInfo(): JSX.Element {
    return (
        <TitleStudyInfoWrapper>
            <TitleInner>
                <Title>눈치껏 못 배웁니다, 일센스</Title>
                <BookDetailWrapper>
                    <BookDetail> 공여사들 저 |</BookDetail>
                    <BookDetail> 21세기북스 |</BookDetail>
                    <BookDetail> 2021. 04. 14 </BookDetail>
                </BookDetailWrapper>
            </TitleInner>
            <HostBoxContainer/>
        </TitleStudyInfoWrapper>
    );
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

export function HostBoxContainer(): JSX.Element {

    return (
        <HostBox>
            <Profile src='/assets/main/surprised.svg'/>
            <div>
                <HostContentCover>
                    <HostContent1>빈센조</HostContent1>
                    <HostContent3 src='/assets/detail/trophy.svg' />
                    <HostContent2>슈퍼크래커</HostContent2>
                </HostContentCover>
                <StudyContentCover>
                    <div>
                        스터디 7
                    </div>
                    <Bar>
                        |
                    </Bar>
                    <div>
                        후기 286
                    </div>
                </StudyContentCover>
            </div>
        </HostBox>
    )
}
