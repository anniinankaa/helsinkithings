import SidewaysSection from '../../components/layout/SidewaysSection';
import styles from './AboutStory.module.css';

function AboutStory() {
  const content = (
    <>
      <p>
        It all began in 2024 with a simple curiosity and a lot of love for the city we call home. We wanted to look beyond the surface and share the Helsinki we have come to know as locals.
      </p>
      <br/>
      <p>
        Helsinkithings is our invitation for you to explore the soul of the city with us. Every tip we share is a personal recommendation: a piece of the city that makes Helsinki feel like home. In our work you’ll find carefully curated local gems, fun events and the places we truly love. Hope you love them too!
      </p>
    </>
  )

  return (
    <SidewaysSection header="Our Story" content={content} />
  );
}

export default AboutStory;