import styled from "styled-components";

const ListFooterWrapper = styled.div`
  width: 335px;
  height: 48px;
  margin: 10px 20px 10px;
  position: relative;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: #777777;
  cursor: pointer;
`;
const ListFooterIconBox = styled.div`
  margin: 0 2px;
`;

export default function ListFooterComponent(props: {
  viewCount: number;
  setViewCount: (index: number) => void;
}): JSX.Element {
  return (
    <ListFooterWrapper onClick={() => props.setViewCount(props.viewCount + 4)}>
      더 보기
      <ListFooterIconBox>
        <img src="/assets/search/arrowdown.svg" />
      </ListFooterIconBox>
    </ListFooterWrapper>
  );
}
