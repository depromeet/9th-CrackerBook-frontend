import styled from "styled-components";

const BookImgArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 15px;

  margin: 0.8em;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 0px;
  height: 100%;
  width: 32px;
  border: 0;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;

  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;

export default function BookWithShadow(prop): JSX.Element {
  return (
    <BookImgArea
      style={{
        width: prop.width,
        height: prop.height,
        minWidth: prop.width,
        minHeight: prop.height,
      }}
    >
      <ImgShadow />
      <Img src="/assets/main/exBook.jpg" />
    </BookImgArea>
  );
}
