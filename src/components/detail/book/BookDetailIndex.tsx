import { DivLine } from "../../../styles/detail/common/commonStyle";
import { BookCover, BookInfo } from "./BookInfo";
import { TabContainer } from "./BookTab";
import { BottomBar } from "../common/BottomBarComponent";
import { useRecoilState } from "recoil";
import { ConfirmBoxState } from "../../../state/detail/detailState";
import { LoginConfirm } from "../confirmStudy/ConfirmStudy";

export default function BookDetailIndexComponent(): JSX.Element {
  const [confirmBoxState] = useRecoilState<boolean>(ConfirmBoxState);
  return (
    <>
      <div>
        <BookCover />
        <BookInfo />
        <DivLine />
        <TabContainer />
      </div>
      {confirmBoxState && <LoginConfirm />}
      <BottomBar text="이 책으로 스터디 만들기" type="book" />
    </>
  );
}
