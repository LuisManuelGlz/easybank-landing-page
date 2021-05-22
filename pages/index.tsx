import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Header from '../components/header';
import Container from '../components/container';
import Button from '../components/button';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Easybank</title>
        </Head>

        <Header />

        <section className={styles.showcase}>
          <Container>
            <div className={styles.showcaseContainer}>
              <div className={styles.showcaseIntro}>
                <h2>Next generation digital banking</h2>
                <p>
                  Take your financial life online. Your Easybank account
                  <br /> will be one-stop-shop for spending, saving,
                  <br /> budgeting, investing, and much more.
                </p>
                <Button>Request Invite</Button>
              </div>
              <div>
                <img
                  className={styles.bgIntroDesktop}
                  src="/images/bg-intro-desktop.svg"
                  alt="Intro"
                  width="1200"
                />
                <img
                  className={styles.bgIntroMockups}
                  src="/images/image-mockups.png"
                  alt="App mockups"
                  width="720"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.benefits}>
          <Container>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            veritatis.
          </Container>
        </section>
        <section className={styles.latestArticles}>
          <Container>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            ipsa!
          </Container>
        </section>
      </Layout>
    </div>
  );
}
