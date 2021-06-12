import { MainContainer } from "../../../styles/main/BooksStyle";
import BookInfoComponent from "./BookInfoComponent";
import TitleComponent from "./TitleComponent";
import BookImgComponent from "./BookImgComponent";
import { Swiper, SwiperSlide } from "swiper/react";

type BookData = {
  bookName: string;
  img: string;
  study: Array<{
    studyName: string;
    host: string;
    memberCnt: number;
    startData: string;
    endData: string;
    profile: string;
  }>;
};

export default function OriginStudyComponent(props: {
  bookData: Array<BookData>;
}): JSX.Element {
  const data = props.bookData;
  return (
    <>
      {data.map((book, index) => {
        return (
          <MainContainer key={index}>
            <TitleComponent bookName={book.bookName} />
            <BookImgComponent img={book.img} />
            <Swiper spaceBetween={1} slidesPerView={1} initialSlide={0}>
              <SwiperSlide>
                {book.study.map((study, i) => {
                  return <BookInfoComponent bookInfo={study} key={i} />;
                })}
              </SwiperSlide>

              <SwiperSlide>
                {book.study.map((study, i) => {
                  return <BookInfoComponent bookInfo={study} key={i} />;
                })}
              </SwiperSlide>
            </Swiper>
          </MainContainer>
        );
      })}
    </>
  );
}
