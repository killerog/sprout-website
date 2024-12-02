"use client"

import { EXTENSION_NAME } from "@lib/constants";
import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <nav className={styles.links} aria-label="Footer links">
          <div className={styles["links-group"]}>
            <div className={styles["links-heading"]}>Download</div>
            <a className={styles.link} href="[CHROME_URL]">Google Chrome</a>
            <a className={styles.link} href="[FIREFOX_URL]">Firefox</a>
            <a className={styles.link} href="[EDGE_URL]">Microsoft Edge</a>
          </div>
          <div className={styles["links-group"]}>
            <div className={styles["links-heading"]}>Support</div>
            <Link className={styles.link} href="/updates">Updates</Link>
            <Link className={styles.link} href="/privacy">Privacy Policy</Link>
            <a className={styles.link} href="mailto:[SUPPORT_EMAIL]">Contact</a>
          </div>
        </nav>
        <p className={styles["affiliation-text"]}>YNAB is a trademark of You Need A Budget LLC. {EXTENSION_NAME} is not affiliated with YNAB.</p> 
        <p className={styles["copyright-text"]}>&copy; 2021-{year}.</p>
      </div>
    </footer>
  )
}