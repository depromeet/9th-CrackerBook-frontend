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

const StudyTitle = styled.div`
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

const HeartIconBookBox = styled.img`
  width: 20px;
  height: 20px;
`;

const HeartCnt = styled.div`
  color: #777777;
  font-size: 12px;
  font-family: "Nunito", sans-serif;
`;

export {
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
    TotalView,
    TitleWrapper,
    BookBox
};
