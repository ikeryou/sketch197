#include ./libs/2d;

precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

uniform float size;
uniform float time;
uniform float yure;
uniform float show;
uniform float hide;

attribute vec3 position;
attribute vec3 prevPosition;
attribute vec3 nextPosition;
attribute vec3 info;

float map(float value, float beforeMin, float beforeMax, float afterMin, float afterMax) {
  return afterMin + (afterMax - afterMin) * ((value - beforeMin) / (beforeMax - beforeMin));
}

vec3 rotate(vec3 p, float angle, vec3 axis){
    vec3 a = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float r = 1.0 - c;
    mat3 m = mat3(
        a.x * a.x * r + c,
        a.y * a.x * r + a.z * s,
        a.z * a.x * r - a.y * s,
        a.x * a.y * r - a.z * s,
        a.y * a.y * r + c,
        a.z * a.y * r + a.x * s,
        a.x * a.z * r + a.y * s,
        a.y * a.z * r - a.x * s,
        a.z * a.z * r + c
    );
    return m * p;
}

void main(){
  vec3 p = position;
  vec3 prevP = prevPosition;
  vec3 nextP = nextPosition;

  // vec2 t = (time * 0.01 + p.xy * 0.001);
  // float n2 = snoise(t) * 100.0;
  float n1 = time * 0.1 + info.y * 0.05;

  p.x = mix(prevP.x, p.x, show);
  p.y = mix(prevP.y, p.y, show);

  p.x = mix(p.x, nextP.x, hide);
  p.y = mix(p.y, nextP.y, hide);

  float radius = (2.0 * info.y) * 0.01;
  p.z += (-radius * yure) + sin(n1) * radius * yure;
  p.x += cos(n1) * radius * yure;


  // p.y += cos(n1 * 2.0) * radius * yure * 0.02;
  // p.y *= mix(0.2, 1.0, 1.0 - yure);

  // p = rotate(p, (move.x * 0.2) * info.y * 0.01, vec3(0.0, 0.0, 1.0));

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size;
}
