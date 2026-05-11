import './TestResult.css';
import {events} from './Events.js';
import SidewaysSection from '../../components/layout/SidewaysSection';
import {useState} from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function TestResult ({results}) {
    const cleaned = results.filter(s => s !== 'none');

    // Pisteytetään ja järjestetään tapahtumat sen mukaan, kuinka monta matchia niillä on
    const scoredEvents = events.map(event => {
        const score = cleaned.filter(tag => event.tags.includes(tag)).length;
        return {...event, score};
    }).sort((a, b) => b.score - a.score);

    const options = scoredEvents.filter(p => p.score > 0).slice(0, 5); // Näytä vain top 5

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
                <div className='option' style={currentIndex !== i ? {display: "none"}: null} key={i}>
                    <h3>{k.name}</h3>
                    <div className='text-box'>
                        <span>{k.description} <br/><br/> 
                        {k.info.address} <br/> 
                        <a href={k.info.website} target="_blank" rel="noopener noreferrer">{k.info.website} </a><br/> 
                        <a href={`https://www.instagram.com/${k.info.ighandle}`} target="_blank" rel="noopener noreferrer">@{k.info.ighandle}</a></span>
                    </div>
                <span>{currentIndex + 1} / {options.length}</span>
                </div>)}
                <button className='right-button'onClick={nextOption} aria-label="Next recommendation"><ChevronRight size={64}/></button>
                <button className='left-button'onClick={prevOption} aria-label="Previous recommendation"><ChevronLeft size={64} /></button>
            </div>
            :   <div className='option'>
                <SidewaysSection header='No suggestions'/>
                </div> 
                }
            <h3>More things to do and see in Helsinki</h3>
            <div className='buttons'>
                <a href='https://payhip.com/helsinkithings' className='more-button' target="_blank" rel="noopener noreferrer">
                    <p>E-book by Helsinkithings</p>
                </a>
                <a href='https://www.instagram.com/helsinkithings' className='more-button' target="_blank" rel="noopener noreferrer">
                    <p>Instagram</p>
                </a>
                <a href='https://www.tiktok.com/@helsinkithings' className='more-button' target="_blank" rel="noopener noreferrer">
                    <p>TikTok</p>
                </a>
            </div>
        </div>
    )
}

export default TestResult