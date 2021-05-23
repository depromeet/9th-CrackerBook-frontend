/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { showCompleteState } from "src/components/states";
import { useRouter } from "next/router";

const BlackBackground = styled.div`
  background-color: rgba(0, 0, 0, 80%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30px;
  top: 138px;
  z-index: 2;
`;
const Icon = styled.img`
  width: 60px;
  height: 60px;
  padding-bottom: 10px;
  margin: 0 auto;
`;

const IconCharacter = styled.img`
  margin: 0 auto;
  width: 268px;
  height: 150px;
`;

const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 311px;
  height: 277px;
  border-radius: 15px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px 15px 0 0;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10px;
`;

const Content = styled.div`
  font-size: 14px;
  color: #777777;
  padding-bottom: 12px;
  line-height: 20px;
  white-space: pre-line;
`;

const Confirm = styled.button`
  width: 311px;
  height: 62px;
  background-color: #ffd262;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`;

export default function CompleteComponent(props: {
  route: string;
  header: string;
  content: string;
}): JSX.Element {
  const router = useRouter();
  const setShowComplete = useSetRecoilState(showCompleteState);

  const closeCompleteComponent = () => {
    // @ts-ignore
    document.childNodes[1].setAttribute("style", "overflow:auto");
    setShowComplete(false);
    router.push(props.route);
  };

  // @ts-ignore
  document.childNodes[1].setAttribute("style", "overflow:hidden");
  return (
    <BlackBackground>
      <Wrapper>
        <IconCharacter src="/assets/opening/complete.svg" />
        <CompleteWrapper>
          <CommentBox>
            <Icon src="/assets/opening/completecheck.svg" />
            <Header>{props.header}</Header>
            <Content>{props.content}</Content>
          </CommentBox>
          <Confirm onClick={() => closeCompleteComponent()}>확인</Confirm>
        </CompleteWrapper>
      </Wrapper>
    </BlackBackground>
  );
}
