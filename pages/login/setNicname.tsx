import {
  GuidCommnet,
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

export default function SetNicName(): JSX.Element {
  return (
    <NicnameContainer>
      <GuidCommnet isFirstComment={true}>저는 닉네임</GuidCommnet>
      <InputWrapper>
        <NicnameInput placeholder="빈센조" />
        <GuidCommnet isFirstComment={false}>로</GuidCommnet>
      </InputWrapper>
      <GuidCommnet isFirstComment={false}>시작할래요</GuidCommnet>
      <ExistWrapper>
        <ExistIcon src="/assets/login/warning.svg" />
        <ExistCommnet>이미 존재하는 닉네임입니다.</ExistCommnet>
      </ExistWrapper>
      <StartBtnWrapper>
        <Link href="/main/books">
          <StartBtn src="/assets/login/startBtn.png" />
        </Link>
      </StartBtnWrapper>
    </NicnameContainer>
  );
}
