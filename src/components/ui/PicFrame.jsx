import styles from './PicFrame.module.css';

function PicFrame({ label, imageSrc, imageAlt }) {
  return (
    <div className={styles.picFrame}>
      <img src={imageSrc} alt={imageAlt} />
      <h3>{label}</h3>
    </div>
  )
}

export default PicFrame;