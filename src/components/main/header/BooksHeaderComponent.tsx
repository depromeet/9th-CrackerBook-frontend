import {StudyTypeDiv, StudyTypeTitle, StudyTypeWrapper} from "../../../styles/main/BooksStyle";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';



export default function BooksHeaderComponent(): JSX.Element {
    const srcList = ['/assets/main/chats.svg', '/assets/main/microphone.svg', '/assets/main/note.svg', '/assets/main/desktop.svg', '/assets/main/etc.svg'];
    const title = ['토론', '발표', '글쓰기', '포트폴리오', '기타'];
    return (
        <StudyTypeWrapper>
            <Swiper
                spaceBetween= {1}
                slidesPerView= {4.5}
                initialSlide = {0}
            >
            {
                srcList.map((imgSrc, index) => {
                    return (
                        <SwiperSlide>
                            <StudyTypeDiv>
                                <ImgWrapper>
                                    <StudyTypeImg key={index} src={imgSrc} />
                                </ImgWrapper>
                                <StudyTypeTitle>{title[index]}</StudyTypeTitle>
                            </StudyTypeDiv>
                        </SwiperSlide>
                        );
                })
            }
            </Swiper>
        </StudyTypeWrapper>
    )
}

const ImgWrapper = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 3px 3px 14px 2px #f4f4f4;
  margin-bottom: 4px;

`;

const StudyTypeImg = styled.img`
  width: 32px;
  height: 32px;
  text-align: center;
`;

