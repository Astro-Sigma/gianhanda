import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main} style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to my personal website</h1>
        <p>My name is Gian Handa</p>
      </main>
  );
}
