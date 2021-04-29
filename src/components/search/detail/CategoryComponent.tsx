import styled from "styled-components";
import { useState } from "react";

const CategorySubWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
const CategoryListWrapper = styled.ul`
  margin: 10px 10px 10px 20px;
`;

const LiLink = styled.li`
  float: left;
  margin: 0 10px 10px 0;
  cursor: pointer;
  display: block;
`;

const BtnTag = styled.div`
  color: #677ac7;
  font-size: 14px;
  line-height: 32px;
  padding: 0 10px 0 10px;
  display: inline-block;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #677ac7;
  &.on {
    background: #677ac7;
    color: #ffffff;
  }
`;

const CategoryTitles = ["발표", "토론", "글쓰기", "포트폴리오", "배고프다"];

export default function CategoryComponent(): JSX.Element {
  const [selected, setSelected] = useState(0);

  return (
    <CategorySubWrapper>
      <CategoryListWrapper>
        {CategoryTitles.map((v, index) => {
          return (
            <LiLink key={index}>
              <BtnTag
                className={selected === index ? "on" : ""}
                onClick={() => setSelected(index)}
              >
                {v}
              </BtnTag>
            </LiLink>
          );
        })}
      </CategoryListWrapper>
    </CategorySubWrapper>
  );
}
