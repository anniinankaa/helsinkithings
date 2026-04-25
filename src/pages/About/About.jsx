import SplitContainer from '../../components/layout/SplitContainer';
import AboutBio from './AboutBio';
import AboutHero from './AboutHero';
import AboutStats from './AboutStats';
import AboutStory from './AboutStory';
import AboutCollage from './AboutCollage';
import AboutExplore from './AboutExplore';
import AboutPeople from './AboutPeople';
import AboutContact from './AboutContact';
import './about.css'

function AboutPage () {
  return (
    <div>
      <AboutHero />
      <AboutStats />
      <SplitContainer 
        left={
          <>
            <AboutBio/>
            <AboutStory/>
          </>
        } 
        right={<AboutCollage />}
        ratio="1.2fr 1fr"
      />
      <AboutExplore />
      <AboutPeople />
      <AboutContact />
    </div>
  )
}

export default AboutPage;