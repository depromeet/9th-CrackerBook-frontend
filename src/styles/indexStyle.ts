import styled from "styled-components";

const MainContainer = styled.div`
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  height: 100vh;
  background-color: #ffd262;
`;

const MobileTitle = styled.div`
  height: 40vh;
  padding-top: 15vh;
  font-size: 20px;
  color: #000000;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
`;

const NextDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  color: #222222;
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
`;

const KakaoLoginBtn = styled.button`
  background-color: white;
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  height: 33px;
  width: 56%;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  outline: none;

  &:active {
    background-color: #ffd262;
    box-shadow: 0 1px #666;
    transform: translateY(3px);
  }
`;

const GoMainBtn = styled.a`
  padding-top: 18px;
  text-decoration: none;
  cursor: pointer;
`;

export { MainContainer, MobileTitle, NextDiv, KakaoLoginBtn, GoMainBtn };
