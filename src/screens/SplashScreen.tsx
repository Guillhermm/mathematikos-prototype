import React, { useEffect } from 'react';
import RomanSymbol from '../components/SVG/RomanSymbol';
import BabylonianSymbol from '../components/SVG/BabylonianSymbol';
import EgyptianSymbol from '../components/SVG/EgyptianSymbol';
import GreekSymbol from '../components/SVG/GreekSymbol';
import '../styles/splash-screen.css';

type SplashScreenProps = {
  onComplete: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onComplete();
  //   // Time Splash Screen remains visible.
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, [onComplete]);

  return (
    <div className="splash-screen" onClick={onComplete}>
      <h1 className="splash-title">Welcome to Mathematikos</h1>
      <p className="splash-instructions">Learn the ancient ways of numbers</p>
      <RomanSymbol value={2024} className="splash-svg symbol" />
      <BabylonianSymbol value={2013} className="splash-svg symbol" />
      <EgyptianSymbol value={1111111} className="splash-svg symbol-medium" />
      <GreekSymbol value={2018} className="splash-svg symbol-large" />
    </div>
  );
};

export default SplashScreen;
