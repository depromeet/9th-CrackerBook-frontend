import styled from "styled-components";

const StudyIntroTitle = styled.div`
  color: #222222;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0;
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
  margin: auto 0;
  justify-content: left;
`;

const DateDiv = styled.div`
  padding-top: 10px;
`;

export {
    DateDiv,
    HostWrapper,
    StudyIntroWrapper,
    StudyIntroTitle,
    StudyContentWrapper,
    TotalView
}
