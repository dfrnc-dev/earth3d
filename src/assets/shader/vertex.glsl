precision mediump float;
varying vec2 vecUV;
varying vec3 vecPosition;
varying vec3 vecNormal;

void main() {
     vecUV = uv;
     vecPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
     vecNormal = (modelViewMatrix * vec4(normal, 0.0)).xyz;
     gl_Position = projectionMatrix * vec4(vecPosition, 1.0);
}
