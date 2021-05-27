import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const Ul = styled.ul`
  display: flex;
  height: 60px;
`;
const Li = styled.li`
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
const Bar = styled.div<{ index: number }>`
  position: absolute;
  top: 57px;
  height: 1px;
  width: ${100 / 3}%;
  left: ${(props) => `${(100 / 3) * props.index}%`};
  transition: all 0.3s;
  border-bottom: 2px solid #ffd262;
`;

const TabTitles = ["책", "저자", "스터디"];

export default function FilterKindComponent(props: {
  tabSelected: number;
  setTabSelected: (index: number) => void;
}): JSX.Element {
  return (
    <Wrapper>
      <Ul>
        {TabTitles.map((v, index) => {
          return (
            <Li
              key={index}
              className={props.tabSelected === index ? "on" : ""}
              onClick={() => props.setTabSelected(index)}
            >
              {v}
            </Li>
          );
        })}
      </Ul>
      <Bar index={props.tabSelected} />
    </Wrapper>
  );
}
