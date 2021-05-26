import {
  DropDown,
  LikeStudyTitleWrapper,
  TitleDiv,
  TotalView,
} from "../../../styles/main/BooksStyle";

export function NewStudyTitleComponent(): JSX.Element {
  return (
    <LikeStudyTitleWrapper>
      <TitleDiv>새로 생긴 스터디</TitleDiv>
      <TotalView>
        {" "}
        모집중 <DropDown src="/assets/detail/dropDown.svg" />{" "}
      </TotalView>
    </LikeStudyTitleWrapper>
  );
}
