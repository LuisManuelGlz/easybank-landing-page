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

        {/* Showcase */}
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

        {/* Benefits section */}
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
                <h3 className={styles.benefitTitle}>Online Banking</h3>
                <p className={styles.benefitDescription}>
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
                <h3 className={styles.benefitTitle}>Simple Budgeting</h3>
                <p className={styles.benefitDescription}>
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
                <h3 className={styles.benefitTitle}>Fast Onboarding</h3>
                <p className={styles.benefitDescription}>
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
                <h3 className={styles.benefitTitle}>Open API</h3>
                <p className={styles.benefitDescription}>
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

        {/* Articles section */}
        <section className={styles.latestArticles}>
          <Container>
            <h2>Latest Articles</h2>

            <div className={styles.articlesList}>
              <div className={styles.articleItem}>
                <img
                  className={styles.articleImage}
                  src="/images/image-currency.jpg"
                  alt="Currency"
                />
                <div className={styles.articleBody}>
                  <span className={styles.articleAuthor}>
                    By Claire Robinson
                  </span>
                  <h4 className={styles.articleTitle}>
                    Receive money in any currency with no fees
                  </h4>
                  <p className={styles.articleContent}>
                    The world is getting smaller and we're becoming more mobile.
                    So why should you be forced to only receive money in a
                    single ...
                  </p>
                </div>
              </div>

              <div className={styles.articleItem}>
                <img
                  className={styles.articleImage}
                  src="/images/image-restaurant.jpg"
                  alt="Restaurant"
                />
                <div className={styles.articleBody}>
                  <span className={styles.articleAuthor}>By Wilson Hutton</span>
                  <h4 className={styles.articleTitle}>
                    Treat yourself without worrying about money
                  </h4>
                  <p className={styles.articleContent}>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    ...
                  </p>
                </div>
              </div>

              <div className={styles.articleItem}>
                <img
                  className={styles.articleImage}
                  src="/images/image-plane.jpg"
                  alt="Plane"
                />
                <div className={styles.articleBody}>
                  <span className={styles.articleAuthor}>By Wilson Hutton</span>
                  <h4 className={styles.articleTitle}>
                    Take your Easybank card wherever you go
                  </h4>
                  <p className={styles.articleContent}>
                    We want you to enjoy your travels. This is why we don't
                    charge any fees on purchases while you're abroad. We'll even
                    show you ...
                  </p>
                </div>
              </div>

              <div className={styles.articleItem}>
                <img
                  className={styles.articleImage}
                  src="/images/image-confetti.jpg"
                  alt="Confetti"
                />
                <div className={styles.articleBody}>
                  <span className={styles.articleAuthor}>
                    By Claire Robinson
                  </span>
                  <h4 className={styles.articleTitle}>
                    Our invite-only Beta accounts are now live!
                  </h4>
                  <p className={styles.articleContent}>
                    After a lot of hard work by the whole team, we're excited to
                    launch our closed beta. It's easy to request an invite
                    through the site ...
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  );
}
