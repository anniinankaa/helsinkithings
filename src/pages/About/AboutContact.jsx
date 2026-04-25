import styles from './AboutContact.module.css';

function AboutContact() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contactCard}>
          <h2>Let’s turn your place into the next local favorite!</h2>
          <div className={styles.contactCardBottom}>
            <div>
              <p>
                As your urban partner, we manage the entire lifecycle of a collaboration—from scouting the unique narrative of your venue to delivering the high-engagement content that resonates with our audience.
              </p>
            </div>
            <a href="mailto:helsinkithings@gmail.com" className={`${styles.filledButton} text-lg`}>• contact us</a>
          </div>
        </div>
        <img src="about/about-contact.webp" alt="people enjoying a summer evening on a diner terrace under warm streetlamps, with flower pots in the foreground"/>
      </div>
    </div>
  )
}

export default AboutContact;