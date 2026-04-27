import './HomePics.css'

function HomePics () {
  return (
     <div className="homepics-container">
        <div className='row-container' id='all'>
            <div className='column-container'>
                <div className='group-container' id='pics1234'>
                    <img src='/homefirstpics/pic1.png' alt='museum pic' id='pic1'></img>
                    <div className='group-container' id='pics234'>
                        <img src='/homefirstpics/pic2.png' alt='street pic' id='pic2'></img>
                        <img src='/homefirstpics/pic3.png' alt='shell pic' id='pic3'></img>
                        <img src='/homefirstpics/pic4.png' alt='pizza pic' id='pic4'></img>
                        <h1 id='title'>helsinkithings</h1>
                    </div>
                </div> 
                <div className='group-container' id='pics567'>
                    <img src='/homefirstpics/pic5.png' alt='street pic' id='pic5'></img>
                    <img src='/homefirstpics/pic6.png' alt='event pic' id='pic6'></img>
                    <img src='/homefirstpics/pic7.png' alt='lake pic' id='pic7'></img>
                </div>
            </div>
            <div className='group-container' id='pics8910'>
                <img src='/homefirstpics/pic8.png' alt='flower pic' id='pic8'></img>
                <img src='/homefirstpics/pic9.png' alt='blue gallery pic' id='pic9'></img>
                <img src='/homefirstpics/pic10.png' alt='sandwhich matcha pic' id='pic10'></img>
            </div>
        </div>
    </div> 
  );
}

export default HomePics;