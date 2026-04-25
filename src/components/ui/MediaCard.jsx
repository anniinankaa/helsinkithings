import styles from './MediaCard.module.css';

function MediaCard({ label, imageSrc, imageAlt }) {
  return (
    <div className={styles.mediaCard}>
      <h3>{label}</h3>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )
}

export default MediaCard;