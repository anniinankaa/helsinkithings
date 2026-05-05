import './TestResult.css';
import {events} from './Events.js';
import SidewaysSection from '../../components/layout/SidewaysSection';
import {useState} from 'react';

function TestResult ({results}) {
    const cleaned = results.filter(s => s !== 'none');

    const options = events.filter(p => cleaned.every(k => p.tags.includes(k)));

    const [currentIndex, setIndex] = useState(0);

    const nextOption = () => {
        setIndex((prev) => prev == options.length - 1 ? 0 : prev + 1); 
    };

    const prevOption = () => {
        setIndex((prev) => prev == 0 ? options.length - 1 : prev - 1);
    };

    return (
        <div className='result-screen'>
            <h2>Our suggestions based on your interests</h2>
            {options.length > 0 ? 
            <div className='options-container'>{options.map((k, i) => 
                <div className='option' style={currentIndex !== i ? {display: "none"}: null}>
                    <h3>{k.name}</h3>
                    <div className='text-box'>
                        <span>{k.description} <br/><br/> 
                        {k.info.address} <br/> 
                        <a href={k.info.website} target="_blank">{k.info.website} </a><br/> 
                        <a href={`https://www.instagram.com/${k.info.ighandle}`} target="_blank">@{k.info.ighandle}</a></span>
                    </div>
                </div>)}
                <button className='right-button'onClick={nextOption}><img src='/arrows/rightarrow.png' alt='right arrow'/></button>
                <button className='left-button'onClick={prevOption}><img src='/arrows/leftarrow.png' alt='left arrow'/></button>
                
            </div>
            : <div className='option'>
                <SidewaysSection header='No suggestions'/>
            </div> }
            <h3>More things to do and see in Helsinki</h3>
            <div className='buttons'>
                <a href='' className='more-button'>
                    <p>E-book by Helsinkithings</p>
                </a>
                <a href='' className='more-button'>
                    <p>Instagram</p>
                </a>
                <a href='' className='more-button'>
                    <p>TikTok</p>
                </a>
            </div>
        </div>
    )
}

export default TestResult