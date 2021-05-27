import styled from "styled-components";

const NotFoundWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Svgbox = styled.div`
  position: relative;
  padding: 123px 0 0 0;
  font-weight: 500;
  font-size: 20px;
`;
const NotFoundMain = styled.div`
  position: relative;
  padding: 32px 0 0 0;
  font-weight: 500;
  font-size: 20px;
`;
const NotFoundSub = styled.div`
  position: relative;
  padding: 10px 0 109px 0;
  line-height: 20px;
  color: #999999;
  font-size: 14px;
`;

export default function NotFoundComponent(): JSX.Element {
  return (
    <NotFoundWrapper>
      <Svgbox>
        <img src="/assets/search/notfound.svg" />
      </Svgbox>
      <NotFoundMain>검색 결과가 없습니다.</NotFoundMain>
      <NotFoundSub>
        다른 검색어를 입력하시거나
        <br />
        철자와 띄어쓰기를 확인해보세요.
      </NotFoundSub>
    </NotFoundWrapper>
  );
}
