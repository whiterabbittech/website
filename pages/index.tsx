import type { NextPage } from 'next';
import Head from 'next/head';
import Image from '../components/image.js';
import Team from '../components/Team';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>White Rabbit Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Team />
    </div>
  );
}

export default Home
