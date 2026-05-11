import HomeTest from './HomeTestScreen.jsx';
import { useState, useRef } from 'react';
import TestResult from './TestResult.jsx';

function HomeTests () {
    const [results, setResults] = useState({});
    const questionRefs = useRef({});

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

      // Scrollaa seuraavaan kysymykseen
      const nextQuestion = number + 1;
      if (questionRefs.current[nextQuestion]) {
        setTimeout(() => {
          questionRefs.current[nextQuestion].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };

    return (
    <div>
        <div ref={(el) => questionRefs.current[1] = el}>
          <HomeTest iD={1} onSelect={resultfunc} color='#A7D1F4' borderColor='#E8D87A' header='Pick your vibe' 
          images={[{ src: "/testpics/crowded.png", label: "Crowded", alt: 'people outside on a sunny day'},
              { src: "/testpics/relaxing.png", label: "Relaxing", alt:'inside an art gallery with artworks on the walls'},
              { src: "/testpics/natural.png", label: "Natural" , alt: 'a lake with boats on the shore on a sunny day'}]}/>
        </div>
            
        <div ref={(el) => questionRefs.current[2] = el}>
          <HomeTest iD={2} onSelect={resultfunc} color='#9EB786' borderColor='#52709F' header='Which do you prefer?'
          images={[{ src: "/testpics/inside.png", label: "Inside", alt: 'inside a bookstore'},
              { src: "/testpics/outside.png", label: "Outside", alt:'outside a mansion with trees and flowers in the foreground'}]}/>
        </div>

        <div ref={(el) => questionRefs.current[3] = el}>
          <HomeTest iD={3} onSelect={resultfunc} color='#FBB8AF' borderColor='#9EB786' header='Alone or together?'
          images={[{ src: "/testpics/me.png", label: "Me, myself and I", alt: 'a person walking alone'},
              { src: "/testpics/group.png", label: "Group fun", alt:'a hanging discoball with atmospheric lighting'},
              { src: "/testpics/date.png", label: "Date" , alt: 'two drinks on a table outside on a sunny day'}]}/>
        </div>

        <div ref={(el) => questionRefs.current[4] = el}>
          <HomeTest iD={4} onSelect={resultfunc} color='#E8D87A' borderColor='#A7D1F4' header='Are you a/an'
          images={[{ src: "/testpics/early.png", label: "Early bird", alt: 'a building in a winter morning'},
              { src: "/testpics/night.png", label: "Night owl", alt:'Amos rex at night'}]}/>
        </div>

        <div ref={(el) => questionRefs.current[5] = el} id="test-q5">
          <HomeTest iD={5} onSelect={resultfunc} color='#52709F' borderColor='#FBB8AF' header='What are you most into?'
          images={[{ src: "/testpics/food.png", label: "Food", alt: 'meals and drinks for two people on a restaurant table'},
              { src: "/testpics/art.png", label: "Art", alt:'paintings and statues in an art gallery'},
              { src: "/testpics/history.png", label: "History", alt: 'the grand foyer of a museum'},
              { src: "/testpics/nature.png", label: "Nature", alt:'inside a botanical garden'}]}/>
        </div>
        <div ref={(el) => questionRefs.current[6] = el}>
          <TestResult results={Object.values(results)}/>
        </div>
    </div> 
    )
}

export default HomeTests