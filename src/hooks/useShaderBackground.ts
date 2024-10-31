import { useEffect, useState } from 'react';
import { initShaderProgram, render } from '../utils/shaders';

export const useShaderBackground = (shader: string) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const gl = canvas.getContext('webgl');

    if (gl) {
      const program = initShaderProgram(gl, shader);
      if (program) {
        gl.useProgram(program);

        const resolutionLocation = gl.getUniformLocation(program, 'resolution');
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

        // Call render function to draw to the canvas
        render(gl, program);

        // Convert canvas to data URL for background
        setBackgroundImage(canvas.toDataURL());
      }
    }
  }, [shader]);

  return { backgroundImage };
};
