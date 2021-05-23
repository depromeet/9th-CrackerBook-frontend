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
              d="M61.073 159.56H57.517V157.684H61.073V159.56ZM62.193 154.996H61.073V156.802H57.517V154.996H56.383V160.484H62.193V154.996ZM58.791 164.614H65.609V161.562H57.629V162.472H64.475V163.76H57.671V166.896H66.071V165.986H58.791V164.614ZM65.609 157.18V154.492H64.461V160.974H65.609V158.132H67.471V157.18H65.609ZM73.042 161.59H75.772V164.572H73.042V161.59ZM72.846 156.564H75.968V160.666H72.846V156.564ZM76.92 164.572V161.59H79.048V160.666H77.116V156.564H79.062V155.64H69.752V156.564H71.698V160.666H69.78V161.59H71.894V164.572H68.73V165.51H80.126V164.572H76.92Z"
              fill="#222222"
            />
          </g>
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
