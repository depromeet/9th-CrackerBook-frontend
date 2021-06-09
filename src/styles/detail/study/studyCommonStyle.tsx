import styled from "styled-components";
import { Box, TitleInfoStyle } from "../common/commonStyle";

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

const StudyContentCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  color: #999999;
  padding-top: 6px;
  font-size: 12px;
`;

const StudyInfoWrapper = styled.div`
  padding: 40px 12px 40px 20px;
`;

const InfoWrapper = styled.div`
  padding: 20px 20px;
  margin-bottom: 50px;
`;

const ReviewWrapper = styled.div`
  padding: 0 20px 40px 20px;
`;

const NoticeBox = styled(Box)`
  margin: 0 0 60px;
  padding: 20px 100px 20px 20px;
  justify-content: left;
`;

export {
  NoticeBox,
  InfoWrapper,
  StudyInfoWrapper,
  StudyContentCover,
  HostContent1,
  Profile,
  TitleStudyInfoWrapper,
  ReviewWrapper,
};
