import styled from "styled-components";

interface ModalPosition {
  pageX: number;
  pageY: number;
}

const Title = styled.div`
  font-size: 32px;
  color: #222222;
  font-weight: bold;
  line-height: 40px;
`;

const TitleInner = styled.div`
  padding: 50px 87px 0 20px;
`;


const BookDetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

const BookDetail = styled.div`
  font-size: 14px;
  color: #777777;
  padding-right: 10px;
  border-right-color: #dddddd;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 60px;
  color: #222222;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
`;

// border-bottom: ${(props) =>
//   props.active ? "1px solid #FFD262" : "1px solid #DDDDDD"};

const TabButton = styled.div`
  border-bottom: 1px solid #DDDDDD;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &.active {
    border-bottom: 1px solid #FFD262; 
  }
`;

const BackButton = styled.img`
  position: absolute;
  left: 20px;
  top: 42px;
  cursor: pointer;
`;

const SearchButton = styled.img`
  position: absolute;
  right: 20px;
  top: 42px;
  cursor: pointer;
`;

const ModalWrapper = styled.div<ModalPosition>`
  background-color: white;
  text-align: center;
  color: #999999;
  width: 68px;
  height: 100px;
  top: ${(props) => props.pageY + "px"};
  right: 20px;
  position: absolute;
`;

const ModalElement = styled.div`
  cursor: pointer;
  height: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainBookStyle = styled.div`
  background-color: #09a969;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleInfoStyle = styled.div`
  border-radius: 25px 25px 0 0;
  position: relative;
  background-color: white;
`;

const DivLine = styled.div`
  height: 10px;
  background-color: #f1f1f3;
`;

const  Box = styled.div`
  border-radius: 10px 10px 10px 10px;
  box-shadow: 1px 3px 9px 7px #f4f4f4;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Profile = styled.img`
  width: 44px;
  height: 44px;
  padding-right: 12px;
`;

const Name = styled.div`
  padding-bottom: 4px;
  font-weight: bold;
`;

const Date = styled.div`
  color: #999999;
  padding-bottom: 12px;
`;

export {
  Name,
  Date,
  Profile,
  Wrapper,
  Box,
  DivLine,
  TitleInfoStyle,
  MainBookStyle,
  ModalWrapper,
  ModalElement,
  BackButton,
  SearchButton,
  TabWrapper,
  TabButton,
  BookDetailWrapper,
  BookDetail,
  Title,
  TitleInner
};
