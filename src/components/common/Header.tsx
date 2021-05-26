import styled from "styled-components";
import Link from "next/link";
import { BackButton } from "../../styles/detail/common/commonStyle";
import { useRecoilState } from "recoil";
import { CategoryTypeState, HeaderTextState } from "../../state/main/mainState";

const headerElement = (
  categoryState: string,
  headerState: string,
): JSX.Element => {
  switch (categoryState) {
    case "main":
      return <CrackerHeader src="/assets/main/HeaderTitle.svg" />;
    case "detail":
      return (
        <TitleHeader categoryType={categoryState}>
          &apos; {headerState} &lsquo;의 스터디
        </TitleHeader>
      );
    default:
      return (
        <TitleHeader categoryType={categoryState}>{headerState}</TitleHeader>
      );
  }
};

export default function HeaderComponent(): JSX.Element {
  const [categoryState, setCategoryState] =
    useRecoilState<string>(CategoryTypeState);
  const [headerState, setHeaderState] = useRecoilState<string>(HeaderTextState);
  const header = headerElement(categoryState, headerState);

  return (
    <HeaderWrapper>
      {headerState !== "CrackerBook" ? (
        <BackButton
          src="/assets/detail/back.svg"
          onClick={() => {
            setCategoryState("main");
            setHeaderState("CrackerBook");
          }}
        />
      ) : (
        ""
      )}
      {header}
      <Link href="/search">
        <GlassWrapper>
          <GlassIcon src="/assets/detail/magnifyingGlass.svg" />
        </GlassWrapper>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  padding: 20px;
`;

const CrackerHeader = styled.img`
  margin-left: 100px;
  padding-top: 1px;
  width: 154px;
  height: 16px;
  color: #222222;
  text-align: center;
`;

const TitleHeader = styled.div<{ categoryType: string }>`
  margin-left: ${(props) =>
    props.categoryType === "detail" ? "55px" : "100px"};
  padding-top: 1px;
  width: ${(props) => (props.categoryType === "detail" ? "334px" : "154px")};
  height: 16px;
  color: #222222;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;

const GlassWrapper = styled.div`
  width: 25%;
  text-align: right;
  padding-top: 8px;
`;

const GlassIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
