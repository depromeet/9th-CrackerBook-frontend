import { useRecoilState } from "recoil";
import { studyFormState } from "src/components/states/studyForm";

export default function AnnouncementComponent(): JSX.Element {
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);

  return (
    <>
      {studyForm.type === "announcement" ? (
        <>
          <g filter="url(#filter2_d)">
            <circle
              cursor="pointer"
              onClick={() => setStudyForm({ ...studyForm, type: "" })}
              cx="68"
              cy="160"
              r="55"
              fill="#9A6EC6"
            />
            <path
              cursor="pointer"
              onClick={() => setStudyForm({ ...studyForm, type: "" })}
              d="M60.807 159.35H57.713V157.74H60.807V159.35ZM62.235 154.968H60.807V156.634H57.713V154.968H56.271V160.498H62.235V154.968ZM58.987 164.712H65.707V161.478H57.545V162.598H64.279V163.648H57.573V166.966H66.127V165.832H58.987V164.712ZM65.707 157.026V154.436H64.265V160.918H65.707V158.216H67.485V157.026H65.707ZM73.168 161.716H75.66V164.432H73.168V161.716ZM72.958 156.69H75.87V160.554H72.958V156.69ZM77.088 164.432V161.716H79.118V160.554H77.298V156.69H79.16V155.528H69.654V156.69H71.516V160.554H69.696V161.716H71.726V164.432H68.716V165.622H80.182V164.432H77.088Z"
              fill="#222222"
            />
          </g>
          <rect
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "" })}
            x="91"
            y="105"
            width="32"
            height="32"
            rx="12"
            fill="#FFD262"
          />
          <path
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "" })}
            d="M100.846 119.523L105.914 124.692L113.153 117.308"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "" })}
            d="M149 69H294V231H149V69Z"
            fill="#C4C4C4"
            fillOpacity="0.01"
          />
        </>
      ) : (
        <>
          <circle
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "announcement" })}
            cx="68"
            cy="160"
            r="55"
            fill="#E8DFF1"
          />
          <path
            cursor="pointer"
            onClick={() => setStudyForm({ ...studyForm, type: "announcement" })}
            d="M61.073 159.56H57.517V157.684H61.073V159.56ZM62.193 154.996H61.073V156.802H57.517V154.996H56.383V160.484H62.193V154.996ZM58.791 164.614H65.609V161.562H57.629V162.472H64.475V163.76H57.671V166.896H66.071V165.986H58.791V164.614ZM65.609 157.18V154.492H64.461V160.974H65.609V158.132H67.471V157.18H65.609ZM73.042 161.59H75.772V164.572H73.042V161.59ZM72.846 156.564H75.968V160.666H72.846V156.564ZM76.92 164.572V161.59H79.048V160.666H77.116V156.564H79.062V155.64H69.752V156.564H71.698V160.666H69.78V161.59H71.894V164.572H68.73V165.51H80.126V164.572H76.92Z"
            fill="#222222"
          />
        </>
      )}
    </>
  );
}
