import type { NextPage } from 'next';
import Head from 'next/head';
import Image from '../components/image.js';
import Team from '../components/Team';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>White Rabbit Technology LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold">
        White Rabbit Technology LLC
      </h1>
      <Team />
    </div>
  );
}

export default Home
