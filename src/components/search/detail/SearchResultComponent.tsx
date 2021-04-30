import styled from "styled-components";

const TabWrapper = styled.div`
  position: relative;
`;
const Ul = styled.ul`
  display: flex;
  height: 80px;
`;
const UlDiv = styled.div`
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
    border-bottom: 2px solid #ffd262;
  }
`;
const FilterInnerWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const FilterTitle = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 40px;
  color: #777777;
`;

const TabTitles = ["전체", "책", "스터디"];

export default function SearchResultComponent(props: {
  tabSelected: number;
  setTabSelected: (index: number) => void;
}): JSX.Element {
  return (
    <>
      <TabWrapper>
        <Ul>
          {TabTitles.map((v, index) => {
            return (
              <UlDiv
                key={index}
                className={props.tabSelected === index ? "on" : ""}
                onClick={() => props.setTabSelected(index)}
              >
                {v}
                <br />
                (38)
              </UlDiv>
            );
          })}
        </Ul>
      </TabWrapper>
      <FilterInnerWrapper>
        <FilterTitle>38건의 검색결과</FilterTitle>
      </FilterInnerWrapper>
    </>
  );
}
