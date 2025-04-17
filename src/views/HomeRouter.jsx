import { useEffect, useState } from 'react';
import Home from './Home';
import HomeMobile from './HomeMobile';

const HomeRouter = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <HomeMobile /> : <Home />;
};

export default HomeRouter;
