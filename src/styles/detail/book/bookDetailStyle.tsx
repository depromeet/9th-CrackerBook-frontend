import styled from "styled-components";
import { MainBookStyle, TitleInfoStyle } from "../common/commonStyle";

const MainBookCover = styled(MainBookStyle)`
  width: 375px;
  height: 403px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookImg = styled.img`
  width: 138px;
  height: 200px;
  border-radius: 2px 8px 8px 2px;
`;

const TitleInfoWrapper = styled(TitleInfoStyle)`
  top: -22px;
  height: 190px;
`;

export { MainBookCover, BookImg, TitleInfoWrapper };
