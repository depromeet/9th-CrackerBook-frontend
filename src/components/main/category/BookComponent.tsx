import styled from "styled-components";

export default function BookComponent(props: {
  rank: number;
  img: string;
}): JSX.Element {
  return (
    <Wrapper>
      <ImgWrapper>
        <ImgShadow />
        <Img src={props.img} />
      </ImgWrapper>
      <LikeRank src={`/assets/main/like${props.rank}.svg`} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding-left: 5px;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
`;

const Img = styled.img`
  height: 173px;
  width: 115px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 0;
  height: 173px;
  width: 13.33px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;

const LikeRank = styled.img`
  position: absolute;
  z-index: 2;
  width: 28px;
  height: 32px;
  top: -4px;
  left: 6px;
`;
