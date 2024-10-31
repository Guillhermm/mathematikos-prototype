import React from 'react';
import { useShaderBackground } from '../../hooks/useShaderBackground';

interface ThemeCardProps {
  image: JSX.Element;
  name: string;
  shader: string;
  onClick: any;
}

const ThemeCard = ({ image, name, shader, onClick }: ThemeCardProps) => {
  const { backgroundImage } = useShaderBackground(shader);

  return (
    <div
      className="flex flex-col items-center justify-center border-4 border-gray-800 shadow-lg bg-gray-200 w-40 h-40 m-4"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-20 h-20">{image}</div>
      <p className="text-lg font-bold mt-2">{name}</p>
    </div>
  );
};

export default ThemeCard;
