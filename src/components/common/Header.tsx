import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
  }
`;
const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 30px;
`;

export default function Component() {
  return (
    <Header>
      <UL>
        <Link href="/">
          <a>Main</a>
        </Link>
        <Link href="/first">
          <a>Sub1</a>
        </Link>
        <Link href="/second">
          <a>Sub2</a>
        </Link>
        <Link href="/third">
          <a>Sub3</a>
        </Link>
      </UL>
    </Header>
  );
}
