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
  position: absolute;
  top: 130px;
  left: 104px;             
  z-index: 10;
`;

const TitleStudyInfoWrapper = styled(TitleInfoStyle)`
  top: -150px;
  height: 386px;
`;

const HostBox = styled.div`
  margin: 35px 20px 40px;
  padding: 20px 100px 20px 20px;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 1px 2px 7px 5px #f4f4f4;
  display: flex;
  justify-content: center;
`;

const Profile = styled.img`
  border-radius: 15px 15px 15px 15px;
  height: 48px;
  width: 48px;
  padding-right: 15px;
`;

const HostContentCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 130px;
`;

const HostContent1 = styled.div`
  font-weight: bold;
  font-size: 14px;
  padding-right: 5px;
`;

const HostContent2 = styled.div`
  color: #677AC7;
  font-size: 12px;
  font-family: 'Jua', sans-serif;
`;

const HostContent3 = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 4px;
`;

const StudyContentCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  color: #999999;
  padding-top: 2px;
  font-size: 12px;
`;

const Bar = styled.div`
  color: #F1F1F3;
  padding-left: 10px;
  padding-right: 10px;
`;

export {
    Bar,
    StudyContentCover,
    HostBox,
    HostContent1,
    HostContent2,
    HostContent3,
    HostContentCover,
    Profile,
    TitleStudyInfoWrapper,
    StudyBookImg,
    StudyBookCover
}
