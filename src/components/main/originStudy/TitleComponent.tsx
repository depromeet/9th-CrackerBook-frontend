import {
  TitleDiv,
  TitleWrapper,
  TotalView,
} from "../../../styles/main/BooksStyle";
import { useSetRecoilState } from "recoil";
import {
  CategoryTypeState,
  HeaderTextState,
} from "../../../state/main/mainState";

export default function TitleComponent(props: {
  bookName: string;
}): JSX.Element {
  const setCategoryState = useSetRecoilState<string>(CategoryTypeState);
  const setHeaderState = useSetRecoilState<string>(HeaderTextState);
  const bookName =
    props.bookName.length > 11
      ? props.bookName.slice(0, 17) + "..."
      : props.bookName;
  const detailPageBookName = props.bookName.slice(0, 10) + "...";
  return (
    <>
      <TitleDiv>&apos;{bookName}&apos;의</TitleDiv>
      <TitleWrapper>
        <TitleDiv>스터디</TitleDiv>
        <TotalView
          onClick={() => {
            setCategoryState("detail");
            setHeaderState(detailPageBookName);
          }}
        >
          전체보기 &gt;
        </TotalView>
      </TitleWrapper>
    </>
  );
}
