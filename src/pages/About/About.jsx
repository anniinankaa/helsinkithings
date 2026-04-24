import SingleContainer from '../../components/layout/SingleContainer';
import SplitContainer from '../../components/layout/SplitContainer';
import AboutBio from './AboutBio';
import AboutHero from './AboutHero';
import AboutStats from './AboutStats';
import AboutStory from './AboutStory';
import AboutCollage from './AboutCollage';
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
        ratio="1.5fr 1fr"
      />
    </div>
  )
}

export default AboutPage;