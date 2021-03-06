import ProfileArea from "../../src/components/profile/ProfileArea";
import StudyArea from "../../src/components/profile/StudyArea";
import styled from "styled-components";
import { useRouter } from "next/router";
import React from "react";

const HalfView = styled.div`
  height: 50%;
`;

export default function Index(props): JSX.Element {
  return (
    <>
      <HalfView>
        <ProfileArea />
      </HalfView>
      <HalfView>
        <StudyArea />
      </HalfView>
    </>
  );
}
