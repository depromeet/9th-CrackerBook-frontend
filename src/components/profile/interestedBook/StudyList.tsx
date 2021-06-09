import HorizontalStudy from "../../common/study/HorizontalStudy";

export default function StudyList(): JSX.Element {
  const studyInfo = {
    title: "사용자의 마음을 움직이는 UX 디자인의 힘",
    type: "토론",
    routingUrl: "detail/book/bookDetail",
    // progressPercent: 100,
  };

  return (
    <div style={{ padding: "1em" }}>
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
      <HorizontalStudy isLike={true} studyInfo={studyInfo} />
    </div>
  );
}
