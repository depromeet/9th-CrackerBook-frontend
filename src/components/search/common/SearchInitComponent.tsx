import styled from "styled-components";

const SearchInit = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  margin: 182px 0;
`;

export default function SearchInitComponent(): JSX.Element {
  return (
    <SearchInit>
      책, 저자, 스터디명을 검색하며 찾아보실 수 있어요.
      <br />
      철자와 띄어쓰기를 정확하게 입력해주세요.
    </SearchInit>
  );
}
