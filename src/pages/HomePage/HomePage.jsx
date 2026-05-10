import HomePics from './HomePics.jsx';
import HomeIntro from './HomeIntro.jsx';
import HomeTests from './HomeTests.jsx';
import { useEffect } from 'react';

function HomePage () {

  useEffect(() => {
    document.title = "Helsinkithings | Home"
  }, []);

  return ( 
   <main>
      <HomePics/>
      <HomeIntro/> 
      <HomeTests/>
    </main>
);

}

export default HomePage;