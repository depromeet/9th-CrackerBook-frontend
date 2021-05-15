import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const Title = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 40px;
  color: #777777;
`;

export default function FilterResultComponent(): JSX.Element {
  return (
    <Wrapper>
      <Title>38건의 검색결과</Title>
    </Wrapper>
  );
}
