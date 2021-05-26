import styled, { keyframes } from "styled-components";

export default function ShowToastComponent(props: {
  text: string;
}): JSX.Element {
  return (
    <ToastWrapper>
      <Text>{props.text}</Text>
    </ToastWrapper>
  );
}

const boxTranslate = keyframes`
  0% {
    transform: translateY(70px);
  }

  1% {
    transform: translateY(69px);
  }
  
  50% {
    transform: translateY(0);
  }
  
  100% {
    transform: translateY(90px);
  }
`;

const ToastWrapper = styled.div`
  transform: translateY(70px);
  position: absolute;
  bottom: 0;
  background-color: #000000d1;
  color: white;
  font-size: 12px;
  width: 375px;
  height: 90px;
  animation: ${boxTranslate} 2s 0.1s 1 linear forwards;
`;

const Text = styled.div`
  padding: 20px;
`;
