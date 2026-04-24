import './homePage.css'

function HomePage () {
  return (
     <div className="homepics-container">
       <div className="vert-container">

        <div className="horz-container" id="pics1234567">

          <div className='vert-container' id="pics1234">
            <img src='/homefirstpics/pic1.png' alt='exhibition pic' id='pic1'></img>

            <div className='horz-container' id='pics234'>
              <img src='/homefirstpics/pic2.png' alt='street pic' id='pic2'></img>

              <div className='vert-container' id='pics34'>
                <img src='/homefirstpics/pic3.png' alt='shell pic' id='pic3'></img>
                <img src='/homefirstpics/pic4.png' alt='pizza pic' id='pic4'></img>
              </div>

              <h1>helsinkithings</h1>
            </div>
          </div>

          <div className='vert-container' id='pics567'>
            <img src='/homefirstpics/pic5.png' alt='street pic' id='pic5'></img>
            <img src='/homefirstpics/pic6.png' alt='event pic' id='pic6'></img>
            <img src='/homefirstpics/pic7.png' alt='lake pic' id='pic7'></img>

          </div>

          <div className="horz-container">
            <img src='/homefirstpics/pic8.png' alt='street pic' id='pic8'></img>
            <img src='/homefirstpics/pic9.png' alt='event pic' id='pic9'></img>
            <img src='/homefirstpics/pic10.png' alt='lake pic' id='pic10'></img>
          </div> 
        </div>  

        
       </div>
     </div> 
  )
}

export default HomePage;