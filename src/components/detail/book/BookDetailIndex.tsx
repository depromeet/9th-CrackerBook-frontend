import {BottomBarStyle, DivLine} from "../../../styles/detail/common/commonStyle";
import {BookCover, BookInfo} from "./BookInfo";
import {TabContainer} from "./BookTab";
import {BottomBar} from "../common/CommonComponent";
import styled from "styled-components";

export default function BookDetailIndexComponent(): JSX.Element {
  return (
      <>
          <div>
              <BookCover />
              <BookInfo />
              <DivLine />
              <TabContainer />
          </div>
          <BottomBar text='이 책으로 스터디 만들기' type='book'/>
      </>
  );
}
