import { useState } from "react";
import { MainContainer, Title } from "../../styles/common/container";

export default function ThirdComponent(): JSX.Element {
  const [text] = useState<string>("SUB3");

  return (
    <MainContainer>
      <Title>{text}</Title>
    </MainContainer>
  );
}
