import { ReactNode } from 'react';
import Container from '../container';
import styles from './benefits.module.scss';

type Props = {
  children?: ReactNode;
};

const Benefits = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <Container>{children}</Container>
    </section>
  );
};

export default Benefits;
