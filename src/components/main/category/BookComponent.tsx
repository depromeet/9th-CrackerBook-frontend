import styled from "styled-components";

export default function BookComponent(props: {
  rank: number;
  img: string;
  categoryType: string;
  isLike: boolean;
}): JSX.Element {
  const iconSrc = props.isLike
    ? "/assets/main/selectLikeIcon.svg"
    : "/assets/main/likeIcon.svg";
  return (
    <Wrapper>
      <ImgWrapper>
        <ImgShadow />
        <Img src={props.img} />
      </ImgWrapper>
      <LikeWrapper>
        <LikeIcon src={iconSrc} />
      </LikeWrapper>
      {props.categoryType === "likeDetail" && (
        <RankWrapper>
          <LikeRank src={`/assets/main/tag.svg`} />
          <Rank>{props.rank}</Rank>
        </RankWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
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
  width: 120px;
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
  width: 31px;
  height: 35px;
`;

const Rank = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  width: 27px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 31px;
  height: 35px;
  top: -4px;
  left: 6px;
`;

const LikeWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 5px;
  z-index: 2;
  width: 28px;
  height: 28px;
`;

const LikeIcon = styled.img`
  width: 28px;
  height: 28px;
`;
