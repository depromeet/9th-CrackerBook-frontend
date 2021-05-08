import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 375px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd262;
  cursor: pointer;
`;
const TextDiv = styled.div`
  margin: 0 0 30px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  opacity: 0.3;
  cursor: pointer;
`;

export default function FooterComponent(): JSX.Element {
  return (
    <Footer>
      <TextDiv>다음 (1/4)</TextDiv>
    </Footer>
  );
}
