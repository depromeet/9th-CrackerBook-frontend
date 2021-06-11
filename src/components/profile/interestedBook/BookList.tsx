import VerticalBook from "../../common/book/VerticalBook";

export default function BookList(): JSX.Element {
  return (
    <>
      <div style={{ display: "flex" }}>
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
      </div>
      <div style={{ display: "flex" }}>
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
      </div>
      <div style={{ display: "flex" }}>
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
      </div>
      <div style={{ display: "flex" }}>
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
        <VerticalBook index={0} title={"책 제목"} author={"저자 이름"} />
      </div>
    </>
  );
}
