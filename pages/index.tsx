import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/layout';
import Header from '../components/header';
import Benefits from '../components/benefits';
import BenefitsList from '../components/benefits-list';
import Articles from '../components/articles';
import ArticlesList from '../components/articles-list';
import Container from '../components/container';
import Button from '../components/button';
import styles from '../styles/Home.module.scss';
import { BENEFITS } from '../data/benefits';
import { ARTICLES } from '../data/articles';

import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Easybank</title>
        </Head>

        <Header />

        {/* Showcase */}
        <section className={styles.showcase}>
          <Container>
            <div className={styles.bgContainer}>
              <img
                className={styles.bgIntroDesktop}
                src="/images/bg-intro-desktop.svg"
                alt="Intro desktop"
              />
              <img
                className={styles.bgIntroMobile}
                src="/images/bg-intro-mobile.svg"
                alt="Intro mobile"
              />
              <img
                className={styles.bgIntroMockups}
                src="/images/image-mockups.png"
                alt="App mockups"
              />
            </div>

            <div className={styles.introContainer}>
              <h2>
                Next generation
                <br />
                digital banking
              </h2>

              <p>
                Take your financial life online. Your Easybank account will be
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>

              <Button>Request Invite</Button>
            </div>
          </Container>
        </section>

        {/* Benefits section */}
        <Benefits>
          <div>
            <h2>Why choose Easybank?</h2>
            <p className={styles.benefitsDescription}>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <BenefitsList benefits={BENEFITS} />
        </Benefits>

        {/* Articles section */}
        <Articles>
          <div>
            <h2>Latest Articles</h2>
          </div>

          <ArticlesList articles={ARTICLES} />
        </Articles>
      </Layout>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        toastClassName={styles.toastContainer}
        bodyClassName={styles.toastBody}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}
