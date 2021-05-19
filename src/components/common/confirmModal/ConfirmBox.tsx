import styled from "styled-components";

type ConfirmBoxType = {
    mainComment: string,
    subComment: string,
    buttonComponent: JSX.Element
}

export function ConfirmBox(props: {param: ConfirmBoxType}): JSX.Element {
    const confirmParam = props.param;
    return (
        <>
          <RelativeWrapper>
              <Wrapper>
                  <CommentWrapper>
                      <Comment1>
                          {confirmParam.mainComment}
                      </Comment1>
                      <Comment2>
                          {confirmParam.subComment}
                      </Comment2>
                  </CommentWrapper>
                  {confirmParam.buttonComponent}
              </Wrapper>
          </RelativeWrapper>

         </>
    )
}

const RelativeWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 33px;
  top: 173px;
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
  padding: 32px 50px 10px 50px; 
`;

const Comment2 = styled.div`
  color: #777777;
  line-height: 21px;
  padding: 0 70px 32px 70px;
`;


