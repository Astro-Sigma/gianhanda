// app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftContent}>
        <h1>Gian Handa</h1>
        <div className={styles.socialButtons}>
          <button onClick={() => window.open('https://github.com/yourusername', '_blank')}>
            GitHub
          </button>
          <button onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}>
            LinkedIn
          </button>
          <button onClick={() => window.open('https://twitter.com/yourusername', '_blank')}>
            Twitter
          </button>
        </div>
      </div>
      <div className={styles.photoContainer}>
        <Image
          src="/gianhanda.jpg" // photo in public folder
          alt="Gian Handa"
          width={300}
          height={300}
          className={styles.profilePhoto}
        />
      </div>
    </main>
  );
}
