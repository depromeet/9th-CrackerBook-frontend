import { useState } from "react";
import styled from "styled-components";

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
  white-space: nowrap;
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
const Result = [
  {
    title:
      "책 하나 제가 했습니다. 긴 제목의 책이 필요해서 정말 제목이 긴 책 이름으로",
    author: "이성용",
    publish: "맹그로브숲",
    date: "2021.02.22",
  },
  {
    title: "코로나 팬데믹 리포트",
    author: "차우준",
    publish: "민음사",
    date: "2021.04.09",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
    publish: "맹그로브숲",
    date: "2021.02.22",
  },
  {
    title: "비전공자를 위해 이해할 수 있는 정말 긴 책 제목의 책",
    author: "김신지",
    publish: "맹그로브숲",
    date: "2021.02.22",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
    publish: "맹그로브숲",
    date: "2021.02.22",
  },
  {
    title: "노자 도덕경",
    author: "도덕경",
    publish: "민음사",
    date: "2021.04.09",
  },
  {
    title:
      "책 하나 제가 했습니다. 긴 제목의 책이 필요해서 정말 제목이 긴 책 이름으로",
    author: "이성용",
    publish: "맹그로브숲",
    date: "2021.02.22",
  },
  {
    title: "코로나 팬데믹 리포트",
    author: "차우준",
    publish: "민음사",
    date: "2021.04.09",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
    publish: "맹그로브숲",
    date: "2021.02.22",
  },
  {
    title: "비전공자를 위해 이해할 수 있는 정말 긴 책 제목의 책",
    author: "김신지",
    publish: "민음사",
    date: "2021.04.09",
  },
  {
    title: "드론과 현장 : 산림 편",
    author: "김신지",
    publish: "맹그로브숲",
    date: "2021.02.22",
  },
  {
    title: "노자 도덕경",
    author: "도덕경",
    publish: "민음사",
    date: "2021.04.09",
  },
];

export default function SearchResultComponent(): JSX.Element {
  const [listSelected, setListSelected] = useState(-1);

  return (
    <ListWrapper>
      {Result.map((v, index) => {
        return (
          <LiLink
            key={index}
            className={listSelected === index ? "on" : ""}
            onClick={() => setListSelected(index)}
          >
            <Profile>
              <ImgShadow>
                <Img src="/assets/main/exBook.jpg" />
              </ImgShadow>
            </Profile>
            <ContentWrapper>
              <Title>{v.title}</Title>
              <Content>
                <SubTitle>저자</SubTitle>
                <SubContent>{v.author}</SubContent>
              </Content>
              <Content>
                <SubTitle>출판</SubTitle>
                <SubContent>{v.publish}</SubContent>
                <SubContent>{v.date}</SubContent>
              </Content>
            </ContentWrapper>
          </LiLink>
        );
      })}
    </ListWrapper>
  );
}
