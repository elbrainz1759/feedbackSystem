import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Footer from "./../components/footer";
import Header from "./../components/header";
import Menu from "./../components/menu";
import SubMenu from "./../components/subMenu";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />

      <main className={styles.main}>
        <SubMenu />
        <h4 className={styles.title}>
          Welcome to MCN Logistics Feedback{" "}
          <a href="https://nextjs.org">System</a>
        </h4>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
