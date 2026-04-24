import styles from './AboutCollage.module.css';

function AboutCollage() {
  return (
    <div className={styles.collage}>
      <img src="/about/about-library.webp" />
      <img src="/about/about-annastiina.webp" />
      <img src="/about/about-anniina.webp" />
      <img src="/about/about-gallery.webp" />
    </div>
  )
}

export default AboutCollage;