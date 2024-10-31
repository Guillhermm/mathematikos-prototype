#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Noise function for marble veins
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Marble texture pattern with veins
vec3 marble(vec2 st) {
    float veins = sin(st.y * 12.0 + noise(st * 10.0) * 3.0) * 0.5 + 0.5;
    vec3 color1 = vec3(0.9, 0.8, 0.7); // light marble
    vec3 color2 = vec3(0.8, 0.7, 0.6); // darker veins
    return mix(color1, color2, veins);
}

// Gold flecks overlay
vec3 addGold(vec2 st) {
    float goldNoise = smoothstep(0.8, 1.0, noise(st * 50.0 + time * 0.5));
    vec3 goldColor = vec3(0.9, 0.75, 0.3);
    return goldColor * goldNoise;
}

void main() {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    st.x *= resolution.x / resolution.y;

    // Generate the marble texture
    vec3 marbleColor = marble(st * 3.0);

    // Overlay the gold flecks
    vec3 goldLayer = addGold(st);

    // Combine marble and gold layers
    vec3 color = marbleColor + goldLayer;

    // Add aging effects with noise and slight color variations
    color -= noise(st * 5.0) * 0.05;

    // Final output color
    gl_FragColor = vec4(color, 1.0);
}