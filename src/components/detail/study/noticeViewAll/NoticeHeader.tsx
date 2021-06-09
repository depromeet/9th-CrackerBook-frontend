import styled from "styled-components";
import Link from "next/link";

export function NoticeHeader(): JSX.Element {
  return (
    <>
      <Header>
        <Link href="/detail/study/studyDetail">
          <BackIcon src="assets/detail/back.svg" />
        </Link>

        <Title>스터디 공지</Title>
      </Header>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding-top: 10px;
`;

const BackIcon = styled.img`
  position: absolute;
  width: 10px;
  height: 18px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  text-align: center;
  width: 100%;
  font-size: 16px;
`;
