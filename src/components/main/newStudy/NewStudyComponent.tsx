import {
    DropDown, HeartCnt, HeartIconBookBox, IconWrapperContent,
    LikeStudyTitleWrapper, NewBookProfile, NewBoxWrapper,
    NewStudyWrapper, SmallBookImg,
    StudyBackground, StudyContent, StudyContentWrapper, StudyDiv, StudyIcon, StudyTitle,
    TitleDiv,
    TotalView
} from "../../../styles/main/BooksStyle";
import {MoreButton} from "../index/MainIndexComponent";

export default function NewStudyComponent(): JSX.Element {
    return (
        <StudyBackground>
            <NewStudyWrapper>
                <StudyContainer />
                <NewStudyBox />
                <MoreButton backgroundColor='#f1f1f3'/>
            </NewStudyWrapper>
        </StudyBackground>
    )
}

export function StudyContainer(): JSX.Element {
    return (
        <LikeStudyTitleWrapper>
            <TitleDiv>새로 생긴 스터디</TitleDiv>
            <TotalView>
                {" "}
                모집중 <DropDown src="/assets/detail/dropDown.svg"/>{" "}
            </TotalView>
        </LikeStudyTitleWrapper>
    );
}

export function NewStudyBox(): JSX.Element {
    return (
        <>
            <NewBoxWrapper>
                <NewBookProfile>
                    <SmallBookImg src="/assets/main/exBook.jpg"/>
                </NewBookProfile>
                <StudyContentWrapper>
                    <StudyContent isLike={false}>
                        <StudyIcon src="/assets/main/bookIcon.svg"/>
                        <StudyDiv>토론</StudyDiv>
                        <StudyIcon src="/assets/main/memberIcon.svg"/>
                        <div>멤버 3/6</div>
                    </StudyContent>
                    <StudyTitle isLike={false}>직장인 북클럽</StudyTitle>
                    <StudyContent isLike={false}>
                        2021.04.26 ~ 05.21 토 14:00
                    </StudyContent>
                </StudyContentWrapper>
                <IconWrapperContent>
                    <HeartIconBookBox src="/assets/main/heart.svg"/>
                    <HeartCnt>6</HeartCnt>
                </IconWrapperContent>
            </NewBoxWrapper>
        </>
    );
}
