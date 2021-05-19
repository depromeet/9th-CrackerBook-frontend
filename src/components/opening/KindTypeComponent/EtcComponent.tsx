import styled from "styled-components";
import { useRecoilState } from "recoil";
import { typeState } from "../../states/studyForm";

const Wrapper = styled.div`
  position: absolute;
  top: 360px;
  left: 158px;
  z-index: 1;
`;
const InnerWrapper = styled.div`
  position: relative;
`;
const Text = styled.div`
  position: absolute;
  left: 83px;
  top: 47px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
const Path = styled.path`
  z-index: 10;
`;
const CheckIconBox = styled.div`
  position: absolute;
  left: 147px;
  top: 21px;
  cursor: pointer;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "writing", "portfolio", "etc"
export default function EtcComponent(): JSX.Element {
  const [type, setType] = useRecoilState(typeState);

  return (
    <>
      {type === "etc" ? (
        <Wrapper>
          <InnerWrapper>
            <svg width="232" height="168" viewBox="0 0 232 168">
              <g filter="url(#filter0_d)">
                <Path
                  cursor="pointer"
                  onClick={() => setType("")}
                  d="M88.9813 14.4964C46.5794 20.931 15.6054 55.9728 12.696 97.0322C11.9153 108.05 22.3562 115.637 33.2768 113.98L171.692 92.9751C182.613 91.3179 190.333 80.9748 186.318 70.6844C171.359 32.3367 131.383 8.06175 88.9813 14.4964Z"
                  fill="#F26624"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.783203"
                  y="0.263687"
                  width="239.9"
                  height="167.447"
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
            <Text onClick={() => setType("")}>기타</Text>
            <CheckIconBox onClick={() => setType("")}>
              <img src="/assets/opening/check32.svg" />
            </CheckIconBox>
          </InnerWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <svg width="192" height="117" viewBox="0 0 192 117">
            <Path
              cursor="pointer"
              onClick={() => setType("etc")}
              d="M88.9813 14.4964C46.5794 20.931 15.6054 55.9728 12.696 97.0322C11.9153 108.05 22.3562 115.637 33.2768 113.98L171.692 92.9751C182.613 91.3179 190.333 80.9748 186.318 70.6844C171.359 32.3367 131.383 8.06175 88.9813 14.4964Z"
              fill="#FFDFC1"
            />
          </svg>
          <Text onClick={() => setType("etc")}>기타</Text>
        </Wrapper>
      )}
    </>
  );
}
