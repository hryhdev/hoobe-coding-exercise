import { ReactNode } from "react";
import Image from "next/image";

import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <Image
          src="/assets/hoobe-icon.png"
          width="30"
          height="30"
          alt="hoo.be"
        />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
