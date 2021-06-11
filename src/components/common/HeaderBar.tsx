import styled from "styled-components";
import Link from "next/link";
import { BackButton } from "../../styles/detail/common/commonStyle";

export default function HeaderBar(props): JSX.Element {
  return (
    <HeaderWrapper>
      <Link href={"/" + (props.routingUrl ? props.routingUrl : "")}>
        <BackButton src="/assets/detail/back.svg" />
      </Link>
      <TitleHeader>{props.title}</TitleHeader>
      {/*<Link href="/search">*/}
      {/*  <GlassWrapper>*/}
      {/*    <GlassIcon src="/assets/detail/magnifyingGlass.svg" />*/}
      {/*  </GlassWrapper>*/}
      {/*</Link>*/}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  padding-top: 20px;
`;

const CrackerHeader = styled.img`
  color: #222222;
  margin: 0 auto;
`;

const TitleHeader = styled.div`
  color: #222222;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  margin: 0 auto;
`;

const GlassWrapper = styled.div`
  position: absolute;
  right: 20px;
`;

const GlassIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
