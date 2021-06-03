import ArticleItem from '../article-item';
import styles from './articles-list.module.scss';
import { Article } from '../../types/article';

type Props = {
  articles: Article[];
};

const ArticlesList = ({ articles }: Props) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
