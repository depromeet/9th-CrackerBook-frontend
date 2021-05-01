import styled from "styled-components";
import {Box, TitleInfoStyle} from "../common/commonStyle";

const TitleStudyInfoWrapper = styled(TitleInfoStyle)`
  top: -150px;
  height: 175px;
`;

const Profile = styled.img`
  border-radius: 15px 15px 15px 15px;
  height: 48px;
  width: 48px;
  padding-right: 15px;
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
    StudyContentCover,
    HostContent1,
    HostContent2,
    HostContent3,
    Profile,
    TitleStudyInfoWrapper
}
