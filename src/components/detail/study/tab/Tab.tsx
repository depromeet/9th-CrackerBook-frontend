import {useState} from "react";
import {TabButton, TabWrapper} from "../../../../styles/detail/common/commonStyle";
import {Review} from "./review/Review";
import {QnA} from "./qna/QnA";
import {DetailInfoComponent} from "./detailInfo/DetailInfo";

export const Tab = (): JSX.Element => {

    const tabList = ['상세정보', '후기(23)', '문의'];
    const [selected, setSelected] = useState(0);
    return (
        <>
            <TabWrapper>
                {tabList.map((tab, index) => {
                    return (
                        <>
                            <TabButton
                                key={index} className={selected === index ? 'active' : ''}
                                onClick={() => setSelected(index)}
                            >{tab}</TabButton>
                        </>
                    );
                })}
            </TabWrapper>
            {
                (selected === 0) && <DetailInfoComponent/>
            }
            {
                (selected === 1) && <Review/>
            }
            {
                (selected === 2) && <QnA/>
            }
        </>
    );
}
