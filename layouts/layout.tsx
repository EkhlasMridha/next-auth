import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import styles from "../styles/Home.module.css";

export const Layout = (props: PropsWithChildren) => {
  const { children, ...restProps } = props;

  return (
    <>
      <Header />
      <main className={styles.main} {...restProps}>
        {children}
      </main>
      <Footer />
    </>
  );
};
