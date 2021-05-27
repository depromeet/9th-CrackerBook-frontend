import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { studyKindState } from "src/components/states";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  resultStudyFilterState,
  resultStudyListState,
} from "src/components/states/search";
import { studyListState } from "src/components/states/study";

const CategoryWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 20px 0 20px;
`;

const LiLink = styled.li`
  float: left;
  margin: 0 10px 0 0;
  cursor: pointer;
  display: block;
`;

const BtnTag = styled.div`
  color: #677ac7;
  height: 28px;
  font-size: 12px;
  line-height: 17px;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #677ac7;
  &.on {
    background: #677ac7;
    color: #ffffff;
  }
`;

export default function FilterCategoryComponent(): JSX.Element {
  const Router = useRouter();
  const [studyKind] = useRecoilState(studyKindState);
  const [studyList] = useRecoilState(studyListState);
  const [resultStudyFilter, setResultStudyFilter] = useRecoilState(
    resultStudyFilterState,
  );
  const setResultStudyList = useSetRecoilState(resultStudyListState);

  const onResultStudyFilter = (event, value) => {
    event.stopPropagation();
    setResultStudyFilter([...resultStudyFilter, value]);
  };
  const offResultStudyFilter = (event, value) => {
    event.stopPropagation();
    const resultStudy = [...resultStudyFilter];
    resultStudy.splice(resultStudy.indexOf(value), 1);

    setResultStudyFilter(resultStudy);
  };

  useEffect(() => {
    console.log(resultStudyFilter);
    setResultStudyList(
      resultStudyFilter.length
        ? studyList.filter(
            (s) =>
              s.title.indexOf(`${Router.query.name}`) !== -1 &&
              resultStudyFilter.includes(s.category),
          )
        : studyList.filter(
            (s) => s.title.indexOf(`${Router.query.name}`) !== -1,
          ),
    );
  }, [resultStudyFilter]);

  return (
    <CategoryWrapper>
      {studyKind.map((v, index) => {
        return resultStudyFilter.indexOf(v.value) !== -1 ? (
          <LiLink key={index}>
            <BtnTag
              className="on"
              onClick={(event) => offResultStudyFilter(event, v.value)}
            >
              {v.label}
            </BtnTag>
          </LiLink>
        ) : (
          <LiLink key={index}>
            <BtnTag onClick={(event) => onResultStudyFilter(event, v.value)}>
              {v.label}
            </BtnTag>
          </LiLink>
        );
      })}
    </CategoryWrapper>
  );
}
