import styled from "styled-components";
import {Box, MainBookStyle, TitleInfoStyle} from "../common/commonStyle";

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
  height: 175px;
`;

const HostBox = styled(Box)`
  margin: 35px 20px 40px;
  padding: 20px 100px 20px 20px;
  display: flex;
  align-items: center;
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

const StudyInfoWrapper = styled.div`
  padding: 40px 12px 40px 20px;
`;

const InfoContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-top: 10px;
`;

const InfoBold = styled.div`
  font-weight: 700;
  color: #222222;
  font-size: 14px;
  padding-right: 10px;
  min-width: 65px;
`;

const InfoContent = styled.div`
  font-size: 14px;
  color: #777777;
`;

const InfoWrapper = styled.div`
  padding: 20px 20px;
`;

const NoticeBox = styled(Box)`
  margin: 35px 0 40px;
  padding: 20px 100px 20px 20px;
  justify-content: left;
`;

export {
    NoticeBox,
    InfoWrapper,
    StudyInfoWrapper,
    InfoContentWrapper,
    InfoBold,
    InfoContent,
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
