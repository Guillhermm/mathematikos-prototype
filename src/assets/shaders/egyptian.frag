#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Noise function for hieroglyphs
float noise(vec2 st) {
    return random(floor(st));
}

// Hieroglyph pattern
float hieroglyphs(vec2 st) {
    float pattern = step(0.5, noise(st * 20.0)); // Simple pattern
    return pattern;
}

void main() {
    vec2 st = gl_FragCoord.xy / resolution.xy;

    // Sandy background color
    vec3 color = vec3(0.9, 0.8, 0.5); // Sandy beige

    // Add hieroglyphs to the background
    float hieroglyphIntensity = hieroglyphs(st * 10.0);
    color *= vec3(1.0 - hieroglyphIntensity); // Subtract pattern

    // Final output color
    gl_FragColor = vec4(color, 1.0);
}