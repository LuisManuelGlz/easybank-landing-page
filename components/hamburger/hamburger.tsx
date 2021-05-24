import { MouseEvent } from "react";
import styles from "./hamburger.module.scss";

type Props = {
  onPress: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Hamburger = ({ onPress }: Props) => {
  return (
    <button className={styles.container} onClick={onPress}>
      <img src="/images/icon-hamburger.svg" alt="Hamburger" />
    </button>
  );
};

export default Hamburger;
