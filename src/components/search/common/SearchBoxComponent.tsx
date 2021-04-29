import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";

const SearchBoxWrapper = styled.div`
  position: relative;
`;
const ArrowLeft = styled.div`
  width: 45px;
  height: 45px;
  line-height: 45px;
  position: absolute;
  left: 20px;
  font-size: 19px;
`;
const SearchBoxInnerWrapper = styled.div`
  border: 1px solid #ffd262;
  margin: 30px 20px 10px 40px;
  border-radius: 20px;
  line-height: 40px;
  height: 40px;
  position: relative;
  padding: 0 44px 0 17px;
`;
const IconBox = styled.div`
  position: absolute;
  top: 3px;
  right: 20px;
`;
const InputBox = styled.div`
  padding-top: 0px;
`;
const InputSearch = styled.input`
  font-size: 14px;
  line-height: 20px;
  color: #999999;
  border: 0;
  width: 100%;
  display: block;
  margin: 0;
  padding: 11px 0 0;
  outline: none;
`;

export default function SearchBoxComponent(): JSX.Element {
  const registerUser = async (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      Router.push({
        pathname: "/search/detail",
      });
    }
  };

  return (
    <SearchBoxWrapper>
      <ArrowLeft>
        <Link href="/main/books">
          <a>
            <img src="/assets/search/arrowleft.svg" />
          </a>
        </Link>
      </ArrowLeft>
      <SearchBoxInnerWrapper>
        <InputBox>
          <InputSearch
            id="name"
            name="asd"
            type="text"
            autoComplete="name"
            placeholder="책, 저자, 스터디를 검색해주세요."
            onKeyUp={registerUser}
            required
          />
        </InputBox>
        <IconBox>
          <img src="/assets/search/icon.svg" />
        </IconBox>
      </SearchBoxInnerWrapper>
    </SearchBoxWrapper>
  );
}
