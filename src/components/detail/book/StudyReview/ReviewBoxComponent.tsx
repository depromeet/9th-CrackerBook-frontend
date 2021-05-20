import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewBoxComponent(): JSX.Element {

  return (
    <BoxWrappers>
      <Swiper
        spaceBetween= {110}
        slidesPerView={2}
        loop={true}
        initialSlide={0}
        onSlideChange={(event) => {
          console.log(`event.activeIndex : ${event}`);
        }}
      >
        <SwiperSlide>
          <BoxWrapper>
            <IconWrapper>
              <ReviewIcon src="/assets/detail/best.svg" />
              <div>
                최고에요1
              </div>
            </IconWrapper>
            <Review>
              글 쓰는 과정에 대해 정말 즐겁게 배울 수 있었습니다. 책과 함께 글쓰는 과정이 더해져서 구체적
              으로 적용하기 좋았던 것 같아요.
              함께 읽으니까 너무 좋았어요 ...
            </Review>
            <ReviewerWrapper>
              <Profile src="/assets/detail/best.svg" />
              <Wrapper>
                <Host>
                  겁내지 않고 글 쓰는 법
                </Host>
                <Date>
                  2021.04.26 ~ 05.21 토 14:00
                </Date>
              </Wrapper>
            </ReviewerWrapper>
          </BoxWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <BoxWrapper>
            <IconWrapper>
              <ReviewIcon src="/assets/detail/best.svg" />
              <div>
                최고에요2
              </div>
            </IconWrapper>
            <Review>
              글 쓰는 과정에 대해 정말 즐겁게 배울 수 있었습니다. 책과 함께 글쓰는 과정이 더해져서 구체적
              으로 적용하기 좋았던 것 같아요.
              읽으니까 너무 좋았어요 ...
            </Review>
            <ReviewerWrapper>
              <Profile src="/assets/detail/best.svg" />
              <Wrapper>
                <Host>
                  겁내지 않고 글 쓰는 법
                </Host>
                <Date>
                  2021.04.26 ~ 05.21 토 14:00
                </Date>
              </Wrapper>
            </ReviewerWrapper>
          </BoxWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <BoxWrapper>
            <IconWrapper>
              <ReviewIcon src="/assets/detail/best.svg" />
              <div>
                최고에요3
              </div>
            </IconWrapper>
            <Review>
              글 쓰는 과정에 대해 정말 즐겁게 배울 수 있었습니다. 책과 함께 글쓰는 과정이 더해져서 구체적
              으로 적용하기 좋았던 것 같아요.
              함께 읽으니까 너무 좋았어요 ...
            </Review>
            <ReviewerWrapper>
              <Profile src="/assets/detail/best.svg" />
              <Wrapper>
                <Host>
                  겁내지 않고 글 쓰는 법
                </Host>
                <Date>
                  2021.04.26 ~ 05.21 토 14:00
                </Date>
              </Wrapper>
            </ReviewerWrapper>
          </BoxWrapper>
        </SwiperSlide>
      </Swiper>
    </BoxWrappers>
  );
}
const BoxWrappers = styled.div`
  padding-bottom: 180px;
`;

const BoxWrapper = styled.div`
  margin: 0 85px;
  width: 225px;
  height: 334px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 9px 0 #d4d3d3;
`;

const IconWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 20px;
  text-align: center;
`;

const ReviewIcon = styled.img`
  width: 52px;
  height: 52px;
`;

const Review = styled.div`
  padding: 0 20px 20px 32px;
`;

const ReviewerWrapper = styled.div`
  padding: 14px 10px 14px 10px;
  display: flex;
  justify-content: left;
  border-top: 1px solid #efefef;
`;

const Profile = styled.img`
  border-radius: 50%;
  padding-right: 10px;
  width: 40px;
  height: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Host = styled.div`
  font-weight: 500;
  padding-bottom: 10px;
  padding-top: 2px;
  font-size: 13px;
  color: #222222;
`;

const Date = styled.div`
  font-size: 12px;
  color: #777777;
`;
