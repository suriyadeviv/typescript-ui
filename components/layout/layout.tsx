import { ReactNode } from 'react';
import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.content}>
      <main className={styles.main}><div><div>{children}</div></div></main>
    </div>
  );
};

export default Layout;
