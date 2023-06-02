import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Link as ScrollLink, Element } from 'react-scroll';
import images from '../src/common/ImgConfigs';
import Image from 'next/image';
import CompareTable from '../src/components/Table/CompareTable';
import HomePage from '../src/components/HomePage';
const Home: NextPage = () => (
  <>
    <Head>
      <meta name="robots" content="index, follow" />
      <title>SameVibes - #擺脫單身 #音樂 #戀愛 #交友</title>
      <meta name="description" content="" />
      <link rel="canonical" href="https://www.stopflyingsolo.website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="cs-main-bg-theme relative text-white">
      <HomePage></HomePage>
    </div>
  </>
);

export default Home;
