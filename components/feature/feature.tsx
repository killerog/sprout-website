import styles from "./feature.module.scss"

type Props = {
  heading: string,
  subheading: string,
  imageUrl: string,
  imageAltText: string,
  index: number
}

export default function Feature({ heading, subheading, imageUrl, imageAltText, index }: Props) {
  return (
    <section className={`${styles.feature} ${index % 2 === 0 ? styles["alt-bg"] : ""}`} key={index}>
      <div className={`${styles["feature-container"]} container`}>
        <div className={styles["feature-description"]}>
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
        <img className={styles.image} src={imageUrl} alt={imageAltText}></img>
      </div>
    </section>
  )
}