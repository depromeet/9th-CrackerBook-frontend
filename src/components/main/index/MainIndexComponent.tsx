import LikeBookComponent from "../likeStudy/LikeBookComponent";
import NewStudyComponent from "../newStudy/NewStudyComponent";
import OriginStudyComponent from "../originStudy/OriginStudyComponent";
import { useRecoilValue } from "recoil";
import { CategoryTypeState } from "../../../state/main/mainState";
import CategoryComponent from "../category/CategoryComponent";
import DetailIndexComponent from "../detail/DetailIndexComponent";
import BooksHeaderComponent from "../header/BooksHeaderComponent";
import FabMainComponent from "../../common/fab/FabMainComponent";

type BookData = {
  bookName: string;
  img: string;
  studyName: string;
  host: string;
  memberCnt: number;
  startData: string;
  endData: string;
};

export default function MainIndexComponent(props: {
  bookData: Array<BookData>;
}): JSX.Element {
  const data = props.bookData;
  const categoryState = useRecoilValue<string>(CategoryTypeState);
  return (
    <>
      {!data ? (
        <div>로딩중</div>
      ) : (
        <>
          {
            categoryState === "detail" ? "" : (
              <BooksHeaderComponent />
            )
          }
          {viewComponent(categoryState, data)}
        </>
      )}
    </>
  );
}

const viewComponent = (
  categoryState: string,
  data: Array<BookData>,
): JSX.Element => {
  let view: JSX.Element;
  switch (categoryState) {
    case "main":
      view = (
        <>
          <OriginStudyComponent bookData={data} />
          <LikeBookComponent />
          <NewStudyComponent />
          <FabMainComponent />
        </>
      );
      break;
    case "detail":
      view = (
        <>
          <DetailIndexComponent />
        </>
      );
      break;
    default:
      view = (
        <>
          <CategoryComponent type={categoryState} />
        </>
      );
  }
  return view;
};
