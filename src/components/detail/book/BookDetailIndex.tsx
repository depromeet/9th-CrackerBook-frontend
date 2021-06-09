import { DivLine } from "../../../styles/detail/common/commonStyle";
import { BookCover, BookInfo } from "./BookInfo";
import { TabContainer } from "./BookTab";
import { BottomBar } from "../common/BottomBarComponent";
import { LoginConfirm } from "../confirmStudy/ConfirmStudy";
import { useState } from "react";

export default function BookDetailIndexComponent(): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div>
        <BookCover />
        <BookInfo />
        <DivLine />
        <TabContainer />
      </div>
      {openModal && <LoginConfirm setOpenModal={setOpenModal} />}
      <BottomBar
        text="이 책으로 스터디 만들기"
        type="book"
        setOpenModal={setOpenModal}
      />
    </>
  );
}
