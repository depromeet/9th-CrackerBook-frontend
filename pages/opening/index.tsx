import Head from "next/head";
import { useEffect, useState } from "react";
import KindBookComponent from "../../src/components/opening/KindBookComponent";
import FooterComponent from "../../src/components/opening/common/FooterComponent";
import HeaderComponent from "src/components/opening/common/HeaderComponent";

export default function Index(): JSX.Element {
  const [dashoffset, setDashoffset] = useState(0);

  useEffect(() => {
    if (dashoffset > 0) return;

    const timeout = setTimeout(() => setDashoffset(25), 100);

    return () => clearTimeout(timeout);
  }, [dashoffset]);

  return (
    <>
      <Head>
        <title>스터디 개설하기</title>
      </Head>
      <HeaderComponent dashoffset={dashoffset} />
      <KindBookComponent setDashoffset={setDashoffset} />
      <FooterComponent />
    </>
  );
}
