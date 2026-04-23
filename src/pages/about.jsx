import './about.css'

function AboutPage () {
  return (
    <section className="about-hero split-container">
      <div className="left-panel">
        <div className="left-panel-top">
          <h1>A truly local guide sharing culture, places and stories that bring Helsinki to life.</h1>
        </div>
        <div className="left-panel-bottom">
          <div className="socials">
            <a href="" className="outline-button" style={{justifyContent: "flex-start"}}>
              Instagram
            </a>
            <a href="" className="outline-button" style={{justifyContent: "flex-start"}}>
              Tiktok
            </a>
          </div>
          <div>
            <p>Helsinkithings offers cultural storytelling and community-driven marketing to create a lasting impact for your brand in the urban landscape.</p>
            <br/>
            <p>As your urban partner, we manage the entire lifecycle of a collaboration from scouting the unique narrative of your venue to producing high-engagement content.</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/about/hero.png" alt="a café with atmospheric lighting"></img>
      </div>
    </section>
  )
}

export default AboutPage;