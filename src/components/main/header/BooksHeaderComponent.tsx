import {
  StudyTypeDiv,
  StudyTypeTitle,
  StudyTypeWrapper,
} from "../../../styles/main/BooksStyle";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  CategoryTypeState,
  HeaderTextState,
} from "../../../state/main/mainState";
import { useState } from "react";

export default function BooksHeaderComponent(): JSX.Element {
  const [categoryState, setCategoryState] =
    useRecoilState<string>(CategoryTypeState);
  const setHeaderState = useSetRecoilState<string>(HeaderTextState);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const title = ["전체", "토론", "발표", "글쓰기", "포트폴리오", "기타"];
  const type = [
    "all",
    "debate",
    "announcement",
    "writing",
    "portfolio",
    "etc",
    "main",
    "detail",
  ];
  const srcList = [
    "/assets/main/ALL.svg",
    "/assets/main/chats.svg",
    "/assets/main/microphone.svg",
    "/assets/main/note.svg",
    "/assets/main/desktop.svg",
    "/assets/main/etc.svg",
  ];

  return (
    <StudyTypeWrapper>
      <Swiper spaceBetween={1} slidesPerView={4.5} initialSlide={0}>
        {srcList.map((imgSrc, index) => {
          const isContinue = categoryState !== "likeDetail" && index === 0;
          return isContinue ? (
            ""
          ) : (
            <SwiperSlide key={index}>
              <StudyTypeDiv
                onClick={() => {
                  setCategoryState(type[index]);
                  setHeaderState("카테고리별 스터디");
                  setSelectedIndex(index);
                }}
                className={
                  categoryState === "main"
                    ? "nullActive"
                    : selectedIndex === index
                    ? "active"
                    : ""
                }
              >
                <ImgWrapper
                  className={
                    categoryState !== "main" && selectedIndex === index
                      ? "active"
                      : ""
                  }
                >
                  <StudyTypeImg key={index} src={imgSrc} />
                </ImgWrapper>
                <StudyTypeTitle>{title[index]}</StudyTypeTitle>
              </StudyTypeDiv>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StudyTypeWrapper>
  );
}
const ImgWrapper = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 3px 3px 14px 2px #f3f3f3;
  margin-bottom: 4px;
  cursor: pointer;

  &.active {
    border: 1px solid #ffd262;
  }
`;

const StudyTypeImg = styled.img`
  width: 32px;
  height: 32px;
  text-align: center;
`;
