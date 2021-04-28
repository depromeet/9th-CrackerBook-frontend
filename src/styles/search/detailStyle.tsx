import styled from "styled-components";

const SearchInit = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
`;
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
const TabSubWrapper = styled.div`
  position: relative;
`;
const NotFoundWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Svgbox = styled.div`
  position: relative;
  padding: 109px 0 0 0;
  font-weight: 500;
  font-size: 20px;
`;
const NotFoundMain = styled.div`
  position: relative;
  padding: 32px 0 0 0;
  font-weight: 500;
  font-size: 20px;
`;
const NotFoundSub = styled.div`
  position: relative;
  padding: 10px 0 109px 0;
  line-height: 20px;
  color: #222222;
  font-size: 14px;
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
const ListHeadWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const ListHeadTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  color: #222222;
`;
const ListHeadDetail = styled.div`
  position: absolute;
  z-index: 10;
  top: 8px;
  right: 17px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
const DetailLink = styled.div`
  position: absolute;
  z-index: 10;
  top: 7px;
  right: 0px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
const BookListWrapper = styled.div`
  position: relative;
  margin: 20px 20px;
`;
const BookTitle = styled.div`
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  width: 173px;
  color: #222222;
`;
const StudySubWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
const StudyListWrapper = styled.ul`
  margin: 20px 0 20px 40px;
`;
const StudyLiLink = styled.li`
  float: left;
  cursor: pointer;
  display: block;
  margin: 0 30px 30px 0;
`;
const StudyInfoWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 0 30px 0;
`;
const StudyProfile = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 17px;
`;
const StudyImgShadow = styled.div`
  position: absolute;
  top: 0px;
  height: 115px;
  width: 13.33px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
const StudyImg = styled.img`
  height: 115px;
  width: 80px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const StudyHost = styled.div`
  text-align: center;
  color: #999999;
  font-size: 12px;
  padding-top: 5px;
`;
const StudyContentWrapper = styled.div`
  flex-direction: column;
  margin: 0 20px;
`;
const StudyContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #677ac7;
`;
const StudyIcon = styled.img`
  width: 18px;
  height: 18px;
  filter: invert(79%) sepia(47%) saturate(7439%) hue-rotate(204deg)
    brightness(84%) contrast(83%);
`;
const StudyIconText = styled.div`
  margin: 0 10px 0 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`;
const StudyDiv = styled.div`
  margin: 0 0 4px 0;
  font-size: 14px;
  line-height: 20px;
  color: #777777;
`;
const StudySubDiv = styled.div`
  margin: 0 0 4px 10px;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;
const StudyTitle = styled.div`
  margin: 4px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 137.5%;
  margin-bottom: 10px;
  color: #222222;
`;
const StudyDate = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #777777;
`;
const BookLikeImgBorder = styled.img`
  position: absolute;
  z-index: 10;
  top: 0px;
  right: 0px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
const BookProfile = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 15px;
`;
const BookImgShadow = styled.div`
  position: absolute;
  top: 0px;
  height: 173px;
  width: 32px;
  border: 0;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
const BookImg = styled.img`
  height: 173px;
  width: 120px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const BookLikeImg = styled.img`
  position: absolute;
  z-index: 10;
  top: 9px;
  right: 5px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
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
export {
  SearchInit,
  CategorySubWrapper,
  CategoryListWrapper,
  LiLink,
  BtnTag,
  TabSubWrapper,
  NotFoundWrapper,
  Svgbox,
  NotFoundMain,
  NotFoundSub,
  Ul,
  UlDiv,
  FilterInnerWrapper,
  FilterTitle,
  ListHeadWrapper,
  ListHeadTitle,
  ListHeadDetail,
  DetailLink,
  BookListWrapper,
  BookTitle,
  StudySubWrapper,
  StudyListWrapper,
  StudyLiLink,
  StudyInfoWrapper,
  StudyProfile,
  StudyImg,
  StudyImgShadow,
  StudyHost,
  StudyContentWrapper,
  StudyContent,
  StudyDate,
  StudyIcon,
  StudyIconText,
  StudyDiv,
  StudySubDiv,
  StudyTitle,
  BookProfile,
  BookLikeImgBorder,
  BookImgShadow,
  BookLikeImg,
  BookImg,
  ListFooterWrapper,
  ListFooterIconBox,
};
