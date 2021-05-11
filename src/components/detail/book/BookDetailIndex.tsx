import {DivLine} from "../../../styles/detail/common/commonStyle";
import {BookCover, BookInfo} from "./BookInfo";
import {TabContainer} from "./BookTab";
import {BottomBar} from "../common/CommonComponent";
import {useRecoilState} from "recoil";
import {ConfirmBoxState} from "../../../state/detail/detailState";
import {ConfirmStudy} from "../confirmStudy/ConfirmStudy";

export default function BookDetailIndexComponent(): JSX.Element {
    const [confirmBoxState] = useRecoilState<boolean>(ConfirmBoxState);
    return (

        <>
            <div>
                <BookCover/>
                <BookInfo/>
                <DivLine/>
                <TabContainer/>
            </div>
            {
                confirmBoxState && <ConfirmStudy/>
            }
            <BottomBar text='이 책으로 스터디 만들기' type='book'/>
        </>
    );
}
