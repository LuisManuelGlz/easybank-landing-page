import Container from '../container';
import Button from '../button';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.footerSocial}>
            <a href="#">
              <img src="/images/logo-dark.svg" alt="Easybank logo" />
            </a>
            <div className={styles.footerSocialLinks}>
              <a className={styles.facebookLogo} href="#" />
              <a className={styles.youtubeLogo} href="#" />
              <a className={styles.twitterLogo} href="#" />
              <a className={styles.pinterestLogo} href="#" />
              <a className={styles.instagramLogo} href="#" />
            </div>
          </div>

          <div className={styles.footerLinks}>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className={styles.footerRights}>
            <Button>Request Invite</Button>
            <div className={styles.rights}>
              &copy; Easybank. All Rights Reserved
            </div>
          </div>
        </div>
        <div className={styles.attribution}>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/solutions/responsive-landing-page-nextjs-and-sass-lIzO07FeR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://github.com/LuisManuelGlz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luis Manuel González
          </a>
          .
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
