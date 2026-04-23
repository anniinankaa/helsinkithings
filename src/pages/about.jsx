import './about.css'

function AboutPage () {
  return (
    <div className="about-hero split-container">
      <div className="left-panel">
        <h1>A truly local guide sharing culture, places and stories that bring Helsinki to life.</h1>
        <div className="socials">
          <a href="" className="outline-button" style={{justifyContent: "flex-start"}}>
            Instagram
          </a>
          <a href="" className="outline-button" style={{justifyContent: "flex-start"}}>
            Tiktok
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src="/about/hero.png"></img>
      </div>
    </div>
  )
}

export default AboutPage;