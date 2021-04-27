import styled from "styled-components";

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
  cursor: pointer;
  display: block;
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
`;

export {
  KeywordHeadWrapper,
  TitSearch,
  UtilSet,
  KeywordSubWrapper,
  KeywordListWrapper,
  LiLink,
  BtnTag,
  LiIconBox,
};
