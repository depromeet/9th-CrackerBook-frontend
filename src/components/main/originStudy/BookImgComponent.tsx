import Link from "next/link";
import {BookBox, BookImg, HeartCnt, HeartIconBookBox, IconWrapper} from "../../../styles/main/BooksStyle";

export default function BookImgComponent(props: { img: string }): JSX.Element {
    return (
        <>
            <Link href="/detail/book">
                <BookBox>
                    <BookImg src={props.img} />
                    <IconWrapper>
                        <HeartIconBookBox src="/assets/main/bookLike.svg" />
                        <HeartCnt>14</HeartCnt>
                    </IconWrapper>
                </BookBox>
            </Link>
        </>
    );
}
