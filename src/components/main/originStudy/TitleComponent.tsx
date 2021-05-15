import {TitleDiv, TitleWrapper, TotalView} from "../../../styles/main/BooksStyle";

export default function TitleComponent(props: { bookName: string }): JSX.Element {
    const bookName = props.bookName.length > 11 ? props.bookName.slice(0, 10) + '...' : props.bookName;
    return (
        <>
            <TitleDiv>&apos;{bookName}&lsquo;의</TitleDiv>
            <TitleWrapper>
                <TitleDiv>스터디</TitleDiv>
                <TotalView>전체보기 &gt;</TotalView>
            </TitleWrapper>
        </>
    );
}
