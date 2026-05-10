import HomePics from './HomePics.jsx';
import HomeIntro from './HomeIntro.jsx';
import HomeTests from './HomeTests.jsx';
import { useEffect } from 'react';

function HomePage () {

  useEffect(() => {
    document.title = "Helsinkithings | Home"
  }, []);

  return ( 
   <div>
      <HomePics/>
      <HomeIntro/> 
      <HomeTests/>
  </div>
);

}

export default HomePage;