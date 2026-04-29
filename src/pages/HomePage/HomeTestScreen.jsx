import './HomeTest.css';
import PicFrame from '../../components/ui/PicFrame';
import {useState} from 'react';

function HomeTest ({color, borderColor, header, images = []}) {

    const [isSelected, setSelected] = useState(null);

    const pictures = images.map((pic, i) => (
       <PicFrame lineColor={borderColor} imageSrc={pic.src} 
       label= {pic.label} alt={pic.alt} 
       isActive={isSelected === i}
       onClick={() => setSelected(prev => (prev == i ? null : i))}/>
    ));

    return (
        <div className='test-screen' style={{"--background": color}}>
            <h2>{header}</h2>
            <div className='image-container'>
                {pictures}
            </div>
            <div className={`preference-button ${isSelected === 'none' ? 'preference-active' : ''}`} onClick={() =>
                setSelected(prev => (prev === 'none' ? null : 'none'))}>
                No preference
            </div>
        </div>
    )
}

export default HomeTest