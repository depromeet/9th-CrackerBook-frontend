import {NewStudyWrapper, StudyBackground} from "../../../styles/main/BooksStyle";
import Link from "next/link";
import {BookStudyContainer, MoreButton, ThisBookBox} from "../../../containers/main/BooksContainer";

export function BookTabInfo(): JSX.Element {
    return (
        <>
            <StudyBackground>
                <Link href='/detail/study/studyDetail'>
                    <NewStudyWrapper>
                        <BookStudyContainer />
                        <ThisBookBox />
                        <MoreButton />
                    </NewStudyWrapper>
                </Link>
            </StudyBackground>
        </>
    )
}
