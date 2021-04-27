import styled from "styled-components";

const StudyIntroTitle = styled.div`
  color: #222222;
  font-size: 24px;
  font-weight: bold;
  padding: 80px 20px 20px 20px;
`;

const StudyIntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 85px;
`;

const StudyContentWrapper =styled.div`
  display: flex;
  justify-content: left;
  color: #222222;
  font-size: 14px;
`;

const TotalView = styled.div`
  color: #999999;
  font-size: 14px;
  cursor: pointer;
`;

const HostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  justify-content: left;
`;

const DateDiv = styled.div`
  padding-top: 10px;
`;

const NoticeContent = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  width: 295px;
  padding-top: 16px;
  line-height: 18px;
  color: #222222;
`;

const BookBoxStyle = styled.div`
  border-radius: 10px 10px 10px 10px;
  background-color: #09A969;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 180px 20px;
  width: 335px;
  height: 226px;
`;

const BookImg = styled.img`
  width: 100px;
  height: 144px;
  border-radius: 2px 8px 8px 2px;
`;

export {
    BookImg,
    BookBoxStyle,
    NoticeContent,
    DateDiv,
    HostWrapper,
    StudyIntroWrapper,
    StudyIntroTitle,
    StudyContentWrapper,
    TotalView
}
