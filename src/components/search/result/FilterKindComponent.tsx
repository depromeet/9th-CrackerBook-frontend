import { useRecoilState } from "recoil";
import {
  resultAuthorListState,
  resultStudyListState,
  resultTitleListState,
} from "src/components/states/search";
import FilterCategoryComponent from "src/components/search/result/FilterCategoryComponent";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const Ul = styled.ul`
  display: flex;
  height: 80px;
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
  top: 77px;
  height: 1px;
  width: ${100 / 3}%;
  left: ${(props) => `${(100 / 3) * props.index}%`};
  transition: all 0.3s;
  border-bottom: 2px solid #ffd262;
`;
const Title = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 40px;
  color: #777777;
  margin: 20px;
`;

const TabTitles = ["책", "저자", "스터디"];

export default function FilterKindComponent(props: {
  tabSelected: number;
  setTabSelected: (index: number) => void;
}): JSX.Element {
  const [resultTitleList] = useRecoilState(resultTitleListState);
  const [resultStudyList] = useRecoilState(resultStudyListState);
  const [resultAuthorList] = useRecoilState(resultAuthorListState);
  const countArray = [
    resultTitleList.length,
    resultAuthorList.length,
    resultStudyList.length,
  ];

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
              <br />({countArray[index]})
            </Li>
          );
        })}
      </Ul>
      <Bar index={props.tabSelected} />
      {props.tabSelected === 2 && <FilterCategoryComponent />}
      <Title>{countArray[props.tabSelected]}건의 검색결과</Title>
    </Wrapper>
  );
}
