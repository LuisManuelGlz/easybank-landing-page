import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Easybank</title>
        </Head>

        <Header />
      </Layout>
    </div>
  );
}
