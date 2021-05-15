import {
    LikeInfoWrapper,
    LikeStudyWrapper,
    RankBookImg,
    RankBookWrapper,
    StudyTypeWrapper
} from "../../../styles/main/BooksStyle";
import {LikeBookContainer, LikeBookNameContainer, LikeDateContainer, LikeTitleContainer} from "../index/MainIndexComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
export default function LikeBookComponent(): JSX.Element {
    return (
            <LikeStudyWrapper>
                <LikeTitleContainer />
                <RankBookWrapper>
                    <Swiper
                        spaceBetween= {1}
                        slidesPerView= {2.5}
                        initialSlide = {0}
                    >
                    <SwiperSlide>
                        <LikeInfoWrapper>
                            <RankBookImg src="/assets/main/exBook.jpg" />
                            <LikeBookContainer />
                            <LikeBookNameContainer />
                            <LikeDateContainer />
                        </LikeInfoWrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <LikeInfoWrapper>
                            <RankBookImg src="/assets/main/exBook.jpg" />
                            <LikeBookContainer />
                            <LikeBookNameContainer />
                            <LikeDateContainer />
                        </LikeInfoWrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <LikeInfoWrapper>
                            <RankBookImg src="/assets/main/exBook.jpg" />
                            <LikeBookContainer />
                            <LikeBookNameContainer />
                            <LikeDateContainer />
                        </LikeInfoWrapper>
                    </SwiperSlide>
                    </Swiper>
                </RankBookWrapper>
            </LikeStudyWrapper>
    )
}
