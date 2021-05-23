import styled from "styled-components";
import { useRecoilState } from "recoil";
import { studyFormState } from "../../states/studyForm";

const Wrapper = styled.div`
  position: absolute;
  left: 204px;
  top: 128px;
`;
const InnerWrapper = styled.div`
  position: relative;
`;
const Text = styled.div`
  position: absolute;
  left: 84px;
  top: 106px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
const CheckIconBox = styled.div`
  position: absolute;
  left: 125px;
  top: -7px;
  cursor: pointer;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "writing", "portfolio", "etc"
export default function PortfolioComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);

  return (
    <>
      {studyForm.type === "portfolio" ? (
        <Wrapper>
          <InnerWrapper>
            <svg width="187" height="245" viewBox="0 0 187 245">
              <g filter="url(#filter0_d)">
                <rect
                  cursor="pointer"
                  onClick={() => setStudyForm({ ...studyForm, type: "" })}
                  y="85"
                  width="170"
                  height="170"
                  rx="20"
                  transform="rotate(-30 0 85)"
                  fill="#FAB8A5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="284.224"
                  height="284.224"
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
            <Text onClick={() => setStudyForm({ ...studyForm, type: "" })}>
              포트폴리오
            </Text>
            <CheckIconBox
              onClick={() => setStudyForm({ ...studyForm, type: "" })}
            >
              <img src="/assets/opening/check32.svg" />
            </CheckIconBox>
          </InnerWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <svg width="171" height="233" viewBox="0 0 171 233">
            <rect
              cursor="pointer"
              onClick={() => setStudyForm({ ...studyForm, type: "portfolio" })}
              y="85"
              width="170"
              height="170"
              rx="20"
              transform="rotate(-30 0 85)"
              fill="#FFDBD0"
            />
          </svg>
          <Text
            onClick={() => setStudyForm({ ...studyForm, type: "portfolio" })}
          >
            포트폴리오
          </Text>
        </Wrapper>
      )}
    </>
  );
}
