import { gsap } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin.js";

export function typeAnim(target,type){

    function gRand(min, max) {
        return Math.random() * (max - min) + min;
    }
    gsap.registerPlugin(TextPlugin)

    if(type == "title"){
        target = document.querySelector(target)
        let targetText = target.innerHTML
        let targetTl = gsap.timeline()


        targetTl
            .to(target,{duration:0.04,text:{value:""}})
            .to(target,{duration:0.04,autoAlpha:1})

        for(let i = 0; i < targetText.length; i++){
            targetTl
                // .to(target,{duration:0.04,text:{value:target.innerHTML = targetText.slice(0,i) + String.fromCharCode(gRand(32,127))}})
                // .to(target,{duration:0.04,text:{value:target.innerHTML = targetText.slice(0,i) + String.fromCharCode(gRand(32,127))}})
                .to(target,{duration:0.04,text:{value:target.innerHTML = targetText.slice(0,i) + String.fromCharCode(gRand(32,127))}})
                .to(target,{duration:0.04,text:{value:target.innerHTML = targetText.slice(0,i) + targetText[i]}})
        }

        return targetTl
    }
    if(type == "dialog"){
        let targetTl = gsap.timeline()
        document.querySelectorAll(target).forEach(function (elem) {
            let targetLabel = elem.querySelector(".label");
            let targetText = elem.querySelector(".text");
            let targetTextContent = targetText.textContent;

            targetTl
                .set(targetText,{text:""})
                .from(elem,{display:"none"})
                .from(targetLabel,{duration:0.5,opacity:0,ease:"sine.out"})

            for(let i = 0; i < targetTextContent.length; i++){
                targetTl
                    .to(targetText,{duration:0.04,text:{value:targetText.textContent = targetTextContent.slice(0,i) + targetTextContent[i]}})
            }

        })
        return targetTl
    }
}


