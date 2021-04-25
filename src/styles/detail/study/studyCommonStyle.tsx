import styled from "styled-components";
import {MainBookStyle, TitleInfoStyle} from "../common/commonStyle";

const StudyBookCover = styled(MainBookStyle)`
  width: 375px;
  height: 490px;
`;

const StudyBookImg = styled.img`
  width: 164px;
  height: 236px;
  border-radius: 2px 8px 8px 2px;
`;

const TitleStudyInfoWrapper = styled(TitleInfoStyle)`
  top: -150px;
  height: 386px;
`;

export {
    TitleStudyInfoWrapper,
    StudyBookImg,
    StudyBookCover
}
