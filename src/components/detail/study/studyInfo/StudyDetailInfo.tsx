import {
    StudyInfoWrapper
} from "../../../../styles/detail/study/studyCommonStyle";
import styled from "styled-components";

export function StudyDetailInfo(): JSX.Element {
    return (
        <StudyInfoWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    스터디기간
                </InfoBold>
                <InfoContent>
                    2021.4.26 (월) 00:00 ~ 2021.5.21(토) 00:00
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    모집기간
                </InfoBold>
                <InfoContent>
                    2021.4.26 (월) 00:00 ~ 2021.5.21(토) 00:00
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    스터디장소
                </InfoBold>
                <InfoContent>
                    온라인
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    활동료
                </InfoBold>
                <InfoContent>
                    무료
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    유형
                </InfoBold>
                <InfoContent>
                    글쓰기
                </InfoContent>
            </InfoContentWrapper>
            <InfoContentWrapper>
                <InfoBold>
                    모집인원
                </InfoBold>
                <InfoContent>
                    10명
                </InfoContent>
                <InfoBold>
                    (9명 모집완료)
                </InfoBold>
            </InfoContentWrapper>
        </StudyInfoWrapper>
    )
}

const InfoContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-top: 10px;
`;

const InfoBold = styled.div`
  font-weight: 700;
  color: #222222;
  font-size: 14px;
  padding-right: 10px;
  min-width: 65px;
`;

const InfoContent = styled.div`
  font-size: 14px;
  color: #777777;
`;
