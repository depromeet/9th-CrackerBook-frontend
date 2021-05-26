import { BottomBarStyle } from "../../../styles/detail/common/commonStyle";
import styled, { keyframes } from "styled-components";
import { SetterOrUpdater, useRecoilState } from "recoil";
import {
  ConfirmBoxState,
  EnrollConfirmBoxState,
  ShowToastState,
} from "../../../state/detail/detailState";
import { useRouter } from "next/router";
import ShowToastComponent from "../../common/showToast/ShowToastComponent";

const copyLink = async (props: {
  link: string;
  setState: SetterOrUpdater<boolean>;
}) => {
  const link = "localhost:3000" + props.link;
  await navigator.clipboard.writeText(link);
  props.setState(true);
  setTimeout(() => {
    props.setState(false);
  }, 2500);
};

export function BottomBar(props: { text: string; type: string }): JSX.Element {
  const [openShowToast, setOpenShowToast] =
    useRecoilState<boolean>(ShowToastState);
  const router = useRouter();
  const [confirmBox, setConfirmBox] = useRecoilState<boolean>(ConfirmBoxState);
  const [enrollSate, setEnrollSate] = useRecoilState<boolean>(
    EnrollConfirmBoxState,
  );

  const conFirmBoxEvent = () => {
    props.type === "book"
      ? setConfirmBox(!confirmBox)
      : setEnrollSate(!enrollSate);
  };
  return (
    <BottomBarStyle>
      <BottomBarWrapper>
        <WannaBeBubble>이 책으로 스터디 하고 싶어요.</WannaBeBubble>
        <BubblePointBackground />
        <BubblePoint />
        <BookLikeIcon src="/assets/main/bookLike.svg" />
        <ShareIcon
          src="/assets/detail/share.svg"
          onClick={() =>
            copyLink({ link: router.route, setState: setOpenShowToast })
          }
        />
        <GoCreate onClick={conFirmBoxEvent} type={props.type}>
          {props.text}
        </GoCreate>
        {openShowToast && (
          <ShowToastComponent text={"URL주소가 클립보드에 복사되었습니다."} />
        )}
      </BottomBarWrapper>
    </BottomBarStyle>
  );
}

const BottomBarWrapper = styled.div`
  position: relative;
  background-color: #ffd262;
  display: flex;
  align-items: center;
  height: 90px;
`;

const BookLikeIcon = styled.img`
  padding-left: 20px;
  cursor: pointer;
`;

const ShareIcon = styled.img`
  border-right: 1px solid #f4f4f4;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

const GoCreate = styled.div<{ type: string }>`
  color: #222222;
  padding-left: ${(props) => (props.type === "book" ? "48px" : "75px")};
  padding-right: ${(props) => (props.type === "book" ? "47px" : "74px")};
  cursor: pointer;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const WannaBeBubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd262;
  position: absolute;
  border: 1px solid black;
  width: 167px;
  height: 30px;
  top: -40px;
  left: 13px;
  font-size: 12px;
  border-radius: 10px;
  animation: ${boxFade} 1s 1s 1 linear forwards;
`;

const BubblePoint = styled.div`
  position: absolute;
  top: -9px;
  left: 27px;
  border-top: 7px solid #ffd262;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  animation: ${boxFade} 1s 1s 1 linear forwards;
`;

const BubblePointBackground = styled.div`
  position: absolute;
  top: -9px;
  left: 26px;
  border-top: 8px solid black;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  animation: ${boxFade} 1s 1s 1 linear forwards;
`;
