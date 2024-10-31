import React from 'react';
import ThemeCard from './ThemeCard';
import BabylonianSymbol from '../SVG/BabylonianSymbol';
import EgyptianSymbol from '../SVG/EgyptianSymbol';
import GreekSymbol from '../SVG/GreekSymbol';
import RomanSymbol from '../SVG/RomanSymbol';
import romanShader from '../../assets/shaders/roman.frag';
import babylonianShader from '../../assets/shaders/babylonian.frag';
import egyptianShader from '../../assets/shaders/egyptian.frag';
import greekShader from '../../assets/shaders/greek.frag';

const ThemeSelection = ({ onThemeSelect }: { onThemeSelect: any }) => {
  const themes = [
    {
      image: <RomanSymbol className="symbol-large" value={1} />,
      name: 'Roman',
      shaderSource: romanShader,
    },
    {
      image: <BabylonianSymbol className="symbol-medium" value={2} />,
      name: 'Babylonian',
      shaderSource: babylonianShader,
    },
    {
      image: <EgyptianSymbol className="symbol-medium" value={3} />,
      name: 'Egyptian',
      shaderSource: egyptianShader,
    },
    {
      image: <GreekSymbol className="symbol" value={4} />,
      name: 'Greek Attic',
      shaderSource: greekShader,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {themes.map((theme, index) => (
        <ThemeCard
          key={index}
          image={theme.image}
          name={theme.name}
          shader={theme.shaderSource}
          onClick={() => onThemeSelect(theme.name)}
        />
      ))}
    </div>
  );
};

export default ThemeSelection;
