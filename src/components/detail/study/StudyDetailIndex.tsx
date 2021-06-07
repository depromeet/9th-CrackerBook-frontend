import { Tab } from "./tab/Tab";
import { StudyInfoIndexComponent } from "./studyInfo/StudyInfoIndex";
import { BottomBar } from "../common/BottomBarComponent";
import { useRecoilState } from "recoil";
import {
  CompleteBoxState,
  EnrollConfirmBoxState,
} from "../../../state/detail/detailState";
import { EnrollStudy } from "../enrollStudy/EnrollStudy";
import { BlackBackground } from "../../../styles/detail/common/commonStyle";
import { CompleteEnroll } from "../../common/confirmModal/CompleteEnroll";
import { useState } from "react";

export default function StudyDetailIndex(): JSX.Element {
  const [enrollSate] = useRecoilState<boolean>(EnrollConfirmBoxState);
  const [completeBoxState] = useRecoilState<boolean>(CompleteBoxState);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StudyInfoIndexComponent />
      <Tab />

      <BottomBar
        text="스터디 신청하기"
        type="study"
        modalState={[openModal, setOpenModal]}
      />

      {enrollSate && (
        <BlackBackground>
          <EnrollStudy />
        </BlackBackground>
      )}
      {completeBoxState && (
        <BlackBackground>
          <CompleteEnroll />
        </BlackBackground>
      )}
    </>
  );
}
