import Head from "next/head";
import { useState } from "react";
import KindBookComponent from "../../src/components/opening/KindBookComponent";
import HeaderComponent from "src/components/opening/common/Header";

export default function Index(): JSX.Element {
  const [dashoffset, setDashoffset] = useState(0);

  return (
    <>
      <Head>
        <title>스터디 개설하기</title>
      </Head>
      <HeaderComponent dashoffset={dashoffset} />
      <KindBookComponent />
    </>
  );
}
