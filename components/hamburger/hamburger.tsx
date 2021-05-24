import { MouseEvent } from 'react';
import styles from './hamburger.module.scss';

type Props = {
  onPress: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
};

const Hamburger = ({ onPress, isOpen }: Props) => {
  return (
    <button className={styles.container} onClick={onPress}>
      {isOpen ? (
        <img src="/images/icon-close.svg" alt="Hamburger" />
      ) : (
        <img src="/images/icon-hamburger.svg" alt="Hamburger" />
      )}
    </button>
  );
};

export default Hamburger;
