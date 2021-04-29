import Link from "next/link";
import styled from "styled-components";


const StudyTitle = styled.div`

  position: absolute;

  height: 30px;
  left: 20px;
  top: 392px;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #222222;
`;

const StudyTabsArea = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  top: 422px;
  
  /* cracker white */
  background: #fff;
  display: flex;
`;

const TabButton = styled.div`
  width: 33%;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  border-bottom: 2px solid #FFD262;
  //border-bottom: 2px solid #FFD262;
  .textArea {
    color: #222222;
  }
`





export default function StudyArea():JSX.Element {
    return (
        <div>
            <StudyTitle>{"나의 스터디"}</StudyTitle>
            <StudyTabsArea>
                <TabButton>
                    진행(3)
                </TabButton>
                <TabButton>완료(3)</TabButton>
                <TabButton>찜한 스터디(2)</TabButton>

            </StudyTabsArea>

        </div>

    );
}
