import styled from "styled-components";
import { useRecoilState } from "recoil";
import { typeState } from "../states";

const Wrapper = styled.div`
  position: absolute;
  left: 149px;
  top: 29px;
  z-index: 0;
`;
const InnerWrapper = styled.div`
  position: relative;
`;
const Text = styled.div`
  position: absolute;
  left: 36px;
  top: 71px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
const CheckIconBox = styled.div`
  position: absolute;
  left: 75px;
  top: 20px;
  cursor: pointer;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "write", "portfolio", "etc"
export default function WriteComponent(): JSX.Element {
  const [type, setType] = useRecoilState(typeState);

  return (
    <>
      {type === "write" ? (
        <Wrapper>
          <InnerWrapper>
            <svg width="180" height="180" viewBox="0 0 180 180">
              <g filter="url(#filter0_d)">
                <path
                  cursor="pointer"
                  onClick={() => setType("")}
                  d="M0.262791 20.6411C0.262792 5.24505 16.9295 -4.3775 30.2628 3.32051L135.263 63.9423C148.596 71.6403 148.596 90.8853 135.263 98.5833L30.2628 159.205C16.9295 166.903 0.26279 157.281 0.262793 141.885L0.262791 20.6411Z"
                  fill="#8EDABC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="264.193"
                  height="258.225"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="10" dy="10" />
                  <feGaussianBlur stdDeviation="13" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <Text onClick={() => setType("")}>글쓰기</Text>
            <CheckIconBox onClick={() => setType("")}>
              <img src="/assets/opening/check32.svg" />
            </CheckIconBox>
          </InnerWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <svg width="146" height="162" viewBox="0 0 146 162">
            <path
              cursor="pointer"
              onClick={() => setType("write")}
              d="M0.262791 20.6411C0.262792 5.24505 16.9295 -4.3775 30.2628 3.32051L135.263 63.9423C148.596 71.6403 148.596 90.8853 135.263 98.5833L30.2628 159.205C16.9295 166.903 0.26279 157.281 0.262793 141.885L0.262791 20.6411Z"
              fill="#D2F3E6"
            />
          </svg>
          <Text onClick={() => setType("write")}>글쓰기</Text>
        </Wrapper>
      )}
    </>
  );
}
