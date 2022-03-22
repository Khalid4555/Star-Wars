import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/sidebar";
import styles from "../styles/App.module.css";
import data from "../data.json";

export default function Home() {
  return (
    <div>
      <main className={styles.container}>
        <Sidebar data={data} />
      </main>
    </div>
  );
}
