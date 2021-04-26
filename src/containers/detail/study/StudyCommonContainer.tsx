import {
    Bar,
    HostBox, HostContent1, HostContent2, HostContent3, HostContentCover, Profile,
    StudyBookCover,
    StudyBookImg, StudyContentCover,
    TitleStudyInfoWrapper
} from "../../../styles/detail/study/studyCommonStyle";
import {TitleInner} from "../../../styles/detail/book/bookDetailStyle";
import {
    BackButton,
    BookDetail,
    BookDetailWrapper,
    SearchButton,
    Title
} from "../../../styles/detail/common/commonStyle";

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
