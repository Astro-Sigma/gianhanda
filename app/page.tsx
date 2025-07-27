// app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="left-content">
        <h1>Gian Handa</h1>
        <div className="social-buttons">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
        </div>
      </div>
      <div className="photo-container">
        <Image
          src="/gianhanda.jpg" // put your actual photo in the public/ folder
          alt="Gian Handa"
          width={300}
          height={300}
          className="profile-photo"
        />
      </div>
    </main>
  );
}