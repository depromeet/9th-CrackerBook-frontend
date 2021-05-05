import {Tab} from "./tab/Tab";
import {StudyInfoIndexComponent} from "./studyInfo/StudyInfoIndex";
import {BottomBar} from "../common/CommonComponent";

export default function StudyDetailIndex(): JSX.Element {

    return (
        <>
            <StudyInfoIndexComponent/>
            <Tab/>

            <BottomBar text='스터디 신청하기' type='study'/>
        </>

    )
}
