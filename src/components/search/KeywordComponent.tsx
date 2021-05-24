import styled from "styled-components";
import { useState } from "react";
import Router from "next/router";

const KeywordHeadWrapper = styled.div`
  position: relative;
  min-height: 35px;
  margin: 30px 20px 0;
`;
const TitSearch = styled.div`
  display: block;
  padding: 5px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const UtilSet = styled.div`
  position: absolute;
  padding: 5px 0;
  z-index: 10;
  top: 0px;
  right: 0px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #999999;
  cursor: pointer;
`;
const KeywordSubWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
const KeywordListWrapper = styled.ul`
  margin: 10px 10px 10px 20px;
`;

const LiLink = styled.li`
  position: relative;
  float: left;
  margin: 0 10px 10px 0;
  display: block;
  cursor: pointer;
`;

const BtnTag = styled.div`
  color: #777777;
  font-size: 14px;
  line-height: 32px;
  padding: 0 22px 0 10px;
  display: inline-block;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
`;
const LiIconBox = styled.div`
  position: absolute;
  top: 7px;
  right: 8px;
  cursor: pointer;
  z-index: 0;
`;

export default function KeywordComponent(): JSX.Element {
  const [keywordTitles, setKeywordTitles] = useState([
    "전체",
    "난배고프다",
    "도레미파솔라시",
    "조선왕조실록",
    "백엔드개발",
    "프론트엔드",
  ]);

  const removeKeywordList = (event, index) => {
    event.stopPropagation();
    setKeywordTitles(keywordTitles.filter((_, i) => i !== index));
  };

  const removeAllKeywordList = (event) => {
    event.stopPropagation();
    setKeywordTitles([]);
  };

  return (
    <>
      <KeywordHeadWrapper>
        <TitSearch>최근 검색어</TitSearch>
        <UtilSet onClick={(event) => removeAllKeywordList(event)}>
          전체삭제
        </UtilSet>
      </KeywordHeadWrapper>
      <KeywordSubWrapper>
        <KeywordListWrapper>
          {keywordTitles.map((v, index) => {
            return (
              <LiLink
                key={index}
                onClick={() =>
                  Router.push({
                    pathname: `/search/result/${v}`,
                  })
                }
              >
                <BtnTag>{v}</BtnTag>
                <LiIconBox onClick={(event) => removeKeywordList(event, index)}>
                  <img src="/assets/search/cross.svg" />
                </LiIconBox>
              </LiLink>
            );
          })}
        </KeywordListWrapper>
      </KeywordSubWrapper>
    </>
  );
}
