import styled from "styled-components";

const MainBookCover = styled.div`
  background-color: #09A969;
  width: 375px;
  height: 403px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const BookImg = styled.img`
  width: 138px;
  height: 200px;
  border-radius: 2px 8px 8px 2px;
`;

const TitleInfoWrapper = styled.div`
  border-radius: 25px 25px 0 0;
  position: relative;
  top: -22px;
  background-color: white;
  height: 190px;
`;

const TitleInner = styled.div`
  padding: 50px 87px 0 20px;
`;

const DivLine = styled.div`
  height: 10px;
  background-color: #F1F1F3;  
`;

const ThisBookContentWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export {
    ThisBookContentWrapper,
    DivLine,
    TitleInner,
    MainBookCover,
    BookImg,
    TitleInfoWrapper
}
