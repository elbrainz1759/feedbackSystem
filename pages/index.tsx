import { Grid } from "@material-ui/core";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Footer from "./../components/footer";
import Header from "./../components/header";
import Menu from "./../components/menu";
import SubMenu from "./../components/subMenu";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />

      <main className={styles.main}>
        <SubMenu />
        <div style={{ padding: "2%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div>
                <Image
                  src="/graph1.png"
                  alt="Vercel Logo"
                  width={800}
                  height={450}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <Image
                  src="/graph2.png"
                  alt="Vercel Logo"
                  width={800}
                  height={450}
                />
              </div>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <div>
                {" "}
                <Image
                  src="/graph3.png"
                  alt="Vercel Logo"
                  width={1600}
                  height={700}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
