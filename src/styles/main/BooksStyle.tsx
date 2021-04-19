import styled from "styled-components";

const StudyTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const StudyTypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StudyTypeTitle = styled.div`
  text-align: center;
  font-size: 12px
`;

const StudyTypeImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 20px;
  margin: 10px;
  background-color: #F4F4F4;
  text-align: center;
`;

const Hr = styled.hr`
  margin-bottom: 40px;
  width: 100%;
  color: #EEEEEE;
  border: thin solid #EEEEEE;
`;

const MainContainer = styled.div`
  padding: 0 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

const BookTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TotalView = styled.div`
  font-size: 14px;
  color: #999999;
  text-align: right;
`;

const BookBox = styled.div`
  background-color: #F1F1F3;
  border-radius: 10px;
  width: 335px;
  height: 226px;
  margin-top: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const BookImg = styled.img`
  width: 100px;
  height: 144px;
`;

const IconWrapper = styled.div`
  position: relative;
  right: -94px;
  top: -83px;
`;

const IconWrapperContent = styled.div`
  width: 6%;
  text-align: center;
`;

const HeartIconBookBox = styled.img`
  width: 20px;
  height: 20px;
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

const StudyProfile = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StudyImg = styled.img`
  border-radius: 100px;
  width: 56px;
  height: 56px;
`;

const StudyHost = styled.div`
  text-align: center;
  color: #999999;
  font-size: 12px;
  margin-right: 16px;
  padding-top: 5px;
`;

const StudyContentWrapper = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
`;

const StudyContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #777777;
  font-family: "Nunito", sans-serif;
  margin-bottom: 8px;
`;

const StudyIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 2px
`;

const StudyDiv = styled.div`
  margin-right: 15px;
`;

const StudyTitle = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
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



export {
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
    MainContainer,
    StudyTypeWrapper,
    StudyTypeDiv,
    StudyTypeImg,
    Hr,
    StudyTypeTitle,
    StudyTitle,
    BookTitle,
    TotalView,
    TitleWrapper,
    BookBox
};
