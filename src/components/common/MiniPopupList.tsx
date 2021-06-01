import styled from "styled-components";
import React from "react";
import Link from "next/link";

const ListWrapper = styled.ul`
  //position: absolute;
  min-widths: 4vw;
  background: #FFFFFF;
  /* cracker grey */

  border: 1px solid #F1F1F3;
  box-sizing: border-box;
  border-radius: 4px;

`;

const ListItem = styled.li`
  
  border-bottom: 1px solid #F1F1F3;
  height: 30px;
  margin-top: 5px;
  text-align: center;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  /* text2 */

  color: #777777;


`;


export default function MiniPopupList(props): JSX.Element {

    const [selectedItem, setSelectedItem] = React.useState(0);


    const clickHandler = (index) => {
        setSelectedItem(index);
    };

    return (
        <div style={{ height: "100%" }}>
            <ListWrapper>
                {props.listvalue.map((itemValue, index) => {
                    return itemValue.linkPath ?
                        (<Link href={itemValue.linkPath}><ListItem>{itemValue.text}</ListItem></Link>)
                    :  (<ListItem>{itemValue.text}</ListItem>)
                })}
            </ListWrapper>
        </div>
    );
}
