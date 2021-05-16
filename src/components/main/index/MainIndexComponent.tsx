import {
    DownImg, DropDown,
    HeartCnt,
    HeartIconBookBox,
    IconWrapperContent,
    LikeStudyTitleWrapper,
    MoreBtn, NewBoxWrapper,
    StudyContent,
    StudyDiv,
    StudyIcon,
    StudyTitle,
    TitleDiv,
    TotalView,
} from "../../../styles/main/BooksStyle";
import Link from "next/link";
import {useState} from "react";
import {ThisBookContentWrapper} from "../../../styles/detail/book/bookDetailStyle";
import BooksHeaderComponent from "../header/BooksHeaderComponent";
import LikeBookComponent from "../likeStudy/LikeBookComponent";
import NewStudyComponent from "../newStudy/NewStudyComponent";
import OriginStudyComponent from "../originStudy/OriginStudyComponent";
import {SelectModal} from "../../detail/common/SelectModal";

interface BookData {
    bookName: string;
    img: string;
    studyName: string;
    host: string;
    memberCnt: number;
    startData: string;
    endData: string;
}

export default function MainIndexComponent(props: {
    bookData: Array<BookData>;
}): JSX.Element {
    const data = props.bookData;
    return (
        <>
            {!data ? (
                <div>로딩중</div>
            ) : (
                <>
                    <BooksHeaderComponent/>
                    <OriginStudyComponent bookData={data}/>
                    <LikeBookComponent/>
                    <NewStudyComponent/>
                </>
            )}
        </>
    );
}

export function BookStudyContainer(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const viewModal = (e) => {
        setIsOpen(!isOpen);
    };
    return (
        <LikeStudyTitleWrapper>
            <TitleDiv>이 책의 스터디</TitleDiv>
            <TotalView onClick={viewModal}>
                모집중 <DropDown src="/assets/detail/dropDown.svg"/>
            </TotalView>
            {isOpen ? <SelectModal/> : ""}
        </LikeStudyTitleWrapper>
    );
}

export function ThisBookBox(): JSX.Element {
    return (
        <>
            <Link href='/detail/study/studyDetail'>
                <NewBoxWrapper>
                    <ThisBookContentWrapper>
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
                    </ThisBookContentWrapper>
                    <IconWrapperContent>
                        <HeartIconBookBox src="/assets/main/heart.svg"/>
                        <HeartCnt>6</HeartCnt>
                    </IconWrapperContent>
                </NewBoxWrapper>
            </Link>
        </>
    );
}

export function MoreButton(props: { backgroundColor: string }): JSX.Element {
    return (
        <MoreBtn background={props.backgroundColor}>
            더 보기 <DownImg src="/assets/main/caretDown.svg"/>
        </MoreBtn>
    );
}

