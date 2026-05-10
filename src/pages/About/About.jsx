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
import { useEffect } from 'react';

function AboutPage () {

  useEffect(() => {
    document.title = "Helsinkithings | About";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn more about the Helsinkithings team and the story behind our project.");
    };

    return () => {
      if (metaDescription) {
        metaDescription.setAttribute("content", "Discover activities in Helsinki. Take the test and find out what to do!");
      };
    };
  }, []);

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