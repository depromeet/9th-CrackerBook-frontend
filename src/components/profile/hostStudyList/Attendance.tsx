import styled from "styled-components";
import Link from "next/link";

const TableView = styled.table`
  width: 95%;
  margin-left: 5%;
  margin-top: 5%;
`;
const TableHeader = styled.thead`
  background: #ffd262;
  border-radius: 10px 0px 0px 0px;
  margin-top: 8%;
`;

const HeaderTh = styled.th`
  height: 60px;
  vertical-align: middle;
`;
const TableBody = styled.tbody`
  background: #ffffff;
`;
const BodyTd = styled.td`
  height: 60px;
  text-align: center;
  vertical-align: middle;
`;

export default function Attendance(): JSX.Element {
  return (
    <>
      <TableView>
        <TableHeader>
          <tr>
            <HeaderTh style={{ borderRadius: "10px 0px 0px 0px" }}>
              {/*이름*/}
            </HeaderTh>
            <HeaderTh>01</HeaderTh>
            <HeaderTh>02</HeaderTh>
            <HeaderTh>03</HeaderTh>
            <HeaderTh>04</HeaderTh>
            <HeaderTh>
              <img src={"/assets/profile/nextPage.svg"} />
            </HeaderTh>
          </tr>
        </TableHeader>

        <TableBody>
          <tr>
            <BodyTd>빈센조</BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd />
          </tr>
          <tr>
            <BodyTd>빈센조</BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd>
              <img src={"/assets/profile/attendance.svg"} />
            </BodyTd>
            <BodyTd />
          </tr>
        </TableBody>
      </TableView>
    </>
  );
}
