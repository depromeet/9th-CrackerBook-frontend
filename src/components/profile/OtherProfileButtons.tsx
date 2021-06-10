import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import Link from "next/link";

const ButtonNLabel = styled.div`
  &.p {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`;
const ActivityButton = styled.div`
  height: 73px;
  width: 73px;
  margin: 0.5em;

  background: #ffffff;
  /* book shadow */

  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountFont = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* text1 */

  color: #222222;
`;

const CountLabel = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* text3 */

  color: #999999;
`
export default function OtherProfileButtons(): JSX.Element {


    return (
        <>
            <Link href={"/profile/rewards"}>
                <ButtonNLabel>
                    <CountFont>123</CountFont>
                    <CountLabel>활동 배지</CountLabel>
                </ButtonNLabel>
            </Link>
            <Link href={"/"}>
                <ButtonNLabel>
                    <CountFont>123</CountFont>
                    <CountLabel>주최한 스터디</CountLabel>
                </ButtonNLabel>
            </Link>
            <Link href={"/"}>
                <ButtonNLabel>
                    <CountFont>123</CountFont>
                    <CountLabel>후기</CountLabel>
                </ButtonNLabel>
            </Link>
        </>
    );
}
