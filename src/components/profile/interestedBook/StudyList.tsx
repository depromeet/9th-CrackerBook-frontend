import HorizontalStudy from "../../common/study/HorizontalStudy";

export default function StudyList(): JSX.Element {
    const studyInfo = {
        title:'사용자의 마음을 움직이는 UX 디자인의 힘',
        type: '토론',
        routingUrl: ''
    }

    return (
        <div>
            <HorizontalStudy
                studyInfo ={studyInfo}
            />
        </div>
    );
}