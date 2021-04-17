import styled from "styled-components";

const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const MainContainer = styled.div`
  flex-direction: column;
  padding: 0 3rem;
  text-align: center;
`;

const MobileTitle = styled.div`
    height: 40vh;
    margin-top: 15vh;
    font-size: 20px;
    color: #222222;
    font-family: 'Nunito', sans-serif;
`;

const NextDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  color: #222222;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
`

const KakaoLoginBtn = styled.button`
  background-color: #CECECE;
  height: 33px;
  width: 56%;
  border-radius: 16px;
  border: none;
`;

const GoMainBtn = styled.a`
    padding-top: 18px;
    text-decoration: none;
`

export {Card, MainContainer, MobileTitle, NextDiv, KakaoLoginBtn, GoMainBtn}
