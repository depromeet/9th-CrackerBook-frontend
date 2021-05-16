import {StudyTypeDiv, StudyTypeTitle, StudyTypeWrapper} from "../../../styles/main/BooksStyle";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import {useRecoilState} from "recoil";
import {CategoryTypeState} from "../../../state/main/mainState";



export default function BooksHeaderComponent(): JSX.Element {
    const [categoryState, setCategoryState] = useRecoilState<string>(CategoryTypeState);
    const srcList = ['/assets/main/chats.svg', '/assets/main/microphone.svg', '/assets/main/note.svg', '/assets/main/desktop.svg', '/assets/main/etc.svg'];
    const title = ['토론', '발표', '글쓰기', '포트폴리오', '기타'];
    const type = ['debate', 'announcement', 'writing', 'portfolio', 'etc', 'none'];
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
                            <StudyTypeDiv onClick={() => setCategoryState(type[index])}>
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
  box-shadow: 3px 3px 14px 2px #f3f3f3;
  margin-bottom: 4px;
  cursor: pointer;
`;

const StudyTypeImg = styled.img`
  width: 32px;
  height: 32px;
  text-align: center;
`;

