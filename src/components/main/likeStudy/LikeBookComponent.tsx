import {LikeInfoWrapper, LikeStudyWrapper, RankBookImg, RankBookWrapper} from "../../../styles/main/BooksStyle";
import {LikeBookContainer, LikeBookNameContainer, LikeDateContainer, LikeTitleContainer} from "../index/MainIndexComponent";

export default function LikeBookComponent(): JSX.Element {
    return (
            <LikeStudyWrapper>
                <LikeTitleContainer />
                <RankBookWrapper>
                    <LikeInfoWrapper>
                        <RankBookImg src="/assets/main/exBook.jpg" />
                        <LikeBookContainer />
                        <LikeBookNameContainer />
                        <LikeDateContainer />
                    </LikeInfoWrapper>
                    <LikeInfoWrapper>
                        <RankBookImg src="/assets/main/exBook.jpg" />
                        <LikeBookContainer />
                        <LikeBookNameContainer />
                        <LikeDateContainer />
                    </LikeInfoWrapper>
                    <LikeInfoWrapper>
                        <RankBookImg src="/assets/main/exBook.jpg" />
                        <LikeBookContainer />
                        <LikeBookNameContainer />
                        <LikeDateContainer />
                    </LikeInfoWrapper>
                </RankBookWrapper>
            </LikeStudyWrapper>
    )
}
