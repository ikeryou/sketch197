precision highp float;

uniform float show;
uniform float hide;
uniform float yure;
uniform vec3 color;

void main(void) {
  float a = 1.0 - yure;
  gl_FragColor = vec4(color, a);
}
