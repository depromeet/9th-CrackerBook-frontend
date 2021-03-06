import {
  GuideCommnet,
  NicnameInput,
  ExistCommnet,
  NicnameContainer,
  InputWrapper,
  ExistWrapper,
  ExistIcon,
  StartBtnWrapper,
  StartBtn,
} from "../../src/styles/login/setNicnameStyle";
import Link from "next/link";

export default function Index(): JSX.Element {
  return (
    <NicnameContainer>
      <GuideCommnet isFirstComment={true}>저는 닉네임</GuideCommnet>
      <InputWrapper>
        <NicnameInput placeholder="빈센조" />
        <GuideCommnet isFirstComment={false}>로</GuideCommnet>
      </InputWrapper>
      <GuideCommnet isFirstComment={false}>시작할래요</GuideCommnet>
      <ExistWrapper>
        <ExistIcon src="/assets/login/warning.svg" />
        <ExistCommnet>이미 존재하는 닉네임입니다.</ExistCommnet>
      </ExistWrapper>
      <StartBtnWrapper>
        <Link href="/main">
          <StartBtn src="/assets/login/startBtn.jpg" />
        </Link>
      </StartBtnWrapper>
    </NicnameContainer>
  );
}
