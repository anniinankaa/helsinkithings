import HomeTest from './HomeTestScreen.jsx';
import { useState } from 'react';
import TestResult from './TestResult.jsx';

function HomeTests () {
    const [results, setResults] = useState({});

    const resultfunc = (number, value) => {
    setResults(prev => {
        if (prev[number] === value) {
            const updated = { ...prev };
            delete updated[number];
            return updated;
        }

        return {
            ...prev,
            [number]: value
        };
    });  
    console.log(results);
};

    return (
    <div>
        <HomeTest id='1' onSelect={resultfunc} color='#A7D1F4' borderColor='#E8D87A' header='Pick your vibe' 
        images={[{ src: "/testpics/crowded.png", label: "Crowded", alt: 'people outside'},
            { src: "/testpics/relaxing.png", label: "Relaxing", alt:'inside an art gallery'},
            { src: "/testpics/natural.png", label: "Natural" , alt: 'lakeview'}]}/>
            
        <HomeTest id='2' onSelect={resultfunc} color='#9EB786' borderColor='#52709F' header='Which do you prefer?'
        images={[{ src: "/testpics/inside.png", label: "Inside", alt: 'inside a bookstore'},
            { src: "/testpics/outside.png", label: "Outside", alt:'outside a mansion'}]}/>

        <HomeTest id='3'onSelect={resultfunc} color='#FBB8AF' borderColor='#9EB786' header='Alone or together?'
        images={[{ src: "/testpics/me.png", label: "Me, myself and I", alt: 'person alone'},
            { src: "/testpics/group.png", label: "Group fun", alt:'discoball'},
            { src: "/testpics/date.png", label: "Date" , alt: 'two drinks on table'}]}/>

        <HomeTest id='4'onSelect={resultfunc} color='#E8D87A' borderColor='#A7D1F4' header='Are you a/na'
        images={[{ src: "/testpics/early.png", label: "Early bird", alt: 'building in the morning'},
            { src: "/testpics/night.png", label: "Night owl", alt:'Amos rex at night'}]}/>

        <HomeTest id='5'onSelect={resultfunc} color='#52709F' borderColor='#FBB8AF' header='What are you most into?'
        images={[{ src: "/testpics/food.png", label: "Food", alt: 'meal'},
            { src: "/testpics/art.png", label: "Art", alt:'paintings'},
            { src: "/testpics/history.png", label: "History", alt: 'history museum'},
            { src: "/testpics/nature.png", label: "Nature", alt:'botanical garden'}]}/>

        <TestResult/>
    </div>
    )
}

export default HomeTests