import SidewaysSection from '../../components/layout/SidewaysSection';
import styles from './AboutBio.module.css';

function AboutBio() {
  const content = (
    <>
      <p>
        Helsinkithings is a Helsinki-based collective uncovering the city of Helsinki. We curate and share the city’s most interesting evets, hidden gems, and local culture for our community on Instagram and Tiktok.
      </p>
      <br/>
      <p>
        Our mission is to highlight community-focused, low-threshold and sustainable happenings and places for both locals and visitors. We want to bring people together –create connection and a sense of community.
      </p>
    </>
  )

  return (
    <SidewaysSection header="About Us" content={content} />
  );
}

export default AboutBio;