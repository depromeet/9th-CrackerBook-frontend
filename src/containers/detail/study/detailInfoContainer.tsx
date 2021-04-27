import {
    DateDiv,
    HostWrapper,
    StudyContentWrapper,
    StudyIntroTitle,
    StudyIntroWrapper,
    TotalView
} from "../../../styles/detail/study/detailInfoStyle";
import {
    Bar,
    HostBox,
    HostContent1, HostContent2, HostContent3,
    HostContentCover,
    NoticeBox,
    Profile, StudyContentCover
} from "../../../styles/detail/study/studyCommonStyle";

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
                <HostWrapper>
                <Profile src='/assets/main/surprised.svg'/>
                    <HostContentCover>
                        <HostContent1>빈센조</HostContent1>
                    </HostContentCover>
                    <StudyContentCover>
                        <DateDiv>
                            2021.05.05
                        </DateDiv>
                    </StudyContentCover>
                </HostWrapper>
            </NoticeBox>
        </>

    )
}
