import SingleContainer from "../../components/layout/SingleContainer";
import './HomeIntro.css';

function HomeIntro () {
    return (
        <SingleContainer>
            <h2>Your local guide for things to do in Helsinki 💌</h2>
            <br/>
            <p>Follow us on social media for weekly recommendations <br/> 
               and plenty more tips on things to do in Helsinki!</p>
            <br/>
            <div className="social-buttons">
                <a href="" className="outline-button">
                Instagram
                </a>

                <a href="" className="outline-button">
                TikTok
                </a>

                <a href="" className="outline-button">
                E-book
                </a>
            </div>
            <h2>Test what to do in Helsinki</h2>
        </SingleContainer>
    )
}

export default HomeIntro