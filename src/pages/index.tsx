import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ProductHero } from "../components/ProductHero";
import { ProductSearch } from "../components/ProductSearch";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProductHero />
      <ProductSearch />
    </div>
  );
};

export default Home;
