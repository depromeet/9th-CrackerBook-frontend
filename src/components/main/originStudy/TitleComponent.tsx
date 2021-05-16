import {TitleDiv, TitleWrapper, TotalView} from "../../../styles/main/BooksStyle";
import {useRecoilState} from "recoil";
import {CategoryTypeState, HeaderTextState} from "../../../state/main/mainState";

export default function TitleComponent(props: { bookName: string }): JSX.Element {
    const [categoryState, setCategoryState] = useRecoilState<string>(CategoryTypeState);
    const [headerState, setHeaderState] = useRecoilState<string>(HeaderTextState);
    const bookName = props.bookName.length > 11 ? props.bookName.slice(0, 10) + '...' : props.bookName;
    return (
        <>
            <TitleDiv>&apos;{bookName}&lsquo;의</TitleDiv>
            <TitleWrapper>
                <TitleDiv>스터디</TitleDiv>
                <TotalView onClick={() => {
                    setCategoryState('detail');
                    setHeaderState(bookName)
                }}>전체보기 &gt;</TotalView>
            </TitleWrapper>
        </>
    );
}
