import Link from "next/link";
import styles from "./hero.module.scss";
import { EXTENSION_NAME } from "@lib/constants";

export default function Hero() {
  return (
    <section>
      <div className={`${styles.hero} container`}>
        <section className={styles.cta}>
          <h1 className={styles.heading}>Sprout for YNAB</h1>
          <p className={styles.subheading}>Sprout for YNAB will be making a return in 2026.</p>
          <div className={styles["download-button"]}>
            <Link className="button" href="#download">
              <span>Get the extension</span>
            </Link>
          </div>
        </section>
        <section className={styles.preview}>
          <img src="assets/previews/screenshot.png" alt={`${EXTENSION_NAME} screenshot`} />
        </section>
      </div>
    </section>
  )
}