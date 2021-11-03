precision mediump float;

uniform sampler2D earthTexture;
uniform sampler2D earthMagmaTexture;
uniform sampler2D earthPointTexture;
uniform sampler2D earthNetworkTexture;
uniform float earthMagmaPercent;
uniform float earthNetworkPercent;
uniform float earthVirusPercent;
uniform float earthGreenVirusPercent;
uniform float earthGlitchPercent;
uniform float lightIntensity;
uniform vec3 colorEarth;
uniform vec3 colorSea;
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

///////////
// glitch
uniform vec2 resolution;
float random(vec2 c){
    return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise3(vec3 v)
{
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
    dot(p2,x2), dot(p3,x3) ) );
}

void main() {

    vec4 addedLights = vec4(0.0,0.0,0.0,1.0);
    for(int l = 0; l < NUM_POINT_LIGHTS; l++) {

        vec3 lightDirection = normalize(vecPosition - pointLights[l].position);
        addedLights.rgb += clamp(dot(-lightDirection,vecNormal)*0.4, 0.0, 0.5)* pointLights[l].color* lightIntensity;
    }

    /////////////////////////////////
    /////////////////////////////////
    const float PI = 3.141592;
    float uTime = time/10.0;
    vec2 textureCoord = vecUV;

    vec4 mainEarthTex = texture2D(earthTexture,textureCoord);
    vec4 magmaEarthTex = texture2D(earthMagmaTexture, textureCoord);
    vec4 earthPointTexture = texture2D(earthPointTexture, textureCoord);
    vec4 earthNetworkText = texture2D(earthNetworkTexture, textureCoord);

    vec4 texColor = mainEarthTex;
    vec4 texColor2 = magmaEarthTex;
    float texColorKof1 = 1.0-earthMagmaPercent;
    float texColorKof2 = (texColor2.r + texColor2.g + texColor2.b) * earthMagmaPercent;
    float texColorKof = texColorKof1+texColorKof2;



    if((mainEarthTex.r + mainEarthTex.g + mainEarthTex.b) > 2.0  ){
        // sea color
        gl_FragColor = vec4(colorSea.r*texColorKof, colorSea.g*texColorKof, colorSea.b*texColorKof, 1.0* texColorKof) * addedLights;
//        gl_FragColor = vec4(colorSea.r*texColorKof, colorSea.g*texColorKof, colorSea.b*texColorKof, 1.0* texColorKof);
    }
    else {

        //eath color
//        textureCoord.x += (sin(textureCoord.x * 5.0 + ((uTime * (PI / 3.0)) * 0.031))+ sin(textureCoord.y * 5.0 + ((uTime * (PI / 2.489)) * 0.017))) * 0.0075;
//        textureCoord.y += (sin(textureCoord.y * 3.0 + ((uTime * (PI / 2.023)) * 0.023))+ sin(textureCoord.x * 3.0 + ((uTime * (PI / 3.1254)) * 0.037))) * 0.0075;


//        vec4 texColor = mix(mainEarthTex, magmaEarthTex, step(0.0, textureCoord.x));
//        vec4 texColor = mix(mainEarthTex, magmaEarthTex, 0.0);
//        vec4 texColor = lerp(1.0,magmaEarthTex,mainEarthTex);


//        vec4 tempPointColor = texture2D(earthPointTexture,textureCoord);
//        vec4 tempPointColor = texture2D(earthPointTexture,vecUV);
//        float tempPointColorKoff = (tempPointColor.r + tempPointColor.g + tempPointColor.b) / 3.0;
//        if(tempPointColor.r > sin(uTime)){
//
//            float texColorKof = (texColor.r + texColor.g + texColor.b + texColor.a) * 1.0;

//            vec4 finalColor = vec4(1.0*texColorKof, 0.15*texColorKof, 0.21*texColorKof, 1.0);
            vec4 finalColor = vec4(colorEarth.r*texColorKof, colorEarth.g*texColorKof, colorEarth.b*texColorKof, 1.0 * texColorKof);
            gl_FragColor = finalColor * addedLights;

        if(earthPointTexture.r < earthVirusPercent){
            if(earthPointTexture.r < earthGreenVirusPercent){
                if( (earthNetworkText.r+earthNetworkText.g+earthNetworkText.b)/2.2 < earthNetworkPercent )
                    gl_FragColor = vec4(0.5,0.5,1.0,1.0) * addedLights;
                else
                    gl_FragColor = vec4(0.0,1.0,0.0,1.0) * addedLights;
            }else{
                gl_FragColor = vec4(1.0,0.0,0.0,1.0) * addedLights;
            }
        }else{
            gl_FragColor = finalColor * addedLights;
        }



    }
//    glitchTexture = earthTexture;
//    glitchTexture = texture2D(earthTexture,textureCoord);
    ////////////////////////////////
    ////////////////////////////////
    ////////////////////////////////
//
    ///////////
    // glitch
    if(earthGlitchPercent == 1.0){
        const float interval = 0.0;
        float time = time * 0.1;
        float strength = smoothstep(interval * 0.5, interval, interval - mod(time, interval));
        vec2 shake = vec2(strength * 8.0 + 0.5) * vec2(
        random(vec2(time)) * 2.0 - 1.0,
        random(vec2(time * 2.0)) * 2.0 - 1.0
        ) / resolution;

        float y = textureCoord.y * resolution.y;
        float rgbWave = (
        snoise3(vec3(0.0, y * 0.01, time * 400.0)) * (2.0 + strength * 32.0)
        * snoise3(vec3(0.0, y * 0.02, time * 200.0)) * (1.0 + strength * 4.0)
        + step(0.9995, sin(y * 0.005 + time * 1.6)) * 12.0
        + step(0.9999, sin(y * 0.005 + time * 2.0)) * -18.0
        ) / resolution.x;
        float rgbDiff = (6.0 + sin(time * 500.0 + textureCoord.y * 40.0) * (20.0 * strength + 1.0)) / resolution.x;
        float rgbUvX = textureCoord.x + rgbWave;

        float r = texture2D(earthTexture, vec2(rgbUvX + rgbDiff, textureCoord.y) + shake).r * gl_FragColor.r;
        float g = texture2D(earthTexture, vec2(rgbUvX, textureCoord.y) + shake).g * gl_FragColor.g;
        float b = texture2D(earthTexture, vec2(rgbUvX - rgbDiff, textureCoord.y) + shake).b * gl_FragColor.b;

        float whiteNoise = (random(textureCoord + mod(time, 10.0)) * 2.0 - 1.0) * (0.15 + strength * 0.15);

        float bnTime = floor(time * 20.0) * 200.0;
        float noiseX = step((snoise3(vec3(0.0, textureCoord.x * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);
        float noiseY = step((snoise3(vec3(0.0, textureCoord.y * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);
        float bnMask = noiseX * noiseY;
        float bnUvX = textureCoord.x + sin(bnTime) * 0.2 + rgbWave;

        float bnR = texture2D(earthTexture, vec2(bnUvX + rgbDiff, textureCoord.y)).r * bnMask;
        float bnG = texture2D(earthTexture, vec2(bnUvX, textureCoord.y)).g * bnMask;
        float bnB = texture2D(earthTexture, vec2(bnUvX - rgbDiff, textureCoord.y)).b * bnMask;

        vec4 blockNoise = vec4(bnR, bnG, bnB, 1.0);

        float bnTime2 = floor(time * 25.0) * 300.0;
        float noiseX2 = step((snoise3(vec3(0.0, textureCoord.x * 2.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.5);
        float noiseY2 = step((snoise3(vec3(0.0, textureCoord.y * 8.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.3);
        float bnMask2 = noiseX2 * noiseY2;
        float bnR2 = texture2D(earthTexture, vec2(bnUvX + rgbDiff, textureCoord.y)).r * bnMask2;
        float bnG2 = texture2D(earthTexture, vec2(bnUvX, textureCoord.y)).g * bnMask2;
        float bnB2 = texture2D(earthTexture, vec2(bnUvX - rgbDiff, textureCoord.y)).b * bnMask2;
        vec4 blockNoise2 = vec4(bnR2, bnG2, bnB2, 1.0);

        float waveNoise = (sin(textureCoord.y * 1200.0) + 1.0) / 2.0 * (0.15 + strength * 0.2);

        gl_FragColor = vec4(r, g, b, 1.0) * (1.0 - bnMask - bnMask2) + (whiteNoise + blockNoise + blockNoise2 - waveNoise);

    }


}
