import styles from './Footer.module.css';

function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.leftContainer}>
          <h3>Social Media</h3>
          <br/>
          <a href="https://www.instagram.com/helsinkithings">Instagram</a>
          <br/>
          <a href="https://www.tiktok.com/@helsinkithings">Tiktok</a>
        </div>
        <div className={styles.middleContainer}>
          <h3>E-book</h3>
          <br/>
          <a href="https://payhip.com/helsinkithings">Payhip</a>
        </div>
        <div className={styles.rightContainer}>
          <h3>Contact Us</h3>
          <br/>
          <a href="mailto:helsinkithings@gmail.com">helsinkithings@gmail.com</a>
        </div>
      </div>
      <div className={styles.lower}>
        <span className="text-md">&copy; {currentYear} Helsinkithings</span>
      </div>
    </footer>
  )

}

export default Footer;