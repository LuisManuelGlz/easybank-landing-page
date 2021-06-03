import { ReactNode } from 'react';
import Container from '../container';
import styles from './articles.module.scss';

type Props = {
  children?: ReactNode;
};

const Articles = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <Container>{children}</Container>
    </section>
  );
};

export default Articles;
