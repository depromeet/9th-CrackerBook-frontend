import { ButtomWrapper, ButttomImg, Text } from "./FooterIndex";

export default function MyPageComponent(): JSX.Element {
  return (
    <ButtomWrapper>
      <ButttomImg src="/assets/main/myPage.svg" />
      <Text>마이페이지</Text>
    </ButtomWrapper>
  );
}
