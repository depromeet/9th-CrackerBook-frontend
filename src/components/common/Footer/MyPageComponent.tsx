import { ButtomWrapper, ButttomImg, Text } from "./FooterIndex";
import Link from "next/link";

export default function MyPageComponent(): JSX.Element {
  return (
    <ButtomWrapper>
      <Link href="/profile">
        <ButttomImg src="/assets/main/myPage.svg" />
      </Link>
      <Text>마이페이지</Text>
    </ButtomWrapper>
  );
}
