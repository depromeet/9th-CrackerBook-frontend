import styled from "styled-components";
import { useRecoilState } from "recoil";
import { studyFormState } from "../../states/studyForm";

const Wrapper = styled.div`
  position: absolute;
  top: 196px;
`;
const InnerWrapper = styled.div`
  position: relative;
`;
const Text = styled.div`
  position: absolute;
  left: 75px;
  top: 106px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
const CheckIconBox = styled.div`
  position: absolute;
  left: 152px;
  top: 20px;
  cursor: pointer;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "writing", "portfolio", "etc"
export default function DebateComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);

  return (
    <>
      {studyForm.type === "debate" ? (
        <Wrapper>
          <InnerWrapper>
            <svg width="240" height="284" viewBox="0 0 240 284">
              <g filter="url(#filter0_d)">
                <path
                  cursor="pointer"
                  onClick={() => setStudyForm({ ...studyForm, type: "" })}
                  d="M190.775 100.126C190.665 99.4921 190.554 98.8583 190.444 98.197C193.173 94.0086 195.075 89.1863 195.682 83.8681C197.749 65.461 184.545 48.8726 166.187 46.8059C165.553 46.7233 164.919 46.7784 164.313 46.7784C164.147 46.613 163.982 46.4202 163.817 46.2273C164.258 29.0326 151.66 14.0148 134.295 12.086C126.825 11.2593 119.74 13.0504 113.731 16.5775C108.577 7.81485 99.618 1.42196 88.7575 0.209517C74.534 -1.3887 61.4682 6.29929 55.3488 18.3962C51.9032 16.6602 48.1269 15.3651 44.0748 14.9242C25.7442 12.8851 9.20527 26.1393 7.16547 44.5464C6.88982 46.9437 6.91739 49.2859 7.13791 51.6006C-8.13302 53.1988 -20.7577 65.2406 -22.5494 81.1677C-23.5693 90.3161 -20.8129 99.0237 -15.5204 105.72C-22.1635 111.093 -26.7669 118.946 -27.7868 128.095C-29.5785 144.022 -19.9032 158.571 -5.37654 163.531C-6.09322 165.736 -6.64452 168.023 -6.8926 170.42C-8.95997 188.827 4.2436 205.416 22.5742 207.482C26.6538 207.951 30.5956 207.537 34.3444 206.6C37.6522 219.772 48.7057 230.16 62.9292 231.786C73.7897 233.026 83.9336 228.783 90.88 221.37C95.9519 226.165 102.485 229.499 109.955 230.326C127.293 232.282 142.895 220.461 146.258 203.597C146.478 203.459 146.671 203.294 146.864 203.156C147.471 203.294 148.049 203.459 148.683 203.542C167.014 205.608 183.553 192.354 185.593 173.947C186.199 168.629 185.372 163.531 183.663 158.847C183.911 158.241 184.159 157.634 184.408 157.028C194.717 152.289 202.435 142.561 203.786 130.409C205.164 118.257 199.789 107.042 190.775 100.126Z"
                  fill="#4AB0E1"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="-44"
                  y="0"
                  width="284"
                  height="284"
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
              토론
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
          <svg width="204" height="232" viewBox="0 0 204 232">
            <path
              cursor="pointer"
              onClick={() => setStudyForm({ ...studyForm, type: "debate" })}
              d="M190.775 100.126C190.665 99.4921 190.554 98.8583 190.444 98.197C193.173 94.0086 195.075 89.1863 195.682 83.8681C197.749 65.461 184.545 48.8726 166.187 46.8059C165.553 46.7233 164.919 46.7784 164.313 46.7784C164.147 46.613 163.982 46.4202 163.817 46.2273C164.258 29.0326 151.66 14.0148 134.295 12.086C126.825 11.2593 119.74 13.0504 113.731 16.5775C108.577 7.81485 99.618 1.42196 88.7575 0.209517C74.534 -1.3887 61.4682 6.29929 55.3488 18.3962C51.9032 16.6602 48.1269 15.3651 44.0748 14.9242C25.7442 12.8851 9.20527 26.1393 7.16547 44.5464C6.88982 46.9437 6.91739 49.2859 7.13791 51.6006C-8.13302 53.1988 -20.7577 65.2406 -22.5494 81.1677C-23.5693 90.3161 -20.8129 99.0237 -15.5204 105.72C-22.1635 111.093 -26.7669 118.946 -27.7868 128.095C-29.5785 144.022 -19.9032 158.571 -5.37654 163.531C-6.09322 165.736 -6.64452 168.023 -6.8926 170.42C-8.95997 188.827 4.2436 205.416 22.5742 207.482C26.6538 207.951 30.5956 207.537 34.3444 206.6C37.6522 219.772 48.7057 230.16 62.9292 231.786C73.7897 233.026 83.9336 228.783 90.88 221.37C95.9519 226.165 102.485 229.499 109.955 230.326C127.293 232.282 142.895 220.461 146.258 203.597C146.478 203.459 146.671 203.294 146.864 203.156C147.471 203.294 148.049 203.459 148.683 203.542C167.014 205.608 183.553 192.354 185.593 173.947C186.199 168.629 185.372 163.531 183.663 158.847C183.911 158.241 184.159 157.634 184.408 157.028C194.717 152.289 202.435 142.561 203.786 130.409C205.164 118.257 199.789 107.042 190.775 100.126Z"
              fill="#B1DFF5"
            />
          </svg>
          <Text onClick={() => setStudyForm({ ...studyForm, type: "debate" })}>
            토론
          </Text>
        </Wrapper>
      )}
    </>
  );
}
