import HorizontalStudy from "../../../src/components/common/study/HorizontalStudy";
import React from "react";

export default function InterestedBook(): JSX.Element {
  return (
    <div>
      <HorizontalStudy
        routingUrl={"profile/hostStudyList/1"}
        progress={true}
        percent={30}
      />
    </div>
  );
}