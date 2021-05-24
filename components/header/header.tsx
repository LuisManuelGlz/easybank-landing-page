import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Container from '../container';
import Button from '../button';
import Hamburger from '../hamburger';
import styles from './header.module.scss';

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      innerWidth > 992 && setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

          <div className={styles.navRequestInvite}>
            <Button>Request Invite</Button>
          </div>

          <div className={styles.navHamburger}>
            <Hamburger onPress={toggleModal} isOpen={modalIsOpen} />
          </div>
        </div>
        <Modal
          className={styles.navModal}
          overlayClassName={styles.navModalOverlay}
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          contentLabel="Nav Modal"
        >
          <div className={styles.modalContainer}>
            <a href="#" onClick={toggleModal}>
              Home
            </a>
            <a href="#" onClick={toggleModal}>
              About
            </a>
            <a href="#" onClick={toggleModal}>
              Contact
            </a>
            <a href="#" onClick={toggleModal}>
              Blog
            </a>
            <a href="#" onClick={toggleModal}>
              Careers
            </a>
          </div>
        </Modal>
      </Container>
    </nav>
  );
};

export default Header;
