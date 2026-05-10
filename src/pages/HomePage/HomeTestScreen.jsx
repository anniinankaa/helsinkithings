import './HomeTest.css';
import PicFrame from '../../components/ui/PicFrame';
import {useState, useEffect} from 'react';

function HomeTest ({iD, onSelect, color, borderColor, header, images = []}) {

    const [isSelected, setSelected] = useState(null);

    const handleClick = (value) => {
        setSelected(prev => (prev === value ? null : value));
        onSelect(iD, value);
    };

    const pictures = images.map((pic) => (
       <PicFrame lineColor={borderColor} imageSrc={pic.src} 
       label= {pic.label} imageAlt={pic.alt} 
       isActive={isSelected === pic.label}
       onClick={() => handleClick(pic.label)}
       key={pic.label}
       />
    ));

    return (
        <div className='test-screen' style={{"--background": color}}>
            <h2>{header}</h2>
            <div className='image-container'>
                {pictures}
            </div>
            <div className={`preference-button text-ml ${isSelected === 'none' ? 'preference-active' : ''}`} onClick={() => handleClick('none')}>
                No preference
            </div>
        </div>
    )
}

export default HomeTest