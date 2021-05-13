import styled from "styled-components";
import { useState } from "react";

const CategoryWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
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

const CategoryTitles = ["발표", "토론", "글쓰기", "포트폴리오", "배고프다"];

export default function CategoryComponent(): JSX.Element {
  const [selected, setSelected] = useState(0);

  return (
    <CategoryWrapper>
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
    </CategoryWrapper>
  );
}
