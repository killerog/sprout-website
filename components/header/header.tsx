import { EXTENSION_NAME } from "@lib/constants";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles["header-container"]} container`}>
        <section>
          <Link className={styles.logo} href="/" aria-label={`${EXTENSION_NAME}`}>
            <img src="/assets/images/logo.svg" alt={`${EXTENSION_NAME} logo`} />
          </Link>
        </section>
        <nav className={styles.nav} aria-label="Header links">
          <Link href="/faq">FAQ</Link>
          <div className={styles.download}>
            <Link className="button outline" href="/#download">Download</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}