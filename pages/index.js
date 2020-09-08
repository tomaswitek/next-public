import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const client = process.env.CLIENT || "default";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="client/company_logo.svg"
            alt="Vercel Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
