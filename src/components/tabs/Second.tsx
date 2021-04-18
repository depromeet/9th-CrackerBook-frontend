import { useState } from "react";
import { MainContainer, Title } from "../../styles/common/container";

export default function SecondComponent(): JSX.Element {
  const [text] = useState<string>("SUB2");

  return (
    <MainContainer>
      <Title>{text}</Title>
    </MainContainer>
  );
}
