import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  ${({ theme }) => theme.media.mobile`
    background-color: #999999;
  `};
`;

const Desktop = styled.section`
  display: block;
  position: fixed;
  top: 40%;
  left: 10%;
  ${({ theme }) => theme.media.mobile`
    display: none;
  `};
`;

const Mobile = styled.section`
  position: relative;
  width: 100%;
  min-height: 80vh;
  max-width: 420px;
  margin: 0 0 0 calc(50% - 1px);
  zoom: 1.25;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media.mobile`
    position: relative;
    max-width: 420px;
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

export { AppContainer, Desktop, Mobile, MainContainer, Title };
