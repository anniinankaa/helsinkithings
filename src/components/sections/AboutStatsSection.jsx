import SingleContainer from "../layout/SingleContainer";
import styles from "./AboutStatsSection.module.css";

function AboutStatsSection() {
  return (
    <SingleContainer>
      <h2>We want to bring people together - create connection and a sense of community.</h2>
      <div className={`${styles.statsContainer}`}>
        <div className={styles.statNumber}>
          <span className="text-xl">20k</span>
          <br/>
          <span className="text-ml">Followers</span>
        </div>
        <div className={styles.statNumber}>
          <span className="text-xl">192k</span>
          <br/>
          <span className="text-ml">Monthly Views</span>
        </div>
        <div className={styles.statNumber}>
          <span className="text-xl">46k</span>
          <br/>
          <span className="text-ml">Monthly Reach</span>
        </div>
        <div className={styles.statNumber}>
          <span className="text-xl">5 %</span>
          <br/>
          <span className="text-ml">Engagement Rate</span>
        </div>
      </div>
      <div className={styles.statsInfo}>
        <p>Our platform is a trusted gateway for local culture-seekers and curious visitors, specifically reaching the active 25–34-year-old demographic.</p>
        <p className="text-md">Instagram Insights, April 2026</p>
      </div>
    </SingleContainer>
  )
}


export default AboutStatsSection;