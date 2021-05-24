import React from "react";

export default function EditStudyInfo(): JSX.Element {
    const studyInfo = {
        title:'사용자의 마음을 움직이는 UX 디자인의 힘',
        type: '토론',
        routingUrl: 'profile/hostStudyList/admin/1',
        progressPercent: 15
    }
    return (
        <div>
            스터디 수정
        </div>
    );
}
