import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Footer from "./../components/footer";
import Header from "./../components/header";
import LoginForm from './../components/forms/loginForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
          <Header />
          <ToastContainer />

      <main className={styles.main}>
          <div className={styles.grid}>
        <LoginForm />
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
