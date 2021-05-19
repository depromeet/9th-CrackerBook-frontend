import styled from "styled-components";
import Link from "next/link";
const TableHeader = styled.thead`
  width: 100%;
  height: 60px;

  /* cracker yellow */

  background: #FFD262;
  border-radius: 10px 0px 0px 0px;
  '$tr':{
  width: 100%;
}
`;

export default function Attendance(): JSX.Element {
    return (
        <>
            <table>
                <TableHeader>
                    <tr>
                        <th>{/*이름*/}</th>
                        <th>01</th>
                        <th>02</th>
                        <th>03</th>
                        <th>04</th>
                        <th>
                            <img src={"/assets/profile/nextPage.svg"}/>
                        </th>
                    </tr>
                </TableHeader>

                <tbody>
                    <tr>
                        <td>빈센조</td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                    </tr>
                    <tr>
                        <td>빈센조</td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                        <td>
                            <img src={"/assets/profile/attendance.svg"}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
