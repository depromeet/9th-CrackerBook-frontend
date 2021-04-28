import {
    HostContent1,
    InfoWrapper,
    NoticeBox,
    Profile,
    StudyContentCover
} from "../../../../styles/detail/study/studyCommonStyle";
import {NewStudyWrapper, StudyBackground} from "../../../../styles/main/BooksStyle";
import {
    BookBoxStyle, BookImg,
    DateDiv,
    HostWrapper, NoticeContent,
    StudyContentWrapper,
    StudyIntroTitle,
    StudyIntroWrapper,
    TotalView
} from "../../../../styles/detail/study/detailInfoStyle";
import {Wrapper} from "../../../../styles/detail/common/commonStyle";
import {BookStudyContainer, MoreButton, ThisBookBox} from "../../../main/BooksComponent";

export const DetailInfoComponent = (): JSX.Element => {

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

export default function DetailInfo(): JSX.Element {
    return (
        <>
            <StudyIntro />
            <StudyNotice />
        </>
    )
}


export function StudyIntro(): JSX.Element {
    return (
        <>
            <StudyIntroTitle>
                스터디 소개
            </StudyIntroTitle>
            <StudyContentWrapper>
                왜 꾸준히 쓰고 기록하는 건 어려울까요? <br/>
                잘 기록할 수 있는 방법은 없을까요? <br/>
                이 책은 개인의 기록부터 성장을 위한 기록까지 다양한 <br/>
                기록의 방법들을 제안하며 구체적인 노하우를 전해줍니다. <br/>
                첫문장의 시작, 당신의 이야기를 들려주세요. <br/>
            </StudyContentWrapper>
        </>
    );
}


export function StudyNotice(): JSX.Element {

    return (
        <>
            <StudyIntroWrapper>
                <StudyIntroTitle>
                    스터디 공지
                </StudyIntroTitle>
                <TotalView>
                    전체보기 &gt;
                </TotalView>
            </StudyIntroWrapper>
            <NoticeBox>
                <Wrapper>
                    <Profile src='/assets/main/surprised.svg'/>
                    <HostWrapper>
                        <HostContent1>빈센조</HostContent1>
                        <StudyContentCover>
                            <DateDiv>
                                2021.05.05
                            </DateDiv>
                        </StudyContentCover>
                    </HostWrapper>
                </Wrapper>

                <NoticeContent>
                    안녕하세요 스터디장 빈센조입니다! <br/>

                    이번주는 원래 4장까지 읽어오기로 했지만, 3장 길이가 너무 많은 관계로 3장까지만 읽어오는걸로 하겠습니다 :-) <br/>
                    모두 다음주에 만나요!
                </NoticeContent>
            </NoticeBox>
        </>

    )
}

export const GoStudyDetail = (): JSX.Element => {
    return (
        <>
            <StudyIntroTitle>
                책 상세정보
            </StudyIntroTitle>
            <BookBox/>
        </>
    )
}

export const BookBox = (): JSX.Element => {

    return (
        <BookBoxStyle>
            <BookImg src="/assets/main/exBook.jpg"/>
        </BookBoxStyle>
    )
}
