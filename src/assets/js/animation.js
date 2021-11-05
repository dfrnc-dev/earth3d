import * as THREE from 'three'
import { gsap } from "gsap/all";
import GSDevTools from "@assets/js/dtgsap.min.js"
import {typeAnim} from "@assets/js/typeAnim"
import { slideAnimation } from "@assets/js/slideAnimation";
import  startScreenTl from "@assets/js/startScreen";
import { WEBGL } from 'three/examples/jsm/WebGL.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { Flow  } from "three/examples/jsm/modifiers/CurveModifier";
import {VertexNormalsHelper} from 'three/examples/jsm/helpers/VertexNormalsHelper.js'
import {RectAreaLightUniformsLib} from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import {RectAreaLightHelper} from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
// import Stats from 'three/examples/jsm/libs/stats.module'

/**
 * shader
 * */

import earthFragment from "@assets/shader/earthFragment.glsl"
import earthVertex from "@assets/shader/earthVertex.glsl"

import earthShineFragment from "@assets/shader/earthShineFragment.glsl"
import earthShineVertex from "@assets/shader/earthShineVertex.glsl"

import earthShineBlobeFragment from "@assets/shader/earthShineBlobeFragment.glsl"
import earthShineBlobeVertex from "@assets/shader/earthShineBlobeVertex.glsl"

import sunFragment from "@assets/shader/sunFragment.glsl"
import vertex from "@assets/shader/vertex.glsl"

import atmosphereFragment from "@assets/shader/atmosphereFragment.glsl"
import atmosphereVertex from "@assets/shader/atmosphereVertex.glsl"

/**
 * 3d model
 */
import gltfPath from '@assets/model/allModels.gltf'
require("@assets/model/allModels.bin")
require("@assets/model/textures/Red_plastic_baseColor.jpg")
require("@assets/model/textures/Red_plastic_metallicRoughness.png")
require("@assets/model/textures/Red_plastic_normal.png")
require("@assets/model/textures/ozzi.png")
import countryTextureImg from '@assets/img/countryIconSprite(200x200).png'
import companyTextureImg from '@assets/img/logoIconSprite(200x200).png'
import coinTextureImg from '@assets/img/coinIconSprite(200x200).png'


import earthTextureImg from '@assets/img/earth2.jpg'
import earthMagmaTextureImg from '@assets/img/earthCrack.jpg'
import earthPointTextureImg from '@assets/img/earth2(point3).jpg'
import earthNetworkTextureImg from '@assets/img/earth2(mapNetwork).jpg'
import earthShineTextureImg from '@assets/img/sunShine3.png'
import earthShineBlobeTextureImg from '@assets/img/fair_clouds.jpg'
import moonTextureImg from '@assets/img/moonText.jpg'
import moonTextureNormalsImg from '@assets/img/moonNormals.jpg'
import sunTextureImg from '@assets/img/sunShine.jpg'


// import audioStoryMP3 from "@assets/media/Genesis_full_mix2_100VBR.mp3"
// import audioStoryMP3 from "@assets/media/scenario-v2.7.mp3"
// import audioStoryMP3 from "@assets/media/scenario-final.mp3"
import audioStoryMP3 from "@assets/media/Genesis_full_mix6(plus-50sec).mp3"
import videoHowInstall from "@assets/media/genesis-video.mp4"

import {textForAnimation} from "@assets/js/text_for_animation.js"



// let genesisDate = "Nov 05, 2021 13:45:00"
// let genesisDate = '2021-11-05T13:00:00Z';
let genesisDate = Date.parse(new Date(new Date().getTime()+1.3*60000).toUTCString());

let timerInterval

function timerEnd() {

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24


    const countDown = new Date(genesisDate).getTime()
    const changeTime = () => {


        const now = Date.parse(new Date().toUTCString());
        // const now = new Date().getTime()
        let distanceTemp = countDown - now;
        const distance = (distanceTemp > 0) ? countDown - now : now - countDown;

        const days = Math.floor(distance / (day)) > 9 ? Math.floor(distance / (day)) : `0${Math.floor(distance / (day))}`
        const hours = Math.floor((distance % (day)) / (hour)) > 9 ? Math.floor((distance % (day)) / (hour)) : `0${Math.floor((distance % (day)) / (hour))}`
        const minutes = Math.floor((distance % (hour)) / (minute)) > 9 ? Math.floor((distance % (hour)) / (minute)) : `0${Math.floor((distance % (hour)) / (minute))}`
        const seconds = Math.floor((distance % (minute)) / second) > 9 ? Math.floor((distance % (minute)) / second) : `0${Math.floor((distance % (minute)) / second)}`

        document.querySelectorAll('.timer_container').forEach(item => {
            item.innerText = `${days} : ${hours} : ${minutes} : ${seconds}`
        })

        // if(distance == 60000){
        //     gsap.timeline()
        //         .to(".startScreen #genesis",{duration:1,autoAlpha:0})
        //         .to(".startScreen",{duration:1,backgroundColor:"rgba(0,0,0,0)"},">")
        //         .to(".btn-home",{duration:1,autoAlpha:1},"<")
        //         .to(".startScreen svg",{duration:1,y:"-20%",ease:"sine.inOut"},"<")
        // }
        // if (distance <= 0) {
        //     clearInterval(timerInterval);
        //     gsap.timeline()
        //         .to(".startScreen",{duration:1,autoAlpha:0},"<")
        // }
    }

    changeTime()
    timerInterval = setInterval(changeTime, 1000)
}
timerEnd()



