import {
    HeartCnt,
    HeartIconBookBox,
    IconWrapperContent,
    NewBookProfile,
    NewBoxWrapper,
    SmallBookImg,
    StudyContent,
    StudyContentWrapper, StudyDiv, StudyIcon, StudyTitle
} from "../../../styles/main/BooksStyle";

export default function NewStudyBox(): JSX.Element {
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
