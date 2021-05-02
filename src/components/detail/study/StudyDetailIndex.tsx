import {Tab} from "./tab/Tab";
import {StudyInfoIndexComponent} from "./studyInfo/StudyInfoIndex";
import {BottomBarStyle} from "../../../styles/detail/common/commonStyle";
import {BottomBar} from "../common/CommonComponent";

export default function StudyDetailIndex(): JSX.Element {

    return (
        <>
            <StudyInfoIndexComponent/>
            <Tab/>
            <BottomBarStyle>
                <BottomBar text='스터디 신청하기'/>
            </BottomBarStyle>
        </>

    )
}
