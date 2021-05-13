import styled from "styled-components";
import Link from "next/link";

export default function HeaderComponent(): JSX.Element {
    return (
        <HeaderWrapper>
            <Link href='/main'>
                <CrackerHeader>
                    CRACKER BOOK
                </CrackerHeader>
            </Link>
            <Link href='/search'>
                <GlassWrapper>
                    <GlassIcon src='/assets/detail/magnifyingGlass.svg'/>
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

const CrackerHeader = styled.div`
  margin-left: 50px;
  width: 80%;
  color: #222222;
  font-weight: 900;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
`;

const GlassWrapper = styled.div`
  width: 20%;
  text-align: right;
`;

const GlassIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
