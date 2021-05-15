import {NewStudyWrapper, StudyBackground} from "../../../styles/main/BooksStyle";
import Link from "next/link";
import {BookStudyContainer, MoreButton, ThisBookBox} from "../../main/index/MainIndexComponent";

export function BookTabInfo(): JSX.Element {
    return (
        <>
            <StudyBackground>
                <Link href='/detail/study/studyDetail'>
                    <NewStudyWrapper>
                        <BookStudyContainer />
                        <ThisBookBox />
                        <MoreButton backgroundColor='#f1f1f3'/>
                    </NewStudyWrapper>
                </Link>
            </StudyBackground>
        </>
    )
}
