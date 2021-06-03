import { ReactNode } from 'react';
import { toast } from 'react-toastify';
import styles from './button.module.scss';

type Props = {
  children?: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button
      className={styles.container}
      onClick={() =>
        toast(
          'I would like to request your invitation but there is no backend implemented 🙁'
        )
      }
    >
      {children}
    </button>
  );
};

export default Button;
