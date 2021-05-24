import Head from "next/head";
import { useRouter } from "next/router";
import ResultComponent from "src/components/search/result";

export default function Detail(): JSX.Element {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>검색 결과 : {Router.query.name}</title>
      </Head>
      <ResultComponent />
    </>
  );
}
