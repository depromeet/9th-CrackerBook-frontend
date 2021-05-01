import styled from "styled-components";
import {Profile} from "../../../../../styles/detail/common/commonStyle";

export function Answer(): JSX.Element {

    return (
        <>
            <AnswerBox>
                <Wrapper>
                    <HostWrapper>
                        <Profile src='/assets/main/surprised.svg'/>
                        <Info>
                            <Name>
                                빈센조
                            </Name>
                            <Date>
                                2021.04.12
                            </Date>
                        </Info>
                    </HostWrapper>
                    <AnswerContent>
                        ‘눈치껏 못 배웁니다, 일센스’ 책을 한 챕터씩 읽어오는 것이 숙제입니다.
                        글 쓰는 것은 스터디 시간에 같이 하니 부담 없으셔도 됩니다. 관심 가져주셔서 감사합니다.
                    </AnswerContent>
                </Wrapper>
            </AnswerBox>
        </>
    )
}

const AnswerBox = styled.div`
  margin-top: 20px;
  background-color: #F1F1F3;
  border-radius: 15px;
  width: 281px;
  margin-left: auto;
`;

const Wrapper = styled.div`
  padding: 32px;
`;

const HostWrapper = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerContent = styled.div`
  padding-top: 10px;
  line-height: 20px;
`;

const Name = styled.div`
  font-weight: bold;
  padding-bottom: 13px;
`;

const Date = styled.div`
  color: #999999;
  padding-bottom: 15px;
`;
