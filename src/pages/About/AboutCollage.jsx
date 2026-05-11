import styles from './AboutCollage.module.css';

function AboutCollage() {
  return (
    <div className={styles.collage}>
      <img src="/about/about-library.webp" alt="A library with trees around it on a summer day" />
      <img src="/about/about-annastiina.webp" alt="Annastiina walking on a sidewalk" />
      <img src="/about/about-anniina.webp" alt="Anniina in a store that sells second-hand items" />
      <img src="/about/about-gallery.webp" alt="People looking into an art gallery from the street" />
    </div>
  )
}

export default AboutCollage;