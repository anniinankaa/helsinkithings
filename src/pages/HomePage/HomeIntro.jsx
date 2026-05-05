import SingleContainer from "../../components/layout/SingleContainer";
import './HomeIntro.css';

function HomeIntro () {
    return (
        <SingleContainer>
            <div className="home-intro-content">
                <h2 className="intro-heading">Your local guide for things to do in Helsinki 💌</h2>
                
                <p className="intro-text">
                    Follow us on social media for weekly recommendations 
                    and plenty more tips on things to do in Helsinki!
                </p>

                <div className="social-buttons">
                    <a href="https://www.instagram.com/helsinkithings" className="outline-button">
                        Instagram
                    </a>

                    <a href="https://www.tiktok.com/@helsinkithings" className="outline-button">
                        TikTok
                    </a>

                    <a href="https://payhip.com/helsinkithings" className="outline-button">
                        E-book
                    </a>
                </div>
            </div>
            <h2 className="test-heading">Test what to do in Helsinki</h2>
        </SingleContainer>
    )
}
export default HomeIntro