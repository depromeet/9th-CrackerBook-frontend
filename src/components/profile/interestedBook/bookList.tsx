import BookWithShadow from "../../common/book/BookWithShadow";
import VerticalStudy from "../../common/study/verticalStudy";
import VerticalBook from "../../common/book/verticalBook";

export default function BookList(): JSX.Element {
    return (
        <div>
            <VerticalBook index={0} title={'책 제목'} author={'저자 이름'}/>
            <VerticalBook index={0} title={'책 제목'} author={'저자 이름'}/>
        </div>
    );
}