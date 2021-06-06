import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const Ul = styled.ul`
  display: flex;
  height: 60px;
`;
const LI = styled.li`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 14px;
  line-height: 125.69%;
  color: #999999;
  border-bottom: 2px solid #f1f1f3;
  &.on {
    font-weight: 500;
    color: #222222;
  }
`;
const ActiveBar = styled.div<{ index: number; length: number }>`
  position: absolute;
  top: 57px;
  height: 1px;
  width: ${(props) => `${100 / props.length}%`};
  left: ${(props) => `${(100 / props.length) * props.index}%`};
  transition: all 0.3s;
  border-bottom: 2px solid #ffd262;
`;

export default function FilterKindComponent(props: {
  itemlistState: string[];
  itemState: number;
  setItemState: (index: number) => void;
}): JSX.Element {
  return (
    <Wrapper>
      <Ul>
        {props.itemlistState.map((v, index) => {
          return (
            <LI
              key={index}
              className={props.itemState === index ? "on" : ""}
              onClick={() => props.setItemState(index)}
            >
              {v}
            </LI>
          );
        })}
      </Ul>
      <ActiveBar index={props.itemState} length={props.itemlistState.length} />
    </Wrapper>
  );
}
