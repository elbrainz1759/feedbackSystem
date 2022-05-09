import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Footer from './../components/footer';
import Header from './../components/header';
import Menu from './../components/menu';
import SubMenu from './../components/subMenu';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />


      <main className={styles.main}>
         <SubMenu />
     <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>

   <Footer />
    </div>
  )
}

export default Home
