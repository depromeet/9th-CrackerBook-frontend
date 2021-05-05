import styled from "styled-components";

export function CompleteEnroll(): JSX.Element {

    return (
        <>
            <Wrapper>
                <IconCharacter src='/assets/detail/complete.svg'/>
                <CompleteWrapper>
                    <CommentBox>
                        <Icon src='/assets/detail/completeCheck.svg'/>
                        <Comment1>
                            스터디 신청 완료
                        </Comment1>
                        <Comment2>
                            스터디 시작일은 2021.05.22 토 12:00 입니다.
                            가입한 메일로 스터디 공지를 확인해보세요.
                        </Comment2>
                    </CommentBox>
                    <Confirm>
                        확인
                    </Confirm>
                </CompleteWrapper>
            </Wrapper>

        </>
    )
}

const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  position: absolute;
  left: 30px;
  top: 138px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  padding-bottom: 10px;
  margin: 0 auto;
`;

const IconCharacter = styled.img`
  margin: 0 auto;
  width: 268px;
  height: 150px;
`;

const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 311px;
  height: 277px;
  border-radius: 15px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px 15px 0 0;
`;

const Comment1 = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10px;
`;

const Comment2 = styled.div`
  font-size: 14px;
  color: #777777;
  padding-bottom: 12px;
  line-height: 20px;
`;

const Confirm = styled.button`
  width: 311px;
  height: 62px;
  background-color: #FFD262;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`;