// if ( WEBGL.isWebGL2Available() === false ){document.body.appendChild( "<div class='errorWebGl'>" + WEBGL.getWebGL2ErrorMessage() + "</div>" );}
window.addEventListener("load",function () {

    let mixer,
        camera,
        cameraTarget,
        cameraTargetPos = new THREE.Vector3(),
        cameraWrapper,
        scene,
        renderer,
        clock,
        composer,
        controls,
        flow,
        stats,
        fov = 45,
        planeAspectRatio = 16 / 9;

    let mainTl,
        gsapParam = {},
        textTl;

    let earth,
        earthShine,
        earthShineBlobe,
        earthWrapper,
        moon,
        dodecahedron,
        sputnik,
        moonRoket,
        moonRoketIn,
        moonRoketCurve,
        moonRoketLight,
        moonRoketMaterial,
        moonWrap,
        sun,
        sunShine,
        space,
        curve,
        curvePos = 0
    ;


    let normal = new THREE.Vector3( 0, 1, 0 ); // up
    let axisX = new THREE.Vector3( 1, 0, 0);

    let audioStory = {
        id : "",
        progress : 0,
    }
    let videoStory = {
        id : "",
        progress : 0,
    }
    var materialShader;


    const   mouse = new THREE.Vector2(),
            target = new THREE.Vector2(),
            windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

    let antialias;
    let isMobile;

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){isMobile = true;}
    else{isMobile = false;}
    if(isMobile){antialias = false;}
    else{antialias = true;}

    ////////////////////////////////////////////////
    ////////////////////////////////////////////////
    ////////////////////////////////////////////////

    init();


    function init() {
        gsap.registerPlugin(GSDevTools)
        RectAreaLightUniformsLib.init();

        audioStory.id = document.getElementById("audioStory")
        videoStory.id = document.getElementById("videoStory")

        const container = document.querySelector( '.animationContainer-canvas' );
        const  textureLoader = new THREE.TextureLoader()

        camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, 1, 1500 );
        camera.position.set( 0, 10, 200 );
        camera.lookAt( 0,500,0);
        cameraWrapper = new THREE.Mesh()
        cameraWrapper.add(camera)

        scene = new THREE.Scene();
        clock = new THREE.Clock();


        // // lights
        let lumpKof = 0.7
        const lightSun = new THREE.AmbientLight( 0xffffff );
        scene.add( lightSun );
        // var lightSun2 = new THREE.HemisphereLight(0xffffff, 0x404040, 1);
        // scene.add(lightSun2);

        const light1 = new THREE.PointLight( 0xffffff, 10*lumpKof, 500 );
        light1.position.set( 100, 30, -20 );
        scene.add( light1 );

        const light2 = new THREE.PointLight( 0xffffff, 1*lumpKof, 500 );
        light2.position.set(-10 , 0, -50 );
        scene.add( light2 );

        const light3 = new THREE.PointLight( 0xffffff, 1*lumpKof, 500 );
        light3.position.set(-50 , 0, 0 );
        scene.add( light3 );


        const light4 = new THREE.PointLight( 0xffffff, 1*lumpKof , 500 );
        light4.position.set( -10, 0, 50 );
        scene.add( light4 );



        // const spotLight = new THREE.SpotLight( 0xffffff );
        // spotLight.castShadow = true;
        // spotLight.intensity = 500
        // // spotLight.angle = Math.PI/3
        // spotLight.distance = 500
        // spotLight.penumbra = 0.5
        //
        // spotLight.position.set( 100, 0, -50 );
        // scene.add( spotLight );
        // const helper = new THREE.CameraHelper( spotLight.shadow.camera );
        // scene.add( helper );

        const directionalLight = new THREE.DirectionalLight( 0xffffff, 2);
        directionalLight.castShadow = true
        directionalLight.position.set(100,0,-100)
        scene.add( directionalLight );
        // const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
        // scene.add( helper );

        // const spotLight2 = new THREE.SpotLight( 0xffffff );
        // // spotLight2.castShadow = true;
        // spotLight2.intensity = 20
        // spotLight2.angle = 2
        // spotLight2.distance = 1000
        // spotLight2.penumbra = 1
        // spotLight2.position.set( 0, 0, 50 );
        // scene.add( spotLight2 );





        renderer = new THREE.WebGLRenderer({antialias:antialias,alpha: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMap.enabled = true;
        renderer.shadowMapSoft = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.physicallyCorrectLights = true;
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild( renderer.domElement );

        // renderer.gammaInput = true
        // renderer.gammaOutput = true
        // renderer.toneMappingExposure = Math.pow( 0.9, 4.0 )



        // const params = {
        //     // exposure: 1,
        //     bloomStrength: 0.3,
        //     bloomThreshold: 0.1,
        //     bloomRadius: 1
        // };
        // const renderScene = new RenderPass( scene, camera );
        // const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
        // bloomPass.threshold = params.bloomThreshold;
        // bloomPass.strength = params.bloomStrength;
        // bloomPass.radius = params.bloomRadius;
        // composer = new EffectComposer( renderer );
        // composer.addPass( renderScene );
        // composer.addPass( bloomPass );

        // const controls = new OrbitControls( camera, renderer.domElement );
        // controls.update();

        // stats = Stats()
        // document.body.appendChild(stats.dom)

        function animate() {

            requestAnimationFrame( animate );
            if ( mixer ) mixer.update( clock.getDelta() );


            if(composer) composer.render();
            else renderer.render( scene, camera );
            if(controls) controls.update();

            cameraTarget.getWorldPosition(cameraTargetPos)
            camera.lookAt(cameraTargetPos);

            if(earth) earth.material.uniforms.time.value+=0.1;
            if(earthShine) earthShine.material.uniforms.time.value+=0.5;
            if(earthShineBlobe) earthShineBlobe.material.uniforms.time.value+=0.1;
            if(sunShine) sunShine.material.uniforms.time.value+=1;
            if (materialShader) materialShader.uniforms.time.value +=0.01;

            if(stats)stats.update()
        }

        function onWindowResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            // camera.aspect = window.innerWidth / window.innerHeight;

            if (camera.aspect > planeAspectRatio) {
                // window too large
                camera.fov = fov;
            } else {
                // window too narrow
                const cameraHeight = Math.tan(THREE.MathUtils.degToRad(fov / 2));
                const ratio = camera.aspect / planeAspectRatio;
                const newCameraHeight = cameraHeight / ratio;
                camera.fov = THREE.MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
            }

            camera.updateProjectionMatrix();
            // if(composer) {
            //     composer.setSize(width, height);
            //     composer.setPixelRatio(window.devicePixelRatio);
            // }
            renderer.setSize( width, height );
            renderer.setPixelRatio(window.devicePixelRatio);
            if(composer)composer.setPixelRatio(window.devicePixelRatio);

        }



        ///////////////////////////////////
        ///////////////////////////////////
        ///////////////////////////////////

        ////////////
        space = new THREE.Mesh();
        scene.add(space)
        function getRI(max) {
            return Math.floor(Math.random() * max);
        }
        let starsColors = [0x7F5096,0x6E98B4,0xffffff]

        for ( let i = 0; i < 1000; i ++ ) {

            const object = new THREE.Mesh(
                new THREE.SphereGeometry( Math.random()*1+0.5, 10,10 ),
                new THREE.MeshStandardMaterial( { emissive : starsColors[getRI(2)] , emissiveIntensity: Math.random() * 5} )
            );

            let tempDist = 0;
            do{
                object.position.x = Math.random() * 2000 - 1000;
                object.position.y = Math.random() * 2000 - 1000;
                object.position.z = Math.random() * 2000 - 1000;
                tempDist = Math.sqrt((Math.pow(object.position.x,2)+Math.pow(object.position.y,2)+Math.pow(object.position.z,2)))
            }while (tempDist < 800 )

            let scaleKof = Math.random()
            object.scale.x = scaleKof*0.5 + 0.5;
            object.scale.y = scaleKof*0.5 + 0.5;
            object.scale.z = scaleKof*0.5 + 0.5;

            space.add( object );

        }

        // ////////////
        // sun = new THREE.Mesh(
        //     // new THREE.SphereGeometry( 5, 50,50 ),
        //     new THREE.PlaneGeometry( 15, 15 ),
        //     new THREE.ShaderMaterial({
        //         vertexShader: vertex,
        //         fragmentShader: sunFragment,
        //         uniforms: THREE.UniformsUtils.merge([
        //             THREE.UniformsLib['lights'],
        //             {
        //                 lightIntensity: {type: 'f', value: 1.0 },
        //                 colorDefault0: {type:"vec4", value: new THREE.Vector4(0.996, 0.992, 0.701,0.5)},
        //                 colorDefault1: {type:"vec4", value: new THREE.Vector4(1.0, 1.0, 1.0,1.0)},
        //                 scaleKof:{type:"f",value:0.1},
        //                 time: {type: "f",value: 0 },
        //                 ratio: {value: 1.0},
        //             }
        //         ]),
        //         blending: THREE.AdditiveBlending,
        //         transparent: true,
        //         lights: true,
        //     })
        // )
        // sun.position.set(100,0,-99.9)
        // space.add(sun)

        // const map = new THREE.TextureLoader().load( sunTextureImg );
        // const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );
        sun = new THREE.Sprite(
            // material
            new THREE.SpriteMaterial( {
                map: new THREE.TextureLoader().load( sunTextureImg ),
                color: 0xffffff,
                blending: THREE.AdditiveBlending
            } )

                // new THREE.ShaderMaterial({
                //     vertexShader: vertex,
                //     fragmentShader: sunFragment,
                //     uniforms: THREE.UniformsUtils.merge([
                //         THREE.UniformsLib['lights'],
                //         {
                //             lightIntensity: {type: 'f', value: 1.0 },
                //             colorDefault0: {type:"vec4", value: new THREE.Vector4(0.996, 0.992, 0.701,0.5)},
                //             colorDefault1: {type:"vec4", value: new THREE.Vector4(1.0, 1.0, 1.0,1.0)},
                //             scaleKof:{type:"f",value:0.1},
                //             time: {type: "f",value: 0 },
                //             ratio: {value: 1.0},
                //         }
                //     ]),
                //     blending: THREE.AdditiveBlending,
                //     transparent: true,
                //     lights: true,
                // })
        );
        sun.position.set(100, 0, -100)
        sun.scale.set(10, 10, 1)

        space.add( sun );
        space.add(directionalLight)

        // ////////////
        // sunShine = new THREE.Mesh(
        //     new THREE.PlaneGeometry( 25, 25 ),
        //     new THREE.ShaderMaterial({
        //         vertexShader: vertex,
        //         fragmentShader: sunFragment,
        //         uniforms: THREE.UniformsUtils.merge([
        //             THREE.UniformsLib['lights'],
        //             {
        //                 lightIntensity: {type: 'f', value: 1.0 },
        //                 colorDefault0: {type:"vec4", value: new THREE.Vector4(0.996, 0.992, 0.701,0.5)},
        //                 colorDefault1: {type:"vec4", value: new THREE.Vector4(1.0, 1.0, 1.0,1.0)},
        //                 scaleKof:{type:"f",value:0.1},
        //                 time: {type: "f",value: 0 },
        //                 ratio: {value: 1.0},
        //             }
        //         ]),
        //         blending: THREE.AdditiveBlending,
        //         // transparent: true,
        //         lights: true,
        //     })
        // )
        // sunShine.position.set(100,0,-100)
        // space.add(sunShine)

        ////////////////
        ////////////////
        ////////////////

        earthWrapper = new THREE.Mesh()
        scene.add(earthWrapper)

        earth = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50),
            new THREE.ShaderMaterial({
                vertexShader: earthVertex,
                fragmentShader: earthFragment,
                uniforms: THREE.UniformsUtils.merge([
                    THREE.UniformsLib['lights'],
                    {
                        lightIntensity: {type: 'f', value: 1.0 },
                        colorEarth: {type:"vec3", value: new THREE.Vector3(0.0, 0.250, 0.8)},
                        colorSea: {type:"vec3", value: new THREE.Vector3(0.027, 0.180, 0.603)},
                        earthTexture:{type: "t",value: null },
                        earthMagmaTexture:{type: "t",value: null },
                        earthPointTexture:{type: "t",value: null },
                        earthNetworkTexture:{type: "t",value: null },
                        earthMagmaPercent:{type:"f",value:0},
                        earthNetworkPercent:{type:"f",value:0},
                        earthVirusPercent:{type:"f",value:0},
                        earthGreenVirusPercent:{type:"f",value:0},
                        earthGlitchPercent:{type:"f",value:0},
                        time:{type:"f",value:0},
                        // resolution:{ type:"vec2",value: new THREE.Vector2(window.innerWidth,window.innerHeight)},
                        resolution:{ type:"vec2",value: new THREE.Vector2(5.0,1.0)},
                    }

                ]),
                lights: true,

            })
        )
        earth.material.uniforms.earthTexture.value = new THREE.TextureLoader().load(earthTextureImg);
        earth.material.uniforms.earthMagmaTexture.value = new THREE.TextureLoader().load(earthMagmaTextureImg);
        earth.material.uniforms.earthPointTexture.value = new THREE.TextureLoader().load(earthPointTextureImg);
        earth.material.uniforms.earthNetworkTexture.value = new THREE.TextureLoader().load(earthNetworkTextureImg);
        earth.rotateZ(14*Math.PI/180)
        earth.castShadow = true;
        // earth.receiveShadow = true;
        earthWrapper.add(earth)

        earthShine = new THREE.Mesh(
            new THREE.PlaneGeometry( 25, 25 ),
            new THREE.ShaderMaterial({
                vertexShader: earthShineVertex,
                fragmentShader: earthShineFragment,
                uniforms: THREE.UniformsUtils.merge([
                    THREE.UniformsLib['lights'],
                    {
                        lightIntensity: {type: 'f', value: 1.0  },
                        earthShineTexture:{type: "t",value: null },
                        colorDefault: {type:"vec4", value: new THREE.Vector4(0.0,1.0,0.0, 1.0)},
                        time: {type: "f",value: 0 },
                    }
                ]),
                blending: THREE.AdditiveBlending,
                transparent: true,
                lights: true,
                opacity: 0,
            })
        )
        earthShine.material.uniforms.earthShineTexture.value = new THREE.TextureLoader().load(earthShineTextureImg);
        earthShine.position.x = 1
        earthShine.position.z = -5
        scene.add(earthShine)


        earthShineBlobe = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50),
            new THREE.ShaderMaterial({
                vertexShader: earthShineBlobeVertex,
                fragmentShader: earthShineBlobeFragment,
                uniforms: THREE.UniformsUtils.merge([
                    THREE.UniformsLib['lights'],
                    {
                        lightIntensity: {type: 'f', value: 1.0 },
                        earthShineBlobeTexture:{type: "t",value: null },
                        colorDefault: {type:"vec4", value: new THREE.Vector4(0.019,1.0,1.0,1.0)},
                        time: {type: "f",value: 0 },
                    }
                ]),
                blending: THREE.AdditiveBlending,
                // depthTest: false,
                // transparent: true,
                side: THREE.DoubleSide,
                lights: true,
            })
        )
        earthShineBlobe.material.uniforms.earthShineBlobeTexture.value = new THREE.TextureLoader().load(earthShineBlobeTextureImg);
        earth.add(earthShineBlobe)

        ////////////

        moonWrap = new THREE.Mesh()
        moonWrap.userData = {
            rotY: 0,
            tempRotY: 3,
        }
        scene.add(moonWrap)


        cameraTarget = new THREE.Mesh(
            // new THREE.SphereGeometry(1, 10, 10),
            // new THREE.MeshStandardMaterial({color: 0xff0000})
        )
        // if(window.location.hostname != "localhost") cameraTarget.material.visible = false
        cameraTarget.position.set(0,500,0)
        moonWrap.add(cameraTarget)


        moon = new THREE.Mesh(
            new THREE.SphereGeometry(5/3.6, 50, 50),
            new THREE.MeshStandardMaterial({
                map: new THREE.TextureLoader().load(moonTextureImg),
                normalMap: new THREE.TextureLoader().load(moonTextureNormalsImg),
                refractionRatio: 0.1,
                // lightMapIntensity: 0.1
            })

        )
        moon.rotateY(-200*Math.PI/180)
        moon.position.set(13, 0, 0)
        // moon.castShadow = true;
        moon.receiveShadow = true;
        // moon.material.transparent = true
        moonWrap.add(moon)


        /**
         * sputnik curve
         */
        const somePoints = [
            new THREE.Vector3(  -5,   2, 30 ),
            new THREE.Vector3(  0, 0,  10 ),
            new THREE.Vector3( 10,   1,  0 ),
            new THREE.Vector3( 0,   -1,  -10 ),
            new THREE.Vector3( -10, 1, 0 ),
            new THREE.Vector3( 0, -1, 10 ),
            new THREE.Vector3( 20, -10, 20 ),
        ];
        curve = new THREE.CatmullRomCurve3( somePoints );
        curve = new THREE.CatmullRomCurve3( curve.getSpacedPoints( 100 ) );
        const line = new THREE.Line(
            new THREE.BufferGeometry( ).setFromPoints( curve.getSpacedPoints( 100 ) ),
            new THREE.LineBasicMaterial( { color: 0xffffaa } )
        );
        // scene.add( line );



        const loader = new GLTFLoader();
        loader.load( gltfPath, function ( gltf ) {

            dodecahedron = gltf.scene.getObjectByName("dodecadron")
            dodecahedron.scale.set(1.8,1.8,1.8)
            dodecahedron.rotation.set(0,0.2,0.2)
            dodecahedron.visible = true
            dodecahedron.traverse( function( child ) {
                if (child.material) {
                    const newMaterial = new THREE.MeshStandardMaterial().copy(child.material);
                    child.material = newMaterial;
                }
                if ( child.isMesh ) {
                    // child.castShadow = true;
                    child.receiveShadow = true;
                    child.material.side = THREE.DoubleSide
                    child.material.transparent = true
                    child.material.opacity = 0.5
                }
                if ( child.isSkinnedMesh ) child.castShadow = true;
            });
            moon.add(dodecahedron)

            sputnik = gltf.scene.getObjectByName("sputnik")
            sputnik.visible = false
            sputnik.traverse( function( child ) {
                if ( child.isMesh ) {
                    child.castShadow = false;
                    child.receiveShadow = true;
                }
            });
            sputnik.position.set(-5,6,50)
            sputnik.scale.set(0.3,0.3,0.3)
            scene.add(sputnik)

            /**
             *
             */


            moonRoket = gltf.scene.getObjectByName("moonRoket")
            moonRoketIn = gltf.scene.getObjectByName("moonRoketIn")
            moonRoketMaterial = gltf.scene.getObjectByName("moonRoketMaterial")
            moonRoketIn.rotation.set(THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(-180),0)
            moonRoket.visible = true
            moonRoket.traverse( function( child ) {
                if ( child.isMesh ) {
                    child.castShadow = false;
                    child.receiveShadow = true;
                    child.material.transparent = true
                    child.material.opacity = 1
                    child.material.format = null
                }
            });
            moonRoket.scale.set(0,0,0)
            moonWrap.add(moonRoket)
            moonRoketLight = new THREE.RectAreaLight(0xffffff, 1, 10, 4);
            moonRoketLight.position.set(0, 0.7, 0.2);
            moonRoketLight.rotation.x = THREE.MathUtils.degToRad(-60);
            moonRoketIn.add( moonRoketLight );
            // console.log(moonRoket)
            // const helper = new RectAreaLightHelper(moonRoketLight);
            // moonRoketLight.add(helper);


            // console.log(gltf.scene)
            // scene.add(gltf.scene)



            /**
             *
             *
             */

            mixer = new THREE.AnimationMixer( gltf.scene );

            document.addEventListener( 'mousemove', onMouseMoveEarth, false );
            window.addEventListener('resize',onWindowResize)

            onWindowResize()
            animateGsap()
            animate();


        }, undefined, function ( error ) {

            console.error( error );

        } );



    }

    function onMouseMoveEarth( event ) {
        mouse.x = ( event.clientX - windowHalf.y );
        mouse.y = ( event.clientY - windowHalf.x );

        target.x = ( 1 - mouse.x ) * 0.001;
        target.y = ( 1 - mouse.y ) * 0.001;

        gsap.to(earthWrapper.rotation,{duration: 0.5,x:-0.2 * ( target.y - earthWrapper.rotation.x ),ease:'none'})
        gsap.to(earthWrapper.rotation,{duration: 0.5,y:-0.2 * ( target.x - earthWrapper.rotation.y ),ease:'none'})

        gsap.to(space.rotation,{duration: 0.5,x:0.05 * ( target.y - space.rotation.x ),ease:'none'})
        gsap.to(space.rotation,{duration: 0.5,y:0.05 * ( target.x - space.rotation.y ),ease:'none'})

    }






    /**
     *
     *
     *
     *  animation
     *
     *
     *
     */


    function animateGsap() {
        let arrTextAnim = textForAnimation(audioStory)

        gsapParam.rotY = 0
        gsapParam.tempRotY =  0
        gsapParam.camLookAt =  new THREE.Vector3(0,50,0)
        gsap.to(sun.material,{duration:100,rotation: THREE.MathUtils.degToRad(360),repeat:-1,ease:"none"})

        let earthRotTl = gsap.timeline({paused:true}).to(gsapParam,{duration:120/2,rotY:360,repeat:2,ease:"none",onUpdate:function () {
                earth.rotateY(gsapParam.rotY*Math.PI/180 - gsapParam.tempRotY)
                gsapParam.tempRotY = gsapParam.rotY*Math.PI/180;
            }})
        moonWrap.rotateY(-30*Math.PI/180)
        let moonRotTl = gsap.timeline({paused:true}).to(moonWrap.userData,{duration:120,rotY:360,repeat:0,ease:"none"
            ,onUpdate:function () {
                moonWrap.rotateY(moonWrap.userData.rotY*Math.PI/180 - moonWrap.userData.tempRotY)
                moonWrap.userData.tempRotY = moonWrap.userData.rotY*Math.PI/180;
            }
        })

        dodecahedron.userData.rotY = 0
        dodecahedron.userData.tempRotY = 0
        // dodecahedron.rotateY(-30*Math.PI/180)
        let dodecahedronRotTl = gsap.timeline({paused:false}).to(dodecahedron.userData,{duration:120,rotY:360,repeat:-1,ease:"none"
            ,onUpdate:function () {
                dodecahedron.rotateZ(dodecahedron.userData.rotY*Math.PI/180 - dodecahedron.userData.tempRotY)
                dodecahedron.userData.tempRotY = dodecahedron.userData.rotY*Math.PI/180;
            }
        })




        cameraWrapper.userData.rotY = 0
        cameraWrapper.userData.tempRotY = 0
        let cameraWrapRotTl = gsap.timeline({paused:true})
            .to(cameraWrapper.userData,{duration:120,rotY:360,repeat:0,ease:"none"
            ,onUpdate:function () {
                cameraWrapper.rotateY(cameraWrapper.userData.rotY*Math.PI/180 - cameraWrapper.userData.tempRotY)
                cameraWrapper.userData.tempRotY = cameraWrapper.userData.rotY*Math.PI/180;
            }
        })

        // moonWrap.rotateY(THREE.MathUtils.degToRad(90))
        // gsap.set(moonWrap.rotation,{y:THREE.MathUtils.degToRad(90)})
        // let moonRotTl = gsap.to(moonWrap.rotation,{duration:120,y:"+="+THREE.MathUtils.degToRad(360),repeat:1,ease:"none"})
        // let cameraWrapRotTl = gsap.to(cameraWrapper.rotation,{duration:120,y:THREE.MathUtils.degToRad(360),ease:"none"})
        // let earthRotTl = gsap.to(earth.rotation,{duration:60,y:THREE.MathUtils.degToRad(360),repeat:3,ease:"none"})

        let earthAndMoonTL = gsap.timeline({paused:true})
            .to(earthRotTl,{duration:60,progress:1,repeat:1,ease:"none"})
            .to(moonRotTl,{duration:120,progress:1,ease:"none"},"<")

        earthAndMoonTL.progress(0.01)




        /**
         * starWarsTl
         */
        let starWarsTl = gsap.timeline({paused:true})

            .to(audioStory,{duration:0.01,progress:0})
            .to(audioStory.id,{duration:0.01,attr:{"data-play": true},volume:1,currentTime:0},"<")

            .to(".story #title",{duration:0.5,autoAlpha:1},"qq")


            .to(".story #title",{duration:0.3,autoAlpha:0},">+6")
            .to(".story .content #text",{duration:0.5,opacity:1,top:"97%"},"<")

            .to(".story .content #text",{duration:60,top:"20%",ease:"none"},">")
            .to(".story .content",{duration:3,opacity:0,ease:"sine.in"},">")
            .to(".story .content #text",{duration:3,top:"-20%",ease:"sine.in"},"<")

            .to(audioStory,{duration:69,progress:69,ease:"none"},"qq")
            .to(audioStory.id,{duration:4,volume:0,ease:"sine.in"},">-4")
            .to(".story",{duration:3,autoAlpha:0},">-3")
            .to(audioStory.id,{duration:0.01,attr:{"data-play": false},volume:0})


        /**
         * chatAfterStoryTl
         */
        let chatAfterStoryTl = gsap.timeline({paused:true})
            .to(".chatAfterStory",{autoAlpha:1})
            .add(typeAnim(".chatAfterStory .title h2","title"),"<")
            .add(typeAnim(".chatAfterStory .title h3","title"),">")
            .from(".chatAfterStory .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .from(".chatAfterStory .content",{duration:1,opacity:0,ease:"none"},"<")
            .to(".chatAfterStory .title > *",{opacity:0,y:-10,ease:"sine.in",stagger:0.2})

            // .add(typeAnim(".chatAfterStory .dialog_role","dialog"),"<")
            .add(arrTextAnim["chatAfterStory"].restart(),"<")

            .to(".chatAfterStory .content .dialog",{duration:0.5,opacity:0,ease:"sine.in"},">+0.5")
            .to(".chatAfterStory .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .to(".chatAfterStory",{autoAlpha:0},"<")

        /**
         *  earthAnim
         */
        let earthFrame = new THREE.Mesh(
            new THREE.IcosahedronGeometry(6, 2),
            new THREE.MeshStandardMaterial({
                color: 0xff0000,
                wireframe: true,
                emissive : 0xff0000,
                emissiveIntensity : 1,
                transparent: true,
                // side: THREE.DoubleSide,
                opacity: 0,
                visible: false,
            })
        )
        earth.add(earthFrame)

        let logoPathArr = [
            // new THREE.Vector3( 5.24 , -1.32 , 0.06 ),
            new THREE.Vector3( 5.3 , 0.0 , -0.0 ),
            new THREE.Vector3( 4.73 , 2.67 , 0.0 ),
            new THREE.Vector3( 2.95 , 4.68 , -0.0 ),
            new THREE.Vector3( 0.0 , 5.3 , -0.0 ),
            new THREE.Vector3( -2.9 , 4.68 , -0.0 ),
            new THREE.Vector3( -4.93 , 2.49 , -0.0 ),
            new THREE.Vector3( -5.3 , 0.0 , -0.0 ),
            new THREE.Vector3( -4.74 , -2.72 , -0.0 ),
            new THREE.Vector3( -2.74 , -4.73 , -0.0 ),
            new THREE.Vector3( 0.0 , -5.3 , -0.0 ),
            new THREE.Vector3( 3.21 , -4.55 , 0.0 ),
            new THREE.Vector3( 4.95 , -2.45 , 0.0 ),
            new THREE.Vector3( 5.3 , 0.0 , -0.0 ),
            // new THREE.Vector3( 5.13 , 1.48 , 0.0 ),
        ];
        let logoPathCurve = new THREE.CatmullRomCurve3( logoPathArr );
        logoPathCurve = new THREE.CatmullRomCurve3( logoPathCurve.getSpacedPoints( 100 ) );
        // let earthPathLine = new THREE.Line(
        //     new THREE.BufferGeometry( ).setFromPoints( logoPathCurve.getSpacedPoints( 100 ) ),
        //     new THREE.LineBasicMaterial( { color: 0xffffaa, visible: false } )
        // );
        // scene.add( earthPathLine );

        let logoSpriteWraperAll = new THREE.Mesh()
        earth.add(logoSpriteWraperAll)

        function logoCompanyAnim(spriteSize,countNum,targetTexture,tempDuration){
            let templogoCompanyAnimTL = gsap.timeline({paused:true})
            let randomDeg = gsap.utils.random(-180, 180, 20, true);
            let randomImg = gsap.utils.random(0, spriteSize-1, 1, true);
            for(let i = 0; i < countNum; i++){

                let logoSprite = new THREE.Sprite(
                    new THREE.SpriteMaterial( {map: new THREE.TextureLoader().load(targetTexture),} )
                );
                logoSprite.material.transparent = true;
                logoSprite.material.format = null;
                logoSprite.material.opacity = 0;
                logoSprite.material.map.offset.set( 1/spriteSize * randomImg(), 0 );
                logoSprite.material.map.repeat.set( 1/spriteSize, 1 );
                logoSprite.scale.set(0.5, 0.5, 1)
                logoSprite.userData.curvePos = 0

                let logoSpriteWraper = new THREE.Mesh()
                logoSpriteWraper.add(logoSprite)
                logoSpriteWraper.rotation.set(THREE.MathUtils.degToRad(randomDeg()),THREE.MathUtils.degToRad(randomDeg()),THREE.MathUtils.degToRad(randomDeg()))

                logoSpriteWraperAll.add(logoSpriteWraper)

                templogoCompanyAnimTL.add(
                    gsap.timeline()
                        .to(logoSprite.material,{duration:5,delay:"random(0,0.5,0.1)",opacity:1})
                        .to(logoSprite.userData,{
                            duration:(tempDuration < 60 ) ? tempDuration : 60,
                            curvePos:1,
                            repeat:(tempDuration > 60 ) ? tempDuration/60-1 : 0,
                            ease:"none",
                            onUpdate:function () {
                                logoSprite.position.copy(logoPathCurve.getPoint(logoSprite.userData.curvePos))
                            }
                        },"<")
                        .to(logoSprite.material,{duration:5,opacity:0,ease:"power1.in"},">-6")
                ,0)
            }
            return templogoCompanyAnimTL;
        }

        /**
         * tl for earth anim
         */
        let earthTextAnim = arrTextAnim["subtitleEarth"]
        // console.log(earthTextAnim.labels)

        ///////////
        let earthAnimRed = gsap.timeline({paused:true})
            .to(earth.material.uniforms.earthMagmaPercent,{duration:5,value:1, ease:"sine.inOut"},">")
            .to(earth.material.uniforms.colorEarth.value,{duration:5,x:0.313,y:0.082,z:0.043, ease:"sine.inOut"},"<")
            .to(earth.material.uniforms.colorSea.value,{duration:5,x:0.313,y:0.082,z:0.043, ease:"sine.inOut"},"<")
            .to(earthShine.material.uniforms.colorDefault.value,{duration:5,x:1,y:0.019,z:0.180, ease:"sine.inOut"},"<")
            .to(earthShineBlobe.material.uniforms.colorDefault.value,{duration:5,x:1,y:0.019,z:0.180,w:5.0, ease:"sine.inOut"},"<")

        ///////////
        let earthCountryAnimTl = logoCompanyAnim(5,50,countryTextureImg,(earthTextAnim.labels["WorldWarE"]-earthTextAnim.labels["animCountryS"]))

        ///////////
        let earthFrameTl = gsap.timeline({paused:true})
            .to(earthFrame.material,{duration:0.1,visible: true})
            .to(earthFrame.material,{duration:0.1,repeat:5,yoyo:false,opacity:0.1,ease:"back.out(1)"})
            .to(earthFrame.material,{duration:0.1,repeat:5,yoyo:false,opacity:0.3,ease:"back.out(1)"})
            .to(earthFrame.material,{duration:0.1,repeat:5,yoyo:false,opacity:0.6,ease:"back.out(1)"})
            .to(earthFrame.material,{duration:0.1,repeat:5,yoyo:false,opacity:1,ease:"back.out(1)"})

        ///////////
        let earthGlitchTl = gsap.timeline({paused:true})
            .to(earth.material.uniforms.earthGlitchPercent,{duration:0.2,value:1,repeat:1,yoyo:true,repeatDelay:0.3, ease:"sine.inOut"},">")
            .to(earth.material.uniforms.earthGlitchPercent,{duration:0.1,value:1,repeat:0,yoyo:true, ease:"sine.inOut"},">+0.5")

        ///////////
        let earthCompanyAnimTl = logoCompanyAnim(5,50,companyTextureImg,(earthTextAnim.labels["WorldWarE"] - earthTextAnim.labels["animEarthCompanyS"] - 6))

        ///////////
        let earthRedVirusTl = gsap.timeline({paused:true})
            .to(earth.material.uniforms.earthVirusPercent,{duration:10,value:1, ease:"none"})

        ///////////
        let earthGreenVirusTl = gsap.timeline({paused:true})
            .to(earth.material.uniforms.earthGreenVirusPercent,{duration:10,value:1, ease:"none"})

        ///////////
        let earthCoinAnimTl = logoCompanyAnim(6,100,coinTextureImg,(earthTextAnim.labels["goSomewhereE"] - earthTextAnim.labels["earthCoinAnimS"]))

        ///////////
        let earthNetworkTl = gsap.timeline({paused:true})
            .to(earth.material.uniforms.earthNetworkPercent,{duration:10,value:1, ease:"sine.inOut"})

        ///////////
        earthShine.scale.set(0,0,0)
        let earthShineTl = gsap.timeline({paused:true})
            .to(earthShine.scale,{duration:5,x:1,y:1,z:1, ease:"sine.inOut"})
            .to(earthShine.scale,{duration:5,x:0.8,y:0.8,z:0.8,repeat:10,yoyo:true, ease:"sine.inOut"})
            .to(earthShineBlobe.material.uniforms.lightIntensity,{duration:5,value:2,repeat:10,yoyo:true, ease:"sine.inOut"},"<")
            .to(earthShineBlobe.material.uniforms.colorDefault.value,{duration:5,x:0,w:5,repeat:10,yoyo:true, ease:"sine.inOut"},"<")
            .set(earthShine.material,{visible: false})

        let earthAnim = gsap.timeline({paused:true})

            .add(earthTextAnim.restart())

            // .to(earthAnimRed,{duration:(earthTextAnim.labels["animRedMarsE"]-earthTextAnim.labels["animRedMarsS"]),progress:1,ease:"none"},earthTextAnim.labels["animRedMarsS"])
            .add(earthCountryAnimTl.restart(),earthTextAnim.labels["animCountryS"])
            .to(earthFrameTl,{duration:(earthTextAnim.labels["animEarthFrameE"]-earthTextAnim.labels["animEarthFrameS"]),progress:1,ease:"none"},earthTextAnim.labels["animEarthFrameS"])
            .to(earthGlitchTl,{duration:(earthTextAnim.labels["animEarthGlitchE"]-earthTextAnim.labels["animEarthGlitchS"]),progress:1,ease:"none"},earthTextAnim.labels["animEarthGlitchS"])
            .add(earthCompanyAnimTl.restart(),earthTextAnim.labels["animEarthCompanyS"]+6)
            ////
            .to(earthGlitchTl,{duration:(earthTextAnim.labels["WorldWarE"]-earthTextAnim.labels["WorldWarS"]),progress:0,ease:"none"},earthTextAnim.labels["WorldWarS"])
            .to(earthFrameTl,{duration:(earthTextAnim.labels["WorldWarE"]-earthTextAnim.labels["WorldWarS"]),progress:0,ease:"none"},earthTextAnim.labels["WorldWarS"])
            .to(earthAnimRed,{duration:(earthTextAnim.labels["WorldWarE"]-earthTextAnim.labels["WorldWarS"]),progress:0,ease:"none"},earthTextAnim.labels["WorldWarS"])
            ////
            .to(earthRedVirusTl,{duration:(earthTextAnim.labels["earthRedVirusE"]-earthTextAnim.labels["earthRedVirusS"]),progress:1,ease:"none"},earthTextAnim.labels["earthRedVirusS"])
            .to(earthGreenVirusTl,{duration:(earthTextAnim.labels["earthGreenVirusE"]+30-earthTextAnim.labels["WorldWarS"]),progress:1,ease:"none"},earthTextAnim.labels["WorldWarS"])
            ////
            .add(earthCoinAnimTl.restart(),earthTextAnim.labels["earthCoinAnimS"])
            // .to(earthNetworkTl,{duration:(earthTextAnim.labels["goSomewhereE"]-earthTextAnim.labels["earthNetworkS"]),progress:1,ease:"none"},earthTextAnim.labels["earthNetworkS"])

            .to(earthShineTl,{duration:(earthTextAnim.labels["manifestAnimE"]-earthTextAnim.labels["goSomewhereS"]),progress:1,ease:"none"},earthTextAnim.labels["goSomewhereS"])






        /**
         * chatAfterManifestTl
         */
        let chatAfterManifest = gsap.timeline({paused:true})
            .to(".chatAfterManifest",{autoAlpha:1})
            .from(".chatAfterManifest .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .from(".chatAfterManifest .content",{duration:1,opacity:0,ease:"none"},"<")

            // .add(typeAnim(".chatAfterManifest .dialog1 .dialog_role","dialog"),"<")
            .add(arrTextAnim["chatAfterManifest"].restart(),"<")

            .to(".chatAfterManifest .content .dialog",{duration:0.5,opacity:0,ease:"sine.in"},">+5")
            .to(".chatAfterManifest .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .to(".chatAfterManifest",{autoAlpha:0},"<")
        /**
         * chatAfterDodecadronTl
         */
        let chatAfterDodecadronTl = gsap.timeline({paused:true})
            .to(".chatAfterDodecadron",{autoAlpha:1})
            .from(".chatAfterDodecadron .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .from(".chatAfterDodecadron .content",{duration:1,opacity:0,ease:"none"},"<")

            // .add(typeAnim(".chatAfterDodecadron .dialog1 .dialog_role","dialog"),"<")
            .add(arrTextAnim["chatAfterDodecadron"].restart(),"<")

            .to(".chatAfterDodecadron .content .dialog",{duration:0.5,opacity:0,ease:"sine.in"},">+5")
            .to(".chatAfterDodecadron .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .to(".chatAfterDodecadron",{autoAlpha:0},"<")

        /**
         * chatCheckDodecadronTl
         */
        let chatCheckDodecadronTl = gsap.timeline({paused:true})
            .to(".chatCheckDodecadron",{autoAlpha:1})
            .from(".chatCheckDodecadron .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .from(".chatCheckDodecadron .content",{duration:1,opacity:0,ease:"none"},"<")

            // .add(typeAnim(".chatCheckDodecadron .dialog1 .dialog_role","dialog"),"<")
            .add(arrTextAnim["chatCheckDodecadron"].restart(),"<")

            .to(".chatCheckDodecadron .content .dialog",{duration:0.5,opacity:0,ease:"sine.in"},">+0.5")
            .to(".chatCheckDodecadron .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .to(".chatCheckDodecadron",{autoAlpha:0},"<")

        /**
         * dodacahedron anim
         */
        let dodacahedronTl = gsap.timeline({paused:true})


        for ( let i = 0; i < dodecahedron.children.length; i++ ){
            for (let k = 0; k < dodecahedron.children[i].children.length; k++){
                let dir = new THREE.Vector3();
                dodecahedron.children[i].visible = false
                dodacahedronTl
                    .to(dodecahedron.children[i],{duration:0.01,visible:true},(k == 0) ? ">-0.9" : "<")
                    .from(dodecahedron.children[i].children[k].material,{duration:1,opacity:0,ease:"sine.out)"},"<")
            }

            let tempVec = new THREE.Vector3();
            tempVec.subVectors(moon.position, dodecahedron.children[i].getWorldPosition(tempVec)).normalize();
            dodacahedronTl
                .from(dodecahedron.children[i].position,{duration:1,ease:"sine.out)",
                    // x: "+="+tempVec.x * -50,
                    y: "+="+tempVec.y * -10,
                    // z: "+="+tempVec.z * -5,
                    // y: "+=-5",

                },"<")

        }

        /**
         * moonRoket curve
         */
        let moonRoketPoint = [
            new THREE.Vector3( -50, 30, 100 ),
            new THREE.Vector3( 20 , 15, 20 ),
            new THREE.Vector3( 12, 2, 12 ),
            new THREE.Vector3( 14, 0, 10 ),
            new THREE.Vector3( 14, 0, 3 ),
        ];
        moonRoketCurve = new THREE.CatmullRomCurve3( moonRoketPoint );
        moonRoketCurve = new THREE.CatmullRomCurve3( moonRoketCurve.getSpacedPoints( 100 ) );
        // let moonRoketLine = new THREE.Line(
        //     new THREE.BufferGeometry( ).setFromPoints( moonRoketCurve.getSpacedPoints( 100 ) ),
        //     new THREE.LineBasicMaterial( { color: 0xffffaa } )
        // );
        // moonWrap.add( moonRoketLine );
        /**
         * moonRoketTl
         */
        moonRoket.userData.curvePos = 0.01
        let moonRoketTl = gsap.timeline({paused:false,repeat:0})

            .to(moonRoket.scale,{duration:40,x:1,y:1,z:1,ease:"power4.out"},0)
            .to(moonRoket.scale,{duration:20,x:3,y:3,z:3,ease:"power4.out"},">")
            .to(moonRoket.userData,{duration:70,curvePos:1,ease:"sine.out"
                ,onUpdate:function () {
                    moonRoket.visible = true;
                    moonRoket.position.copy(moonRoketCurve.getPoint(moonRoket.userData.curvePos))
                    // moonRoket.quaternion.setFromUnitVectors ( axisX, moonRoketCurve.getTangent( moonRoket.userData.curvePos ) );
                }

            },0)
            // .to(moonRoketIn.rotation,{duration:20,x:THREE.MathUtils.degToRad(-180),y:THREE.MathUtils.degToRad(-10),z:THREE.MathUtils.degToRad(-90),ease:"none"},">-30")
            .to(moonRoketIn.rotation,{duration:20,x:THREE.MathUtils.degToRad(-90),y:THREE.MathUtils.degToRad(-90),z:THREE.MathUtils.degToRad(10),ease:"none"},">-40")
            .to(moonRoket.rotation,{duration:20,x:THREE.MathUtils.degToRad(0),y:THREE.MathUtils.degToRad(20),z:THREE.MathUtils.degToRad(0),ease:"none"},"<")
            .add("endPussi",">")

            .to(".chatAsBeautiful",{autoAlpha:1},"endPussi-=5")
            .from(".chatAsBeautiful .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .from(".chatAsBeautiful .content",{duration:1,opacity:0,ease:"none"},"<")

            // .add(typeAnim(".chatAsBeautiful .dialog1 .dialog_role","dialog"),"<")
            .add(arrTextAnim["chatAsBeautiful"].restart(),"<")

            .to(".chatAsBeautiful .content .dialog",{duration:0.5,opacity:0,ease:"sine.in"},">+0.5")
            .to(".chatAsBeautiful .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .to(".chatAsBeautiful",{autoAlpha:0},"<")
            .add("endPussiText",">")

            .to(cameraTarget.position,{duration:10,x:7.5,z:3,ease:"power1.inOut"},"endPussi-=15")
            .to(camera.position,{duration:10,x:-8,y:0,z:5,ease:"power1.inOut"},"<")

            .to(cameraTarget.position,{duration:10,x:0,ease:"power1.inOut"},"endPussiText-=5")
            .to(camera.position,{duration:10,x:0,y:0,z:25,ease:"power1.inOut"},"<")
            // .to(moonRoket.scale,{duration:20,x:0,y:0,z:0,ease:"power4.out"},"<+5")
            .to(moonRoket.scale,{duration:10,x:1.5,y:1.5,z:1.5,ease:"power1.out"},"<+2")
            .to(moonRoketMaterial.material,{duration:5,opacity:0,ease:"sine.out"},">")
            .to(moonRoketLight,{duration:5,intensity:0,ease:"sine.out"},"<")

        /**
         * sputnikTl
         */
        sputnik.userData.curvePos = 0.01
        let sputnikTl = gsap.timeline({paused:true,repeat:0})
            .from(sputnik.scale,{duration:0.01,x:0,y:0,z:0,ease:"none"})
            .to(sputnik.userData,{duration:(21*60+6.2)-(19*60+5.2),curvePos:1,ease:"none"
                ,onUpdate:function () {
                        sputnik.visible = true;
                        sputnik.position.copy(curve.getPoint(sputnik.userData.curvePos))
                        sputnik.quaternion.setFromUnitVectors ( axisX, curve.getTangent( sputnik.userData.curvePos ) );


                    genesisDate = new Date().getTime() + (this.duration() - this.time()) * 1000
                    clearInterval(timerInterval)
                    timerEnd()
                }

            })
            .add(
                gsap.timeline()
                    .to(audioStory,{duration:0.01,progress:(19*60+5.2)})
                    .to(audioStory.id,{duration:0.01,attr:{"data-play": true},volume:1,currentTime:(19*60+5.2)},"<")
                    .to(audioStory,{duration:(21*60+6.2)-(19*60+5.2),progress:(21*60+6.2),ease:"none"},">")
                    .to(audioStory.id,{duration:0.01,attr:{"data-play": false},volume:0},">")

            ,"<")
            .add("endTimer",">")
            .to(".timerEnd",{duration:5,top:"15%",fontSize:10,scale:1,autoAlpha:1,transformOrigin:"50% 50%",ease:"sine.inOut"},"<")
            .to(".timerEnd",{duration:0.5,repeat:19,yoyo:true,textShadow:"0px 0px 5px #ff1111",webkitTextStroke:"1px #ff0000",ease:"sine.inOut"},"endTimer-=10")
            .add(moonRoketTl.restart(),"endTimer-=82")
            // .to(audioStory.id,{duration:0.01,attr:{"data-play": false}})
            .to(sputnik.scale,{duration:0.01,x:0,y:0,z:0,ease:"none"})


        /**
         * chatItWorksTl
         */
        let chatItWorksTl = gsap.timeline({paused:true,repeat:0})
            .to(".timerEnd",{duration:1,autoAlpha:0,ease:"sine.inOut"},)
            .add(
                gsap.timeline()
                    .to(audioStory,{duration:0.01,progress:(21*60+6.2)})
                    .to(audioStory.id,{duration:0.01,attr:{"data-play": true},volume:1,currentTime:(21*60+6.2)},"<")
                    .to(audioStory,{duration:(22*60+7.1)-(21*60+6.2),progress:(22*60+7.1),ease:"none"},">")
                    // .to(audioStory.id,{duration:2,volume:0.2},">-10")
                    .to(audioStory.id,{duration:0.01,attr:{"data-play": false},volume:0},">")


                ,0)


            .to(".chatItWorks",{autoAlpha:1},61.5)
            .from(".chatItWorks .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .from(".chatItWorks .content",{duration:1,opacity:0,ease:"none"},"<")

            .add(arrTextAnim["chatItWorks"].restart(),"<")
            .from(".smartapeMonkey",{duration:2,y:"100%",ease:"back.in(1.5)"    },">-15")

            .to(".chatItWorks .content .dialog",{duration:0.5,opacity:0,ease:"sine.in"})
            .to(".chatItWorks .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .to(".chatItWorks",{autoAlpha:0},"<")

            ///////chatHeartBlockFnc
            // .call(()=>{createConnect()},null,0)
            // .call(()=>{chatHeartBlockFnc(true)},null,0)
            // .call(()=>{chatHeartBlockFnc(false)},null,25)

        /**
         * presentationTl
         */
        let slideChatTl = arrTextAnim["chatForPresentation"]
        let presentationTl = gsap.timeline({paused:true})
            .to(".smartapePresentation .chatForStory",{autoAlpha:1})
            // .add(typeAnim(".smartapePresentation .chatForStory .title h2","title"),"<")
            // .to(".smartapePresentation .chatForStory .title",{duration:2,autoAlpha:0,ease:"sine.out"},">+0.5")

            .from(".smartapePresentation .chatForStory .content",{duration:1,width:"0%",ease:"back.out(1)"},"<")
            .from(".smartapePresentation .chatForStory .content",{duration:1,opacity:0,ease:"none"},"<+2")

            .add(slideChatTl.restart(),">")
            .add("startPres","<")
            .add("endPresentation","<")

            .to(".smartapePresentation .chatForStory .content .dialog",{duration:0.5,opacity:0,ease:"sine.in"})
            .to(".smartapePresentation .chatForStory .content",{duration:1,width:"0%",ease:"back.out(1)"},">")
            .to(".smartapePresentation .chatForStory",{autoAlpha:0},"<")

            .to(".videoHowInstall",{autoAlpha:1},"startPres-=2")
            .from(".videoHowInstall",{duration:2,scale:0,transformOrigin:"50% 50%"},"<")
            .to(".videoHowInstall",{duration:2,borderRadius:"0%",transformOrigin:"50% 50%"},"<")
            .from(".videoHowInstall video",{duration:2,scale:3,transformOrigin:"50% 50%"},"<")
            .add(
                gsap.timeline({})
                    .to(videoStory,{duration:0.01,progress:0})
                    .to(videoStory.id,{duration:0.01,attr:{"data-play": true},volume:1,currentTime:0},"<")
                    .to(videoStory,{duration:35,progress:35,ease:"none"},">")
                    // .to(videoStory.id,{duration:2,volume:0.2},">-10")
                    .to(videoStory.id,{duration:0.01,attr:{"data-play": false},volume:0},">")
                ,"startPres")
            .to(".videoHowInstall",{duration:2,scale:0,transformOrigin:"50% 50%"},">+2")
            .to(".videoHowInstall",{duration:2,borderRadius:"100%",transformOrigin:"50% 50%"},"<")
            .to(".videoHowInstall video",{duration:2,scale:3,transformOrigin:"50% 50%"},"<")
            .to(".videoHowInstall",{autoAlpha:0},">")


        //slide
        for(let i = 1; i <= 22; i++ ){

            if( i!=9 ){
                presentationTl
                    .to(slideAnimation(`slide${i}`),{duration:(slideChatTl.labels[`slide${i}E`]-slideChatTl.labels[`slide${i}S`]),progress:1,ease:"none"},"startPres+="+slideChatTl.labels[`slide${i}S`])
                if( i==1){
                    //slide1i1
                    presentationTl
                        .to(slideAnimation("slide1i1"),{duration:(slideChatTl.labels["slide1i1E"]-slideChatTl.labels["slide1i1S"]),progress:1,ease:"none"},"startPres+="+slideChatTl.labels["slide1i1S"])
                }
            }else{
                //slide9
                presentationTl
                    .add(
                        gsap.timeline()
                            .to(cameraTarget.position,{duration:2,x:13,y:0,z:0,ease:"sine.inOut"},"<")
                            .to(camera.position,{duration:2,x:-5,y:0,z:22,ease:"sine.inOut"},"<")
                            .to(cameraTarget.position,{duration:2,x:19,y:0,z:0,ease:"sine.inOut"},">+36")
                            .to(camera.position,{duration:2,x:-1.5,y:0,z:20,ease:"sine.inOut"},"<")
                            .duration(slideChatTl.labels["slide9E"]-slideChatTl.labels["slide9S"])
                        ,"startPres+="+slideChatTl.labels["slide9S"])
            }
        }
        presentationTl
            .to(".smartapeMonkey",{duration:2,y:"100%",ease:"back.out(1.5)"},">")
            .to(".smartapePresentation",{duration:1,autoAlpha:0},"<")




        //////////


        /**
         * endTitleTl
         */
        let endTitleHeight = document.querySelector(".endTitle .content").offsetHeight + window.innerHeight
        let endTitleS = 35*60+8.05;
        let endTitleE = 38*60+56;
        let endTitleD = endTitleE - endTitleS

        let endTitleTl = gsap.timeline({paused:true})
            .to(".endTitle",{autoAlpha:1},"qq")
            .to(".endTitle .content",{duration:endTitleD,y:-endTitleHeight,ease:"none"},"<")
            .to(".endTitle .content",{duration:3,opacity:0,ease:"sine.out"},">-3")
            .add(
                gsap.timeline()
                    .to(audioStory,{duration:0.01,progress:endTitleS})
                    .to(audioStory.id,{duration:0.01,attr:{"data-play": true},volume:1,currentTime:endTitleS},"<")
                    .to(audioStory.id,{duration:3,onUpdate:function () {
                            audioStory.id.volume = 1
                            audioStory.id.setAttribute("data-play","true");
                        }},"<")
                    .to(audioStory,{duration:endTitleD,progress:endTitleE,ease:"none"},"<")
                    // .to(audioStory.id,{duration:2,volume:0.2},">-10")
                    .to(audioStory.id,{duration:0.01,attr:{"data-play": false},volume:0},">")


                ,"qq")
            .to(".endTitle",{duration:5,autoAlpha:0},">-5")


        /**
         *
         ************ mainTl ************
         *
         *
         */

        cameraTarget.position.set(0,500,0)
        gsap.set(".timerEnd",{top:"-10%",fontSize:10,scale:0.5,autoAlpha:0,transformOrigin:"50% 50%"})

        mainTl = gsap.timeline({id:"mainTl",paused:true,onStart:()=>{
                document.body.classList.add("animEarthStart");
            } })

            .set(".text-wrapper",{opacity:0,y:10})
            // .to(".btn-home",{duration:0.5,autoAlpha:0})
            .to(".startScreen",{duration:1,autoAlpha:0,display:"none"},"<")
            .to(".gs-dev-tools",{duration:1,autoAlpha:1,y:"-100%"},"<")

            .add(starWarsTl.restart())
            .add(chatAfterStoryTl.restart(),">-2")

            .to(".subtitles-wrapper",{duration:1,maxWidth:"100%",ease:"back.out(1)"},"qq-=1")
            .to(".subtitles-wrapper",{duration:1,opacity:1,ease:"none"},"<")
        //
        let timeRotate = arrTextAnim["subtitleEarth"].duration()
        mainTl
            .add(earthAnim.restart(),"<")
            .add("endManifest",">")
            .to(cameraTarget.position,{duration:2,y:0,ease:"power1.inOut"},"<")
            .to(camera.position,{duration:3,y:0,z:25,ease:"power1.inOut"},"<")
            .to(moonWrap.rotation,{duration:timeRotate,y:"+=-"+THREE.MathUtils.degToRad(360*timeRotate/120),ease:"none"},"<")
            .to(earth.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/60),ease:"none"},"<")
            .to(".subtitles-wrapper",{duration:1,width:"0%",ease:"back.out(1)"},"endManifest")
            .to(".subtitles-wrapper",{duration:1,opacity:0,ease:"none"},"<")

        timeRotate = chatAfterManifest.duration()
        mainTl
            .add(chatAfterManifest.restart(),"endManifest")
            .to(moonWrap.rotation,{duration:timeRotate,y:"+=-"+THREE.MathUtils.degToRad(360*timeRotate/120),ease:"none"},"<")
            .to(earth.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/60),ease:"none"},"<")

        timeRotate = chatAfterDodecadronTl.duration()
        mainTl
            .add(chatAfterDodecadronTl.restart(),">+1")
            .add("endchatAfterDodecadron",">")
            .to(camera.position,{duration:3,x:-5,z:13,ease:"sine.inOut"},"<-1")
            .to(cameraTarget.position,{duration:3,x: 8, z:-20,ease:"sine.inOut"},"<")
            .add(dodacahedronTl.restart().duration(chatAfterDodecadronTl.totalDuration()),"<")

            .to(moonWrap.rotation,{duration:timeRotate,y:"+=-"+THREE.MathUtils.degToRad(360*timeRotate/120*(720/(360*timeRotate/120))),ease:"none"},"<")
            .to(earth.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/60*(720/(360*timeRotate/120))),ease:"none"},"<")
            .to(cameraWrapper.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/120*(720/(360*timeRotate/120))),ease:"none"},"<")

            .to(camera.position,{duration:3,x:-10,y:0,z:14,ease:"sine.inOut"})
            .to(cameraTarget.position,{duration:3,x:13,y:-0.5, z:0,ease:"sine.inOut"},"<")

        timeRotate = chatCheckDodecadronTl.duration()+2
        mainTl
            .to(moonWrap.rotation,{duration:timeRotate,y:"+=-"+THREE.MathUtils.degToRad(360*timeRotate/120*(720/(360*timeRotate/120))),ease:"none"},"<-1")
            .to(earth.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/60*(720/(360*timeRotate/120))),ease:"none"},"<")
            .to(cameraWrapper.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/120*(720/(360*timeRotate/120))),ease:"none"},"<")
            .add(chatCheckDodecadronTl.restart(),"<+3")



            .to(camera.position,{duration:3,x:0,y:0,z:25,ease:"sine.inOut"},">-1")
            .to(cameraTarget.position,{duration:3,x:0,y:0, z:0,ease:"sine.inOut"},"<")


        timeRotate = sputnikTl.duration()
        mainTl
            .add(sputnikTl.restart(),">-3")
            .add("endPlanetParad",">")
            .to(moonWrap.rotation,{duration:timeRotate,y:"+=-"+THREE.MathUtils.degToRad(360*timeRotate/120*0.85),ease:"none"},"<")
            .to(earth.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/60*0.85),ease:"none"},"<")
            .to(cameraWrapper.rotation,{duration:20,y:"+="+THREE.MathUtils.degToRad(-40),ease:"none"},">-80")
            .to(cameraWrapper.rotation,{duration:20,y:"+="+THREE.MathUtils.degToRad(20),ease:"none"},">")

        timeRotate = chatItWorksTl.duration()
        mainTl
            .to(moonWrap.rotation,{duration:timeRotate,y:"+=-"+THREE.MathUtils.degToRad(360*timeRotate/120),ease:"none"},"endPlanetParad")
            .to(earth.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/60),ease:"none"},"<")
            .to(cameraWrapper.rotation,{duration:70,y:"+=-"+THREE.MathUtils.degToRad(180),ease:"sine.inOut"},"endPlanetParad")
            // .to(cameraWrapper.rotation,{duration:timeRotate-16,y:"+="+THREE.MathUtils.degToRad(360*(timeRotate-16)/120),ease:"none"},"endPlanetParad+=15")
            .add(chatItWorksTl.restart(),"endPlanetParad")

            .to(".header",{duration:1,autoAlpha:1},"<+5")
            .to(cameraTarget.position,{duration:15,x:7.5,y:0,z:0,ease:"sine.inOut"},"<")

            .to(cameraWrapper.rotation,{duration:timeRotate-70,y:"+="+THREE.MathUtils.degToRad(360*(timeRotate-70)/120),ease:"sine.in"},"endPlanetParad+=70")
            .to(cameraTarget.position,{duration:5,x:19,y:0,z:0,ease:"sine.inOut"},">-8")
            .to(camera.position,{duration:5,x:-1.5,y:0,z:20,ease:"sine.inOut"},"<")

        timeRotate = presentationTl.duration()+endTitleTl.duration()-2.5
        mainTl
            .to(moonWrap.rotation,{duration:timeRotate,y:"+=-"+THREE.MathUtils.degToRad(360*timeRotate/120),ease:"none"},"-=1")
            .to(earth.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*timeRotate/60),ease:"none"},"<")
            .to(cameraWrapper.rotation,{duration:timeRotate,y:"+="+THREE.MathUtils.degToRad(360*(timeRotate)/120),ease:"none"},"<")

            .add(presentationTl.restart(),"<-1")

            .add(endTitleTl.restart(),">-2")
            .to(".wrapper-animation > *",{duration:1,autoAlpha:0},">")

        ////////////////////////////

        /**
         * function start/stop audio
         */
        let mainTlProg = 0
        setInterval(()=>{
            if (audioStory.id.paused !== undefined) {
                if (mainTl.paused() || mainTl.progress() == mainTlProg) {
                    if (audioStory.id.getAttribute("data-play") == "true" && !audioStory.id.paused) {
                        audioStory.id.pause()
                        audioStory.id.currentTime = audioStory.progress
                    }
                } else {
                    if (audioStory.id.getAttribute("data-play") == "true" && audioStory.id.paused) {
                        audioStory.id.currentTime = audioStory.progress
                        audioStory.id.play()
                    }
                }
                // mainTlProg = mainTl.progress()
            }
            if (videoStory.id.paused !== undefined) {
                if (mainTl.paused() || mainTl.progress() == mainTlProg) {
                    if (videoStory.id.getAttribute("data-play") == "true" && !videoStory.id.paused) {
                        videoStory.id.pause()
                        videoStory.id.currentTime = videoStory.progress
                    }
                } else {
                    if (videoStory.id.getAttribute("data-play") == "true" && videoStory.id.paused) {
                        console.log(videoStory.progress)
                        videoStory.id.currentTime = videoStory.progress
                        videoStory.id.play()
                    }
                }
                // mainTlProg = mainTl.progress()
            }
            mainTlProg = mainTl.progress()
        }, 100)

        function firstLoadAudio(){
            if(audioStory.id.getAttribute("data-load") === "false"){

                audioStory.id.src = audioStoryMP3;
                audioStory.id.load()
                audioStory.id.volume = 0;
                audioStory.id.muted = false;
                audioStory.id.pause()
                audioStory.id.currentTime = 0
                audioStory.id.setAttribute("data-load","true")


                videoStory.id.src = videoHowInstall;
                videoStory.id.load()
                videoStory.id.volume = 0;
                videoStory.id.muted = false;
                videoStory.id.pause()
                videoStory.id.currentTime = 0
                videoStory.id.setAttribute("data-load","true")
            }
        }

        document.addEventListener("mousedown",firstLoadAudio)
        document.addEventListener("keypress",firstLoadAudio)


        if(window.location.hostname != "localhost")
            GSDevTools.create({animation:"mainTl",hideGlobalTimeline:true,timeScale:1,visibility:"auto",persist: false,inTime:0});
        else
            GSDevTools.create({animation:"mainTl",hideGlobalTimeline:true,timeScale:1,visibility:"auto",persist: false,inTime:0});

        //////////
        // first start
        gsap.timeline()
            .to(".btn-home",{duration:1,autoAlpha:1},"<")

        document.querySelector(".btn-home").addEventListener("mousedown",function () {
            startScreenTl.restart()

            // for test
            document.body.addEventListener("dblclick",function () {
                // for start main animation
                mainTl.restart()
            })
        })

    }

})
