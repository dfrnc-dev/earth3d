precision mediump float;

uniform float lightIntensity;
uniform sampler2D earthShineBlobeTexture;
uniform vec4 colorDefault;
uniform float time;

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
        addedLights.rgb += clamp(dot(-lightDirection,vecNormal)*0.2, 0.0, 0.4)* pointLights[l].color* lightIntensity;
    }

    vec2 textureCoord = vecUV;
    float uTime = time;
    const float PI = 3.141592;

    textureCoord.x += (sin(textureCoord.x * 50.0 + ((uTime * (PI / 3.0)) * 0.031))+ sin(textureCoord.y * 50.0 + ((uTime * (PI / 2.489)) * 0.017))) * 0.0075;
    textureCoord.y += (sin(textureCoord.y * 30.0 + ((uTime * (PI / 2.023)) * 0.023))+ sin(textureCoord.x * 30.0 + ((uTime * (PI / 3.1254)) * 0.037))) * 0.0125;

    vec4 texColor = texture2D(earthShineBlobeTexture,textureCoord);
    float texColorKof = (texColor.r + texColor.g + texColor.b + texColor.a) / 4.0;
    vec4 finalColor;
    if(texColorKof < 0.4){
        finalColor = vec4(0.0,0.0,0.0,0.1) * addedLights;
    }else{
        finalColor = vec4(colorDefault.r*texColorKof, colorDefault.g*texColorKof, colorDefault.b*texColorKof, colorDefault.a * 0.2) * addedLights;
    }
    gl_FragColor = finalColor;

}
