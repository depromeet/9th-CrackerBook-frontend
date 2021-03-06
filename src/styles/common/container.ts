import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff7e3;
  ${({ theme }) => theme.media.tablet`
    background-color: #fff7e3;
  `};
  ${({ theme }) => theme.media.mobile`
    background-color: #ffffff;
  `};
`;

const Desktop = styled.section`
  display: block;
  position: fixed;
  top: 60%;
  left: 16%;
  ${({ theme }) => theme.media.tablet`
    display: none;
  `};
  ${({ theme }) => theme.media.mobile`
    display: none;
  `};
`;

const Img = styled.img`
  position: fixed;
  top: 37%;
  left: 16%;
`;

const Mobile = styled.section`
  position: relative;
  width: 375px;
  max-width: 375px;
  zoom: 1.15;
  min-height: 812px;
  margin: 0 0 0 calc(50% - 1px);
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media.tablet`
    min-height: 100vh;
    margin: 0 auto;
    zoom: 1;
    overflow: hidden;
  `};
  ${({ theme }) => theme.media.mobile`
    min-height: 100vh;
    margin: 0 auto;
    zoom: 1;
    overflow: hidden;
  `};
`;

const MainContainer = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
  }
`;

export { AppContainer, Desktop, Mobile, MainContainer, Title, Img };
