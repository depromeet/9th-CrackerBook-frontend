import { useState } from "react";
import { MainContainer, Title } from "../../styles/common/container";
import { GoHomeBtn } from "../../styles/tabs/firstStyle";
import Link from "next/link";

export default function FirstComponent(): JSX.Element {
  const [text] = useState<string>("SUB1");

  return (
    <MainContainer>
      <GoHomeBtn>
        <Link href="/">GO Main</Link>
      </GoHomeBtn>
      <Title>{text}</Title>
    </MainContainer>
  );
}
