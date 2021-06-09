import styled from "styled-components";
import {
  Name,
  Profile,
  Date,
} from "../../../../../styles/detail/common/commonStyle";

export function ReviewContent(): JSX.Element {
  const reviewData = [
    {
      name: "주리주리",
      date: "좋아요.2021.04.13",
      review:
        "글 쓰는 과정에 대해 정말 즐겁게 배울 수 있었습니다. 책과 함께 글쓰는 과정이 더해져서 구체적으로 적용하기 좋았던 것 같아요.",
      profile: "/assets/main/juli.svg",
    },
    {
      name: "블라블라",
      date: "좋아요.2021.05.13",
      review: "띠용 띠용 띠용 띠용 띠용 띠용 띠용",
      profile: "/assets/main/iu.svg",
    },
    {
      name: "오리오리",
      date: "좋아요.2021.06.13",
      review: "오리오리. 오리오리. 오리오리. 오리오리. 오리오리",
      profile: "/assets/main/dog.svg",
    },
  ];
  return (
    <>
      {reviewData.map((review, index) => {
        return (
          <ContentWrapper key={index}>
            <Profile src={review.profile} loading="lazy" />
            <ReviewWrapper>
              <Name>{review.name}</Name>
              <Date>{review.date}</Date>
              <Review>{review.review}</Review>
            </ReviewWrapper>
          </ContentWrapper>
        );
      })}
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 34px;
  border-bottom: 1px solid #f1f1f3;
`;

const Review = styled.div`
  padding-bottom: 32px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
