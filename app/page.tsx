"use client";

// app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftContent}>
        <div className="flex flex-col gap-1"><div className="font-bold text-5xl lg:text-7xl text-slate-700 dark:text-slate-100 tracking-tight">Gian Handa</div><div class="font-semibold text-xl lg:text-3xl text-slate-500 dark:text-slate-400 tracking-tight">STEM @ SWHS</div></div>
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
          height={375}
          className={styles.profilePhoto}
        />
      </div>
    </main>
  );
}
