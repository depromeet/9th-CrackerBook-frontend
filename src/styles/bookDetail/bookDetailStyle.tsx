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

const Title = styled.div`
  font-size: 32px;
  color: #222222;
  font-weight: bold;
  line-height: 40px;

`;

const BookDetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px
`;

const BookDetail = styled.div`
  font-size: 14px;
  color: #777777;
  padding-right: 10px;
  border-right-color: #DDDDDD;
`;

const DivLine = styled.div`
  height: 10px;
  background-color: #F1F1F3;  
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 60px;
`;

const TabButton = styled.div<{active: boolean}>`
  border-bottom: ${(props) => (props.active ? '1px solid #FFD262' : '1px solid #DDDDDD')};
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ThisBookContentWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export {
    ThisBookContentWrapper,
    TabWrapper,
    TabButton,
    DivLine,
    TitleInner,
    MainBookCover,
    BookImg,
    TitleInfoWrapper,
    Title,
    BookDetailWrapper,
    BookDetail
}
