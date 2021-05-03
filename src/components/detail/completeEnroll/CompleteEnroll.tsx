import styled from "styled-components";

export function CompleteEnroll(): JSX.Element {

    return (
        <>
        </>
    )
}

const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
`;

const Icon = styled.img`
  display: flex;
  width: 168px;
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
  padding: 20px;
`;

const Check = styled.div`
  width: 60px;
  height: 60px;
  text-align: center;
  padding-bottom: 10px;
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
  padding-bottom: 32px;
`;

const Confirm = styled.div`
  width: 311px;
  height: 62px;
  background-color: #FFD262;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
`;
