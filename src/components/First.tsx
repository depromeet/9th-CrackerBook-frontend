import { useState } from "react";
import { MainContainer, Title } from "../styles/container";

export default function Component() {
  const [text, setText] = useState<string>("SUB1");

  return (
    <MainContainer>
      <Title>{text}</Title>
    </MainContainer>
  );
}