import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fd9807;
  font-weight: bold;
`;

const Img = styled.img`
  width: 10%;
  height: 10%;
  padding-right: 10px;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Error404(): JSX.Element {
  return (
    <Container>
      <Img src="/assets/main/surprised.svg" alt="이미지 찾지 못했어요" />
      여기는 어디지?!! 404 ERROR ...
    </Container>
  );
}

export default Error404;
