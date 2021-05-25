import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  resultListIndexState,
  resultListState,
} from "src/components/states/opening";
import { studyFormState } from "src/components/states/studyForm";
import NotFoundComponent from "src/components/common/NotFoundComponent";

const ListWrapper = styled.ul`
  position: relative;
  margin: 32px 20px 100px 20px;
`;
const Title = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  width: 173px;
  color: #222222;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const LiLink = styled.li`
  position: relative;
  display: flex;
  margin: 0 0 30px 0;
  width: 335px;
  height: 145px;
  border: 2px solid #f1f1f3;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  &.on {
    border: 2px solid #ffd262;
  }
`;
const Profile = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
`;
const Img = styled.img`
  height: 105px;
  width: 70px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0px 5px 5px 0px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 105px;
  width: 12px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
const ContentWrapper = styled.div`
  flex-direction: column;
  margin: 20px 0 0 20px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #677ac7;
`;
const SubTitle = styled.div`
  margin: 0 0 4px 0;
  font-size: 14px;
  line-height: 20px;
  color: #777777;
`;
const SubContent = styled.div`
  margin: 0 0 4px 10px;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;

export default function SearchResultComponent(): JSX.Element {
  const [resultListIndex, setResultListIndex] =
    useRecoilState(resultListIndexState);
  const [studyForm, setStudyForm] = useRecoilState(studyFormState);
  const [resultList] = useRecoilState(resultListState);
  const bookSelect = (index, book) => {
    setStudyForm({ ...studyForm, book });
    setResultListIndex(index);
  };

  return (
    <ListWrapper>
      {resultList.length
        ? resultList.map((b, index) => {
            return (
              <LiLink
                key={index}
                className={resultListIndex === index ? "on" : ""}
                onClick={() => bookSelect(index, b)}
              >
                <Profile>
                  <ImgShadow>
                    <Img src="/assets/main/exBook.jpg" />
                  </ImgShadow>
                </Profile>
                <ContentWrapper>
                  <Title>{b.title}</Title>
                  <Content>
                    <SubTitle>저자</SubTitle>
                    <SubContent>{b.author}</SubContent>
                  </Content>
                  <Content>
                    <SubTitle>출판</SubTitle>
                    <SubContent>{b.publish}</SubContent>
                    <SubContent>{b.date}</SubContent>
                  </Content>
                </ContentWrapper>
              </LiLink>
            );
          })
        : resultListIndex === -1 && <NotFoundComponent />}
    </ListWrapper>
  );
}
