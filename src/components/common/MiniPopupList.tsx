import styled from "styled-components";
import React from "react";
import Link from "next/link";

const ListWrapper = styled.ul`
  //position: absolute;
  min-widths: 4vw;
  background: #ffffff;
  /* cracker grey */

  border: 1px solid #f1f1f3;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid #f1f1f3;
  height: 40px;
  margin-top: 5px;
  text-align: center;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  width: 140px;
  /* text2 */

  color: #777777;
  margin: auto;
  p {
    width: 100%;
    height: fit-content;
    margin: auto;
  }

  img {
    width: 20px;
    height: 20px;
    margin: 10px;
  }
`;

const optoionItem = (icon, text) => {
  return (
    <ListItem>
      <p>{text}</p>
      <img src={icon} />
    </ListItem>
  );
};
export default function MiniPopupList(props): JSX.Element {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const clickHandler = (index) => {
    setSelectedItem(index);
  };

  return (
    <div style={{ height: "100%" }}>
      <ListWrapper>
        {props.listvalue.map((itemValue, index) => {
          return itemValue.linkPath ? (
            <Link href={itemValue.linkPath}>
              {optoionItem(itemValue.icon, itemValue.text)}
            </Link>
          ) : (
            optoionItem(itemValue.icon, itemValue.text)
          );
        })}
      </ListWrapper>
    </div>
  );
}
