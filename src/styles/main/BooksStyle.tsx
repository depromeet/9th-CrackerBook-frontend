import styled from "styled-components";

type InfoType = {
  isLike: boolean;
};

const StudyTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 10px;
`;

const StudyTypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;

const StudyTypeTitle = styled.div`
  width: 56px;
  text-align: center;
  font-size: 12px;
`;

const Hr = styled.hr`
  margin-bottom: 25px;
  width: 100%;
  color: #eeeeee;
  border: thin solid #eeeeee;
`;

const MainContainer = styled.div`
  padding: 40px 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

const TitleDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TotalView = styled.div`
  font-size: 14px;
  color: #999999;
  text-align: right;
  cursor: pointer;
`;

const BookBox = styled.div`
  background-color: #f9d1b4;
  border-radius: 10px;
  width: 335px;
  height: 226px;
  margin-top: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 0;
`;

const BookImg = styled.img`
  width: 100px;
  height: 144px;
`;

const SmallBookImg = styled.img`
  width: 51px;
  height: 74px;
  border-radius: 2px 8px 8px 2px;
`;

const IconWrapper = styled.div`
  position: relative;
  right: -91px;
  top: -78px;
`;

const IconWrapperContent = styled.div`
  padding-top: 7px;
  width: 6%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const HeartIconBookBox = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
`;

const HeartCnt = styled.div`
  color: #777777;
  font-size: 12px;
  font-family: "Nunito", sans-serif;
`;

const StudyInfoWrapper = styled.div`
  display: flex;
  padding-top: 20px;
`;

const NewBoxWrapper = styled.div`
  display: flex;
  padding: 32px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`;

const StudyProfile = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 17px;
`;

const NewBookProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const StudyImg = styled.img`
  border-radius: 100px;
  width: 56px;
  height: 56px;
  margin: auto;
`;

const StudyHost = styled.div`
  text-align: center;
  color: #999999;
  font-size: 12px;
  padding-top: 5px;
`;

const StudyContentWrapper = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
`;

const StudyContent = styled.div<InfoType>`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #777777;
  font-family: "Nunito", sans-serif;
  margin-bottom: ${(props) => (props.isLike ? "3px" : "5px")};
`;

const StudyIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 2px;
`;

const StudyDiv = styled.div`
  margin-right: 15px;
  padding-top: 2px;
  color: #677ac7;
`;

const LikeDiv = styled.div`
  margin-right: 3px;
  color: #677ac7;
`;

const StudyTitle = styled.div<InfoType>`
  font-size: 16px;
  margin-bottom: ${(props) => (props.isLike ? "6px" : "13px")};
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  color: #222222;
`;

const StudyDate = styled.div`
  font-size: 12px;
  color: #777777;
  font-family: "Nunito", sans-serif;
`;

const LikeStudyWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 25px;
`;

const LikeStudyTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`;

const RankBookWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 80px;
`;

const RankBookImg = styled.img`
  width: 120px;
  height: 173px;
  border-radius: 2px 8px 8px 2px;
`;

const LikeInfoWrapper = styled.div`
  position: relative;
  margin: 10px 15px 0 0;
`;

const LikeRank = styled.img`
  position: absolute;
  width: 24px;
  height: 27px;
  top: -4px;
  left: 2px;
`;

const StudyBackground = styled.div`
  background-color: #f1f1f3;
  min-height: 300px;
`;

const NewStudyWrapper = styled.div`
  padding: 80px 20px 160px 20px;
`;

const ThisBookWrapper = styled.div`
  padding: 80px 20px 80px 20px;
`;

const DropDown = styled.img``;

export {
  ThisBookWrapper,
  DropDown,
  NewBookProfile,
  NewBoxWrapper,
  StudyBackground,
  NewStudyWrapper,
  LikeDiv,
  LikeRank,
  LikeInfoWrapper,
  RankBookWrapper,
  RankBookImg,
  LikeStudyWrapper,
  LikeStudyTitleWrapper,
  StudyDiv,
  IconWrapperContent,
  StudyDate,
  StudyIcon,
  StudyContent,
  StudyContentWrapper,
  StudyHost,
  StudyImg,
  StudyInfoWrapper,
  StudyProfile,
  IconWrapper,
  HeartIconBookBox,
  HeartCnt,
  BookImg,
  SmallBookImg,
  MainContainer,
  StudyTypeWrapper,
  StudyTypeDiv,
  Hr,
  StudyTypeTitle,
  StudyTitle,
  TitleDiv,
  TotalView,
  TitleWrapper,
  BookBox,
};
