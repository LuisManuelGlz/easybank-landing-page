import Container from '../container';
import Button from '../button';
import styles from './header.module.scss';

const Header = () => {
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.navContainer}>
          <a className={styles.navBrand} href="#">
            <img width="130" src="/images/logo.svg" alt="Easybank logo" />
          </a>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <Button>Request Invite</Button>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
