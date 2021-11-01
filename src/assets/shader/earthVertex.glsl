precision mediump float;
varying vec2 vecUV;
varying vec3 vecPosition;
varying vec3 vecNormal;

void main() {
     vecUV = uv;
     vecNormal = normalize(normalMatrix * normal);
//     vecNormal = (modelViewMatrix * vec4(normal, 0.0)).xyz;
     vecPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
     gl_Position = projectionMatrix * vec4(vecPosition, 1.0);
}


