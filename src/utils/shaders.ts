export const createShader = (
  gl: WebGLRenderingContext,
  source: string,
  type: number
): WebGLShader | null => {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('An error occurred compiling the shaders:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

// Initialize shader program
export const initShaderProgram = (gl: WebGLRenderingContext, shaderSource: string) => {
  const vertexShaderSource = `
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
  `;

  const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, shaderSource, gl.FRAGMENT_SHADER);
  const program = gl.createProgram();

  if (vertexShader && fragmentShader) {
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program:', gl.getProgramInfoLog(program));
      return null;
    }
  }

  return program;
};

export const render = (gl: WebGLRenderingContext, program: WebGLProgram) => {
  const vertices = new Float32Array([
    -1, -1, // Bottom-left
     1, -1, // Bottom-right
    -1,  1, // Top-left
     1,  1, // Top-right
  ]);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  // Draw the rectangle covering the entire canvas
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};