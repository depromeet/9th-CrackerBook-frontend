/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { CompleteBoxState } from "../../../state/detail/detailState";
import Link from "next/link";

export function CompleteEnroll(): JSX.Element {
  const [completeBoxState, setCompleteBoxState] =
    useRecoilState<boolean>(CompleteBoxState);
  // @ts-ignore
  document.body.style.overflow = "hidden";
  return (
    <>
      <RelativeWrapper>
        <Wrapper>
          <ImgWrapper>
            <IconCharacter src="/assets/detail/complete.svg" />
            <GifComplete src="/assets/complete.gif" />
          </ImgWrapper>
          <CompleteWrapper>
            <CommentBox>
              <Icon src="/assets/detail/completeCheck.svg" />
              <Comment1>스터디 신청 완료</Comment1>
              <Comment2>
                스터디 시작일은 2021.05.22 토 12:00 입니다. 가입한 메일로 스터디
                공지를 확인해보세요.
              </Comment2>
            </CommentBox>
            <Link href="/main">
              <Confirm
                onClick={() => {
                  // @ts-ignore
                  document.body.style.overflow = "auto";
                  setCompleteBoxState(!completeBoxState);
                }}
              >
                확인
              </Confirm>
            </Link>
          </CompleteWrapper>
        </Wrapper>
      </RelativeWrapper>
    </>
  );
}

const RelativeWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 37%;
  margin-left: 30px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  padding-bottom: 10px;
  margin: 0 auto;
`;

const IconCharacter = styled.img`
  position: absolute;
  bottom: 0;
  left: 65px;
  width: 150px;
  height: 95px;
`;

const GifComplete = styled.img`
  position: absolute;
  width: 268px;
  height: 150px;
`;

const ImgWrapper = styled.div`
  position: relative;
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

const Comment1 = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10px;
`;

const Comment2 = styled.div`
  font-size: 14px;
  color: #777777;
  padding-bottom: 12px;
  line-height: 20px;
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
