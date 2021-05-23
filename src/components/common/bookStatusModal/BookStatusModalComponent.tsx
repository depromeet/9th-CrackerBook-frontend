import { useState } from "react";
import { DropDown, LikeStudyTitleWrapper, TitleDiv, TotalView } from "../../../styles/main/BooksStyle";
import { SelectModal } from "../../detail/common/SelectModal";

export default function BookStatusModalComponent(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const viewModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <LikeStudyTitleWrapper>
      <TitleDiv>이 책의 스터디</TitleDiv>
      <TotalView onClick={viewModal}>
        모집중 <DropDown src="/assets/detail/dropDown.svg" />
      </TotalView>
      {isOpen ? <SelectModal /> : ""}
    </LikeStudyTitleWrapper>
  );
}
