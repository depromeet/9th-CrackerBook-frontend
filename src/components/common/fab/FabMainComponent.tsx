import styled from "styled-components";
import { isBrowser } from "react-device-detect";

export default function FabMainComponent(): JSX.Element {
  return (
    <FabDiv
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      isBrowser={isBrowser}
    >
      <UpIcon src="/assets/main/UpIcon.svg" />
    </FabDiv>
  );
}

const FabDiv = styled.div<{ isBrowser: boolean }>`
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  bottom: 116px;
  right: ${(props) => (props.isBrowser ? "" : "15px")};
  margin-left: ${(props) => (props.isBrowser ? "320px" : "")};
  width: 40px;
  height: 40px;
  box-shadow: 2px 2px 5px 1px #dcd4d4;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
`;

const UpIcon = styled.img`
  width: 15px;
  height: 15px;
`;
