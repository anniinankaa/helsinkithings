import SplitContainer from '../../components/layout/SplitContainer';
import styles from './AboutHero.module.css';

function AboutHero() {
  const leftPane = (
    <div className={`${styles.leftPane} ${styles.pane}`}>
      <div>
        <h1 className="text-xl">A truly local guide sharing culture, places and stories that bring Helsinki to life.</h1>
      </div>
      <div className={styles.leftPaneBottom}>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/helsinkithings" className="outline-button" style={{justifyContent: "flex-start"}}>
            Instagram
          </a>
          <a href="https://www.tiktok.com/@helsinkithings" className="outline-button" style={{justifyContent: "flex-start"}}>
            Tiktok
          </a>
        </div>
        <div>
          <p>Helsinkithings offers cultural storytelling and community-driven marketing to create a lasting impact for your brand in the urban landscape.</p>
          <br/>
          <p>As your urban partner, we manage the entire lifecycle of a collaboration from scouting the unique narrative of your venue to producing high-engagement content.</p>
        </div>
      </div>
    </div>
  );
  
  const rightPane = (
    <div className={`${styles.imageContainer} ${styles.pane}`}>
      <img src="/about/about-hero.webp" alt="a café in the afternoon"></img>
    </div>
  )
  
  return (
    <SplitContainer left={leftPane} right={rightPane} />
  );
}

export default AboutHero;