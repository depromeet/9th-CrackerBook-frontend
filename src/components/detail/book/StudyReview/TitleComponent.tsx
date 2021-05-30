import styled from "styled-components";

export default function TitleComponent(): JSX.Element {
  return (
    <Wrapper>
      <div>{`'눈치껏 못 배웁니다, 일센스'`}</div>
      <div>스터디 후기</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #222222;
  font-weight: bold;
  font-size: 24px;
  padding: 10px 0 32px 20px;
`;
