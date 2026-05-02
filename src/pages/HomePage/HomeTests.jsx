import HomeTest from './HomeTestScreen.jsx';

function HomeTests () {
    const [results, setResults] = useState([])
    return (
    <div>
        <HomeTest color='#A7D1F4' borderColor='#E8D87A' header='Pick your vibe' 
        images={[{ src: "/testpics/crowded.png", label: "Crowded", alt: 'people outside'},
            { src: "/testpics/relaxing.png", label: "Relaxing", alt:'inside an art gallery'},
            { src: "/testpics/natural.png", label: "Natural" , alt: 'lakeview'}]}/>
        <HomeTest color='#9EB786' borderColor='#52709F' header='Which do you prefer?'
        images={[{ src: "/testpics/inside.png", label: "Inside", alt: 'inside a bookstore'},
            { src: "/testpics/outside.png", label: "Outside", alt:'outside a mansion'}]}/>
        <HomeTest color='#FBB8AF' borderColor='#9EB786' header='Alone or together?'
        images={[{ src: "/testpics/me.png", label: "Me, myself and I", alt: 'person alone'},
            { src: "/testpics/group.png", label: "Group fun", alt:'discoball'},
            { src: "/testpics/date.png", label: "Date" , alt: 'two drinks on table'}]}/>
        <HomeTest color='#E8D87A' borderColor='#A7D1F4' header='Are you a/na'
        images={[{ src: "/testpics/early.png", label: "Early bird", alt: 'building in the morning'},
            { src: "/testpics/night.png", label: "Night owl", alt:'Amos rex at night'}]}/>
        <HomeTest color='#52709F' borderColor='#FBB8AF' header='What are you most into?'
        images={[{ src: "/testpics/food.png", label: "Food", alt: 'meal'},
            { src: "/testpics/art.png", label: "Art", alt:'paintings'},
            { src: "/testpics/history.png", label: "History", alt: 'history museum'},
            { src: "/testpics/nature.png", label: "Nature", alt:'botanical garden'}]}/>
    </div>
    )
}

export default HomeTests