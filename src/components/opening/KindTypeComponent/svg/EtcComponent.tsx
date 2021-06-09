import { useRecoilState } from "recoil";
import { studyFormState } from "src/components/states/studyForm";

export default function EtcComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);

  return (
    <>
      {studyForm.type === "etc" ? (
        <>
          <g
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "" })}
            filter="url(#filter0_d)"
          >
            <path
              cursor="pointer"
              onClick={() => setStudyForm({ ...studyForm, type: "" })}
              d="M246.981 413.496C204.579 419.931 173.605 454.973 170.696 496.032C169.915 507.05 180.356 514.637 191.277 512.98L329.692 491.975C340.613 490.318 348.333 479.975 344.318 469.684C329.359 431.337 289.383 407.062 246.981 413.496Z"
              fill="#F26624"
            />
          </g>
          <path
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "" })}
            d="M242.549 452.766V453.942H247.057C246.805 456.854 245.237 459.08 241.919 460.676L242.689 461.824C247.029 459.724 248.541 456.532 248.541 452.766H242.549ZM250.823 451.436V464.078H252.265V451.436H250.823ZM256.674 457.232H260.902V456.07H256.674V453.718H261.14V452.528H255.232V461.124H256.254C258.522 461.124 260.202 461.054 262.148 460.746L262.008 459.57C260.23 459.864 258.69 459.934 256.674 459.948V457.232ZM266.474 456.392H264.5V451.422H263.058V464.092H264.5V457.582H266.474V456.392Z"
            fill="#222222"
          />
          <rect
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "" })}
            x="305"
            y="421"
            width="32"
            height="32"
            rx="12"
            fill="#FFD262"
          />
          <path
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "" })}
            d="M314.846 435.523L319.914 440.692L327.153 433.308"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <>
            <path
              cursor="pointer"
              onClick={() => setStudyForm({ ...studyForm, type: "etc" })}
              d="M246.981 413.496C204.579 419.931 173.605 454.973 170.696 496.032C169.915 507.05 180.356 514.637 191.277 512.98L329.692 491.975C340.613 490.318 348.333 479.975 344.318 469.684C329.359 431.337 289.383 407.062 246.981 413.496Z"
              fill="#FFDFC1"
            />
            <path
              cursor="pointer"
              onClick={() => setStudyForm({ ...studyForm, type: "etc" })}
              d="M242.605 452.836V453.76H247.323C247.085 456.742 245.405 459.15 242.031 460.76L242.647 461.698C246.819 459.654 248.485 456.462 248.485 452.836H242.605ZM251.019 451.478V464.036H252.167V451.478H251.019ZM256.436 457.064H260.86V456.14H256.436V453.55H261.14V452.612H255.288V461.012H256.268C258.634 461.012 260.258 460.928 262.19 460.592L262.078 459.668C260.23 459.976 258.662 460.074 256.436 460.074V457.064ZM266.474 456.518H264.402V451.478H263.254V464.022H264.402V457.484H266.474V456.518Z"
              fill="#222222"
            />
          </>
        </>
      )}
    </>
  );
}
