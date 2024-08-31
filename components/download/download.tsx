import styles from "./download.module.scss";

export default function Download() {
  return (
    <section id="download" className={styles.download}>
      <h2 className={styles.heading}>Speed up your budgeting now</h2>
      <p>Available for download from the Chrome Web Store, Firefox Browser Add-ons and Microsoft Edge Add-ons</p>
      <nav className={styles.stores}>
        <a className={`${styles["store-link"]} button outline`} href="[CHROME_URL]">
          <img src="assets/images/browsers/chrome.svg" aria-hidden />
          <span>Google Chrome</span>
        </a>
        <a className={`${styles["store-link"]} button outline`} href="[FIREFOX_URL]">
          <img src="assets/images/browsers/firefox.svg" aria-hidden />
          <span>Firefox</span>
        </a>
        <a className={`${styles["store-link"]} button outline`} href="[EDGE_URL]">
          <img src="assets/images/browsers/edge.svg" aria-hidden />
          <span>Microsoft Edge</span>
        </a>
      </nav>
      <small className={styles.notice}>A YNAB account with an active subscription is required to use this extension.</small>
      <a className={styles["ynab-badge"]} href="https://www.ynab.com/">
        <img src="assets/images/works_with_ynab.svg" alt="Works with YNAB badge" />
      </a>
    </section>
  )
}