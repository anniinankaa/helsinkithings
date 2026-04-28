import './HomeTest.css';
import PicFrame from '../../components/ui/PicFrame';

function HomeTest ({color, header, images = []}) {
    const pictures = images.map((pic) => (
       <PicFrame imageSrc={pic.src} label= {pic.label} alt={pic.alt}/>
    ));

    return (
        <div className='test-screen' style={{"--background": color}}>
            <h2>{header}</h2>
            <div className='image-container'>
                {pictures}
            </div>
            <div className='preference-button'>
                No preference
            </div>
        </div>
    )
}

export default HomeTest