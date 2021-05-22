import { ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  children?: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className={styles.container}>
      {children}
    </button>
  );
};

export default Button;
