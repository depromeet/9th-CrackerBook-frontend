import Head from 'next/head';
import { useEffect, useState } from 'react';

import ItemList from '../src/components/home/itemList';

export default function Home() {
  const [text, setText] = useState<string>('typesciprt Test');

  return (
      <div>
        <Head>
          <title>Create Next App</title>
        </Head>
        <ItemList />
      </div>
  );
}
