import './TestResult.css';
import {events} from './Events.js';
import SidewaysSection from '../../components/layout/SidewaysSection';

function TestResult ({results}) {
    const cleaned = results.filter(s => s !== 'none');

    const options = events.filter(p => cleaned.every(k => p.tags.includes(k)));

    return (
        <div className='result-screen'>
            <h2>Our suggestions based on your interests</h2>
            {options.length > 0 ? 
            <div className='options-container'>{options.map(k => 
                <div className='option'>
                    <h3>{k.name}</h3>
                    <div className='text-box'>
                        <span>{k.description} <br/><br/> 
                        {k.info.address} <br/> 
                        <a href=''>{k.info.website} </a><br/> 
                        <a href=''>{k.info.ighandle}</a> </span>
                    </div>
                </div>)}

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