import styles from './PicFrame.module.css';
import {useState} from 'react'; 

function PicFrame({lineColor, label, imageSrc, imageAlt, isActive, onClick}) {

  return (
    <div className={isActive ? styles.active : styles.picFrame} 
    style={{"--border": lineColor}} 
    onClick={onClick} 
    role="button" 
    tabIndex="0"
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    }}>
      <img src={imageSrc} alt={imageAlt} draggable={false}/>
      <h3>{label}</h3>
    </div>
  )
}

export default PicFrame;