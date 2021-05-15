import styled from "styled-components";
import Router from "next/router";

const HeadWrapper = styled.div`
  position: relative;
  min-height: 35px;
  margin: 30px 20px 0;
`;
const Title = styled.div`
  display: block;
  padding: 5px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const SubWrapper = styled.div`
  margin: 10px 38px 0 38px;
  display: grid;
  grid-template-rows: repeat(2, 136px);
  grid-template-columns: repeat(3, 113px);
`;
const List = styled.div`
  position: relative;
  cursor: pointer;
  height: 73px;
  width: 73px;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 26px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;
const ListText = styled.div`
  position: absolute;
  width: 200px;
  top: 83px;
  left: 50%;
  transform: translateX(-50%);
`;
const ListIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const kindTitles = [
  { label: "토론", value: "debate" },
  { label: "발표", value: "announcement" },
  { label: "글쓰기", value: "writing" },
  { label: "포트폴리오", value: "portfolio" },
  { label: "기타", value: "etc" },
];

export default function KindStudyComponent(): JSX.Element {
  return (
    <>
      <HeadWrapper>
        <Title>스터디 유형</Title>
      </HeadWrapper>
      <SubWrapper>
        {kindTitles.map((v, index) => {
          return (
            <List
              key={index}
              onClick={() =>
                Router.push({
                  pathname: `/search/result/${v.label}`,
                })
              }
            >
              <ListText>{v.label}</ListText>
              <ListIcon>
                <img src={`/assets/search/${v.value}.svg`} />
              </ListIcon>
            </List>
          );
        })}
      </SubWrapper>
    </>
  );
}
