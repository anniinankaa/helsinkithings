import MediaCard from '../../components/ui/MediaCard';
import styles from './AboutExplore.module.css';


function AboutExplore() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.mediaContainer}>
        <a href="https://www.instagram.com/helsinkithings">
          <MediaCard label="Instagram" imageSrc="/about/about-ig.webp" imageAlt="an instagram post with the title '4 things to do in Helsinki - week 24, june 2025'" />
        </a>      
      </div>
      <div className={styles.headerContainer}>
        <h2><span>Explore</span><br/><span className="text-lg">Our Work</span></h2>
      </div>
      <div className={styles.mediaContainer}>
        <a href="https://www.tiktok.com/@helsinkithings">
          <MediaCard label="Tiktok" imageSrc="/about/about-tiktok.webp" imageAlt="a tiktok post with the title '4 things to do in Helsinki - week 25, april 2026'" />
        </a>
      </div>
      <div className={styles.mediaContainer}>
        <a href="https://payhip.com/helsinkithings">
          <MediaCard label="E-books" imageSrc="/about/about-ebook.webp" imageAlt="the cover of an e-book titled '100 things to do in Helsinki'" />
        </a>
      </div>
    </section>
  )
}

export default AboutExplore;