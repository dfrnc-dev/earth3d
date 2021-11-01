precision mediump float;

uniform float lightIntensity;
uniform vec4 colorDefault0;
uniform vec4 colorDefault1;
uniform float time;
uniform float scaleKof;
uniform float ratio;

varying vec2 vecUV;
varying vec3 vecNormal;
varying vec3 vecPosition;



struct PointLight {
    vec3 color;
    vec3 position;
    float distance;
};

uniform PointLight pointLights[NUM_POINT_LIGHTS];

void main() {

    vec4 addedLights = vec4(0.0,0.0,0.0,1.0);
    for(int l = 0; l < NUM_POINT_LIGHTS; l++) {
        vec3 lightDirection = normalize(vecPosition - pointLights[l].position);
        addedLights.rgb += clamp(dot(-lightDirection,vecNormal)*0.3, 0.0, 0.5)* pointLights[l].color* lightIntensity;
    }

    vec2 textureCoord = vecUV;
    float uTime = time*2.0;
    const float PI = 3.141592;

    textureCoord.x += (sin(textureCoord.x * 10.0*scaleKof + ((uTime * (PI / 3.0)) * 0.0031))+ sin(textureCoord.y * 10.0*scaleKof + ((uTime * (PI / 2.489)) * 0.0017))) * 0.0075;
    textureCoord.y += (sin(textureCoord.y * 10.0*scaleKof + ((uTime * (PI / 2.023)) * 0.0023))+ sin(textureCoord.x * 10.0*scaleKof + ((uTime * (PI / 3.1254)) * 0.0037))) * 0.00125;

    vec2 uv = (textureCoord - 0.5) * vec2(ratio, 1.);
    vec4 tempColor = vec4( mix( colorDefault0, vec4(0.0,0.0,0.0,1.0), length(uv*2.0)));
//        tempColor = vec4( mix( colorDefault1, vec4(0.0,0.0,0.0,1.0), length(uv*0.03)));
//        tempColor = vec4( mix( tempColor, vec4(0.0,0.0,0.0,0.0), length(uv*0.3)));
    gl_FragColor = vec4( mix( colorDefault1, tempColor, length(uv*4.0)));
//    gl_FragColor = tempColor;

}
