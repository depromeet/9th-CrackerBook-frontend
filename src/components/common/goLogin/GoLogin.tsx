import styled from "styled-components";

export function GoLogin(): JSX.Element {

    return (
        <>
            <Wrapper>
                <CommentWrapper>
                    <Comment1>
                        로그인한 회원만 <br/>
                        이용할 수 있어요.
                    </Comment1>
                    <Comment2>
                        스터디에 참여하시려면 <br/>
                        로그인 해주세요.
                    </Comment2>
                </CommentWrapper>
                <ButtonWrapper>
                    <CancelButton>취소</CancelButton>
                    <ConfirmButton>확인</ConfirmButton>
                </ButtonWrapper>
            </Wrapper>
         </>
    )
}

const Wrapper = styled.div`
  position: absolute;
  top: 290px;
  left: 32px;
  text-align: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const CommentWrapper = styled.div`
  width: 311px;
  height: 170px;
  border-radius: 15px 15px 0 0;
  background-color: white;
`;

const Comment1 = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  padding-top: 32px;
`;

const Comment2 = styled.div`
  color: #777777;
  line-height: 21px;
  padding-top: 10px;
  padding-bottom: 32px;
`;

const ButtonWrapper= styled.div`
  width: 311px;
  background-color: #FFD262;
  border-radius: 0 0 15px 15px;
  display: flex;
  justify-content: space-around;
  height: 62px;
`;

const CancelButton = styled.button`
  border-radius: 0 0 15px 15px;
  background-color: #FFD262;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const ConfirmButton = styled.button`
  border-radius: 0 0 15px 15px;
  background-color: #FFD262;
  border: none;
  cursor: pointer;
  width: 100%;
`;
