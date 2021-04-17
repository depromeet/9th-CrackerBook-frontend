import styled from "styled-components";
import { useState } from "react";
import { MainContainer, Title } from "../styles/common/container";

const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;
const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;
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

export default function Component(): JSX.Element {
  const [text] = useState<string>("MAIN");
  return (
    <MainContainer>
      <Title>{text}</Title>

      <Description>
        <Code>pages/index.js</Code>
      </Description>

      <Grid>
        <Card>
          <h3>Card</h3>
          <p>Test Card Area</p>
        </Card>
      </Grid>
    </MainContainer>
  );
}
