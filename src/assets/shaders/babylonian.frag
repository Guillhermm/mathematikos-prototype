#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Noise function for stars
float noise(vec2 st) {
    return random(floor(st));
}

// Star field effect
float stars(vec2 st) {
    float brightness = smoothstep(0.8, 1.0, noise(st * 10.0));
    return brightness;
}

void main() {
    vec2 st = gl_FragCoord.xy / resolution.xy;

    // Earthy background color
    vec3 color = vec3(0.6, 0.4, 0.2); // Brown

    // Add stars to the background
    float starIntensity = stars(st * 5.0);
    color += vec3(1.0) * starIntensity;

    // Final output color
    gl_FragColor = vec4(color, 1.0);
}