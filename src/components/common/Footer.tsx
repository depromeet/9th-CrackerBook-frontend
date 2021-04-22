import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 375px;
  height: 60px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 1em;
  margin-left: 0.5rem;
`;

export default function FooterComponent(): JSX.Element {
  return (
    <Footer>
      <A
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <Img src="/vercel.svg" alt="Vercel Logo" />
      </A>
    </Footer>
  );
}
