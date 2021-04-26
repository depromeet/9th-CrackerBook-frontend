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

const TabButton = styled.div<{ active: boolean }>`
  border-bottom: ${(props) =>
    props.active ? "1px solid #FFD262" : "1px solid #DDDDDD"};
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

export {
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
};
