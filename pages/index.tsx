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
                  <br />
                  will be one-stop-shop for spending, saving,
                  <br />
                  budgeting, investing, and much more.
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
            <div>
              <h2>Why choose Easybank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub.
                <br />
                Control your finances like never before.
              </p>
            </div>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <img
                  className={styles.benefitIcon}
                  src="/images/icon-online.svg"
                  alt="Online Banking icon"
                  width="70"
                />
                <h3>Online Banking</h3>
                <p>
                  Our modern web and mobile
                  <br />
                  applications allow you to keep
                  <br />
                  track of your finances wherever you
                  <br />
                  are in the world.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <img
                  className={styles.benefitIcon}
                  src="/images/icon-budgeting.svg"
                  alt="Online Banking icon"
                  width="70"
                />
                <h3>Simple Budgeting</h3>
                <p>
                  See exactly where your money
                  <br />
                  goes each month. Receive
                  <br />
                  notifications when you're close to
                  <br />
                  hitting your limits.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <img
                  className={styles.benefitIcon}
                  src="/images/icon-onboarding.svg"
                  alt="Online Banking icon"
                  width="70"
                />
                <h3>Fast Onboarding</h3>
                <p>
                  We don't do branches. Open your
                  <br />
                  account in minutes online and start
                  <br />
                  taking control of your finances
                  <br />
                  right away.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <img
                  className={styles.benefitIcon}
                  src="/images/icon-api.svg"
                  alt="Online Banking icon"
                  width="70"
                />
                <h3>Open API</h3>
                <p>
                  Manage your savings, investments,
                  <br />
                  pension, and much more from one
                  <br />
                  account. Tracking your money has
                  <br />
                  never been easier.
                </p>
              </div>
            </div>
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
