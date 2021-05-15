import {
    HeartCnt,
    HeartIconBookBox,
    IconWrapperContent,
    StudyContent,
    StudyContentWrapper, StudyDiv,
    StudyHost, StudyIcon,
    StudyImg,
    StudyInfoWrapper,
    StudyProfile, StudyTitle
} from "../../../styles/main/BooksStyle";

interface BookData {
    bookName: string;
    img: string;
    studyName: string;
    host: string;
    memberCnt: number;
    startData: string;
    endData: string;
}

export default function BookInfoComponent(props: { bookInfo: BookData }): JSX.Element {
    const bookData = props.bookInfo;
    return (
        <>
            <StudyInfoWrapper>
                <StudyProfile>
                    <StudyImg src="/assets/main/exBook.jpg" />
                    <StudyHost>{bookData.host}</StudyHost>
                </StudyProfile>
                <StudyContentWrapper>
                    <StudyContent isLike={false}>
                        <StudyIcon src="/assets/main/bookIcon.svg" />
                        <StudyDiv>토론</StudyDiv>
                        <StudyIcon src="/assets/main/memberIcon.svg" />
                        <div>멤버 3/6</div>
                    </StudyContent>
                    <StudyTitle isLike={false}>{bookData.studyName}</StudyTitle>
                    <StudyContent isLike={false}>
                        {bookData.startData} ~ {bookData.endData} 토 14:00
                    </StudyContent>
                </StudyContentWrapper>
                <IconWrapperContent>
                    <HeartIconBookBox src="/assets/main/heart.svg" />
                    <HeartCnt>6</HeartCnt>
                </IconWrapperContent>
            </StudyInfoWrapper>
        </>
    );
}
