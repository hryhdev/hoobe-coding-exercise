import Image from "next/image";
import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit";
  title: string;
  //...rest
}

const Button: React.FC<ButtonProps> = ({ type = "submit", title }) => {
  return (
    <button className={styles.button} type={type}>
      <Image src="/assets/hoobe.svg" width="24" height="24" alt="hoo.be" />
      {title}
    </button>
  );
};

export default Button;
