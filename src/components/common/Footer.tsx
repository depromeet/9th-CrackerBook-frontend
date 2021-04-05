import styled from "styled-components";

export default function Footer() {
  const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
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
