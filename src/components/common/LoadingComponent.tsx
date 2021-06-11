import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const GifBox = styled.img`
  padding: 123px 0 0 0;
  width: 122px;
`;
const TextBox = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

export default function LoadingComponent(): JSX.Element {
  return (
    <LoadingWrapper>
      <GifBox src="/assets/loading.gif" />
      <TextBox>Loading</TextBox>
    </LoadingWrapper>
  );
}
