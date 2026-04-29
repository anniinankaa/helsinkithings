import './HomeTest.css';
import PicFrame from '../../components/ui/PicFrame';
import {useState} from 'react';

function HomeTest ({color, header, images = []}) {

    const [isActive, setIsActive] = useState(false);

    const pictures = images.map((pic) => (
       <PicFrame imageSrc={pic.src} label= {pic.label} alt={pic.alt}/>
    ));

    return (
        <div className='test-screen' style={{"--background": color}}>
            <h2>{header}</h2>
            <div className='image-container'>
                {pictures}
            </div>
            <div className={`preference-button ${isActive ? 'preference-active' : ''}`} onClick={() => setIsActive(!isActive)}>
                No preference
            </div>
        </div>
    )
}

export default HomeTest