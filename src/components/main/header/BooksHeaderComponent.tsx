import {StudyTypeDiv, StudyTypeTitle, StudyTypeWrapper} from "../../../styles/main/BooksStyle";
import styled from "styled-components";

export default function BooksHeaderComponent(): JSX.Element {
    const srcList = ['/assets/main/chats.svg', '/assets/main/microphone.svg', '/assets/main/note.svg', '/assets/main/desktop.svg', '/assets/main/etc.svg'];
    const title = ['토론', '발표', '글쓰기', '포트폴리오', '기타'];
    return (
        <StudyTypeWrapper>
            {
                srcList.map((imgSrc, index) => {
                    return (
                            <StudyTypeDiv>
                                <ImgWrapper>
                                    <StudyTypeImg key={index} src={imgSrc} />
                                </ImgWrapper>
                                <StudyTypeTitle>{title[index]}</StudyTypeTitle>
                            </StudyTypeDiv>
                        );
                })
            }
        </StudyTypeWrapper>
    )
}

const ImgWrapper = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 1px 3px 9px 7px #f4f4f4;
  margin-bottom: 4px;

`;

const StudyTypeImg = styled.img`
  width: 32px;
  height: 32px;
  text-align: center;
`;

