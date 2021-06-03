import { Benefit } from '../../types/benefit';
import styles from './benefit-item.module.scss';

type Props = {
  benefit: Benefit;
};

const BenefitItem = ({ benefit: { image, title, description } }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.benefitIcon} src={image.src} alt={image.alt} />
      <h3 className={styles.benefitTitle}>{title}</h3>
      <p className={styles.benefitDescription}>{description}</p>
    </div>
  );
};

export default BenefitItem;
