import styled from "styled-components";
import { useRecoilState } from "recoil";
import { studyFormState } from "../../states/studyForm";

const Wrapper = styled.div`
  position: absolute;
  top: 65px;
  left: 13px;
`;
const InnerWrapper = styled.div`
  position: relative;
`;
const Text = styled.div`
  position: absolute;
  left: 42px;
  top: 45px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
const CheckIconBox = styled.div`
  position: absolute;
  left: 78px;
  top: 0px;
  cursor: pointer;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "writing", "portfolio", "etc"
export default function AnnouncementComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);

  return (
    <>
      {studyForm.type === "announcement" ? (
        <Wrapper>
          <InnerWrapper>
            <svg width="159" height="162" viewBox="0 0 159 162">
              <g filter="url(#filter0_d)">
                <circle
                  cursor="pointer"
                  onClick={() => setStudyForm({ ...studyForm, type: "" })}
                  cx="55"
                  cy="55"
                  r="55"
                  fill="#9A6EC6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="-3"
                  y="0"
                  width="162"
                  height="162"
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
              발표
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
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle
              cursor="pointer"
              onClick={() =>
                setStudyForm({ ...studyForm, type: "announcement" })
              }
              cx="55"
              cy="55"
              r="55"
              fill="#E8DFF1"
            />
          </svg>
          <Text
            onClick={() => setStudyForm({ ...studyForm, type: "announcement" })}
          >
            발표
          </Text>
        </Wrapper>
      )}
    </>
  );
}
