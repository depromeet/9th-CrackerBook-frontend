import styled from "styled-components";

export default function MoreButtonComponent(props: { backgroundColor: string },
): JSX.Element {
  return (
    <MoreBtn background={props.backgroundColor}>
      더 보기 <DownImg src="/assets/main/caretDown.svg" />
    </MoreBtn>
  );
}

const MoreBtn = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  border: 1px solid #dddddd;
  border-radius: 50px;
  padding: 14px 125px;
  margin-top: 20px;
  cursor: pointer;
  color: #777777;
`;

const DownImg = styled.img`
  padding-left: 5px;
`;
