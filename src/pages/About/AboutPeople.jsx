import SidewaysSection from '../../components/layout/SidewaysSection';
import SplitContainer from '../../components/layout/SplitContainer';
import styles from './AboutPeople.module.css';

function AboutPeople() {
  const content = (
    <>
      <p>
        <b>Helsinkithings</b> is run by us – two sisters with a shared passion for our home city and a drive to build community. We combine our different professional backgrounds to curate the best of Helsinki for you.
      </p>
      <br/><br/>
      <p>
        <b>Annastiina</b> holds a Master’s degree in Business and works as a freelance marketing professional with a strong interest in culture, art and storytelling.
      </p>
      <br/>
      <a href="https://www.linkedin.com/in/annastiina-karvanen/">
        LinkedIn Annastiina Karvanen
      </a>
      <br/><br/><br/>
      <p>
        <b>Anniina</b> has a multidisciplinary academic background in psychology and engineering, with a focus on service design, and creative, community-supporting solutions.
      </p>
      <br/>
      <a href="https://www.linkedin.com/in/anniina-karvanen/">
        LinkedIn Anniina Karvanen
      </a>
      <br/>
    </>
  )
  
  const collage = (
    <div className={styles.collage}>
      <img src="/about/about-sisters.webp" />
      <img src="/about/about-museum.webp" />
    </div>
  )

  return (
    <SplitContainer 
      left={
        <SidewaysSection header="Who are we?" content={content} />
      }
      right={collage}
      ratio="1.8fr 1fr"
    />
  );
}

export default AboutPeople;