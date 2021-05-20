import ProfileArea from "../../src/components/profile/ProfileArea";
import StudyArea from "../../src/components/profile/StudyArea";
import styled from "styled-components";

const HalfView = styled.div`
  height: 50vh;
`;

export default function Index(): JSX.Element {
  return (
    <div>
      <HalfView>
        <ProfileArea />
      </HalfView>
      <HalfView>
        <StudyArea />
      </HalfView>
    </div>
  );
}
