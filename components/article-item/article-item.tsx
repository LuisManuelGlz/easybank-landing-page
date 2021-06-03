import { toast } from 'react-toastify';
import { Article } from '../../types/article';
import styles from './article-item.module.scss';

type Props = {
  article: Article;
};

const ArticleItem = ({ article: { image, title, author, content } }: Props) => {
  const articleToast = () =>
    toast(
      'I would like to show you this article but there is no backend implemented 🙁'
    );

  return (
    <div className={styles.container} onClick={articleToast}>
      <img className={styles.articleImage} src={image.src} alt={image.alt} />
      <div className={styles.articleBody}>
        <span className={styles.articleAuthor}>By {author}</span>
        <h4 className={styles.articleTitle}>{title}</h4>
        <p className={styles.articleContent}>{content}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
