import Image from "next/image";
import { ReactNode } from "react";

import styles from "./FrameLayout.module.scss";
import Link from "next/link";
import { Button } from "../components";

interface FrameLayoutProps {
  children: ReactNode;
}

const FrameLayout: React.FC<FrameLayoutProps> = ({ children }) => {
  return (
    <div className={styles.frameLayout}>
      <div className={styles.frameLayoutInner}>
        <header className={styles.header}>
          <Image
            src="/assets/hoobe-icon.png"
            width="104"
            height="104"
            alt="hoo.be"
          />
        </header>
        <main>{children}</main>
      </div>
      <footer className={styles.footer}>
        <div className={styles.signUp}>
          <Button title="create your hoo.be" />
        </div>
        <div className={styles.signIn}>
          <Link href="/login">login</Link>
        </div>
      </footer>
    </div>
  );
};

export default FrameLayout;
