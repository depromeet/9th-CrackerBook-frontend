import { useState } from "react";
import {
  TabButton,
  TabWrapper,
} from "../../../styles/detail/common/commonStyle";
import { BookTabInfo } from "./BookTabInfo";

export function TabContainer(): JSX.Element {
  const tabList = ["책소개", "스터디(23)", "후기(24)"];
  const [selected, setSelected] = useState(0);
  return (
    <>
      <TabWrapper>
        {tabList.map((tab, index) => {
          return (
            <>
              <TabButton
                key={index}
                className={selected === index ? "active" : ""}
                onClick={() => setSelected(index)}
              >
                {tab}
              </TabButton>
            </>
          );
        })}
      </TabWrapper>
      <BookTabInfo />
    </>
  );
}
