import styles from './PicFrame.module.css';
import {useState} from 'react'; 

function PicFrame({ label, imageSrc, imageAlt }) {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? styles.active : styles.picFrame} onClick={() => setIsActive(!isActive)}>
      <img src={imageSrc} alt={imageAlt}/>
      <h3>{label}</h3>
    </div>
  )
}

export default PicFrame;