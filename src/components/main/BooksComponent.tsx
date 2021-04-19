import {Hr, MainContainer, StudyTypeDiv, StudyTypeImg, StudyTypeWrapper} from "../../styles/main/BooksStyle";

interface BookData {
    bookName: string;
    img: string;
    studyName: Array<string>;
    host: Array<string>;
    memberCnt: Array<number>;
    startData: Array<string>;
    endData: Array<string>;
}

export default function BooksComponent(props: { bookData: BookData }): JSX.Element {
    const data = props.bookData;
    const array = new Array(5).fill(1)
    const list = array.map((a, index) => (
            <StudyTypeDiv>
                <StudyTypeImg key={index} src='/assets/main/main.png'/>
            </StudyTypeDiv>
        )
    );
    return (
        <>
            <StudyTypeWrapper>
                {list}
            </StudyTypeWrapper>
            <Hr/>
            <MainContainer>

            </MainContainer>
        </>

    );
}
