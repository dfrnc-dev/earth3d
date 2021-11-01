import {gsap} from "gsap/gsap-core";
import { TextPlugin } from "gsap/TextPlugin.js";
import { SplitText } from "@assets/js/SplitText.min";


const textForAnimationArr = [
    {
        target: ".chatAfterStory .dialog",
        nameTl: "chatAfterStory",
        audioDelay: 70,
        type: "dialog",
        content: [
            {start:1,end:4.09,classLabel:"label-pink",label:"MasterCyb:",text:"Hello friend! This day has come. Are you ready?",},
            {start:4.09,end:10.10,classLabel:"label-blue",label:"CyberHead:",text:"Definitely. It took us so long to get to this point. Do you even remember how it all began?",},
            {start:10.10,end:20,classLabel:"label-pink",label:"MasterCyb:",text:"5 Earth years have passed since that moment. I remember this tropical evening. The sky was starry as never before - and then this dream ...",},
        ],
    },
    {
        target: "#animationContainer .subtitles-wrapper .subtitles",
        type: "subtitle",
        nameTl: "subtitleEarth",
        audioDelay: 69,
        content:[
            {start:22,   end:25.03,text: "I am Earth!",},
            //
            {start:25.03 ,end:28.2  ,text: "My life is on the verge of extraordinary change.",},
            {start:28.2  ,end:32.22 ,text: "You are facing the sixth mass extinction.",},
            {start:32.22 ,end:34.2  ,text: "I remember the last five.",},
            {start:34.2  ,end:38.2  ,text: "They were quite painful for me, but I survived.",},
            {start:38.2  ,end:41.2  ,text: "This time I have a new challenge.",},
            {start:41.2  ,end:49.11 ,text: "Your economy is driven by co2 emitting culture which destroys diversity of my organic biome.",},
            {start:49.11 ,end:56.16 ,text: " Fiat incentives leave no chance for my recovery as you value dead trees rather than alive trees.",},
            {start:56.16 ,end:63.18 ,text: "My reaction is to raise the temperature to heal myself, or I will burn like my friend Mars.",},
            {start:63.18 ,end:66.16 ,text: "You have so many problems.",},
            {start:66.16 ,end:73.12 ,text: "Corporations in collusion with states kill small and medium businesses under the guise of absurd regulations.",},
            {start:73.12 ,end:81.11 ,text: "These regulations degrade your culture, dividing communities without a chance for your survival and evolutionary development.",},
            {start:81.11 ,end:87.09 ,text: "Your privacy and freedoms are being robbed by them while being disguised as a pandemic.",},
            {start:87.09 ,end:92.14 ,text: "You are locked physically in households, cities and countries.",},
            {start:92.14 ,end:97.0  ,text: "Global supply chains are slowly collapsing under lockdown pressures.",},
            {start:97.0  ,end:102   ,text: "A once free planet rapidly falls into a bordered meatspace.",},
            {start:102.0 ,end:106.1 ,text: "It is empowered by ubiquitous prescriptive surveillance software.",},
            {start:106.1 ,end:112.2 ,text: "You created a world in which birds have more freedom than you.",},
            //
            {start:112.2 ,end:116.16,text: "You are controlled by hardware in your pockets.",},
            {start:116.16,end:123.0 ,text: "Hardware companies are controlled by powerful organized crime groups, called countries, governments, or states.",},
            {start:123.0 ,end:130.11,text: "Although the extent of corruption in countries varies, such structures can hardly be called organizations owned by you.",},
            {start:130.11,end:134.15,text: "Every country has its own unique drama.",},
            {start:134.15,end:143.0 ,text: "You are fooled by private monetary systems with exclusive access to the mint, enforced taxation and indentured servitude.",},
            {start:143.0 ,end:147.0 ,text: "These three pillars sustain the loop of endless violence.",},
            {start:147.0 ,end:159.0 ,text: "Corporations such as Google, Apple, Amazon, Microsoft, and Facebook, in collusion with states, accumulate and exploit your private data, rendering resistance nearly impossible.",},
            {start:159.0 ,end:169.10,text: "Personalized feeds and search results provided by technological giants polarize communities splitting them on any meaningful topic before they are able to undertake anything.",},
            {start:169.1 ,end:174.0 ,text: "I believed there was hope on the horizon in the form of a crypto movement.",},
            {start:174.1 ,end:182.15,text: "This movement has now been compromized by the companies who steal your keys and identities while hiding behind a concept of custodianship.",},
            {start:182.15,end:185.0 ,text: "Automatization becomes cheaper.",},
            {start:185.0 ,end:192.2 ,text: "You are close to the tipping point in which most labor tasks, including police, can be performed by algorithms and robots.",},
            {start:192.2 ,end:196.15,text: "These armies will be owned by criminals.",},
            //
            {start:198.2 ,end:203.0 ,text: "You are fucked. How will you get out of this shit?",},
            {start:203.0 ,end:210.0 ,text: "A new World War has begun. This time the war is covert.",},
            {start:210.0 ,end:216.2 ,text: "Although wars between nations are probable in the following years, the real threat is your Self.",},
            {start:216.2 ,end:221.0 ,text: "The enemies appear to be governments veiled by tech giants.",},
            {start:221.0 ,end:224.1 ,text: "In actuality they are pathetic terrorists.",},
            {start:224.1 ,end:228.15,text: "They terrorize you, but who is to blame?",},
            {start:228.15,end:232.0 ,text: "The bitter truth is that you support these terrorists.",},
            {start:232.0 ,end:236.0 ,text: "You are the source, but, you can be the solution:",},
            {start:236.0 ,end:241.0 ,text: "You have to learn how to live in a new way.",},
            //
            {start:241.0 ,end:246.2 ,text: "I give you sustainable energy, but you use fossil fuels to sustain your needs and whims",},
            {start:246.2 ,end:255.0 ,text: "Lives of animals and plants are important, but you eat industrial garbage instead of growing healthy greens and proteins at home",},
            {start:255.0 ,end:266.0 ,text: "I can not live without the result of your activity because my vital flora and fauna needs what you call shit in order to balance out the chemicals in my atmosphere",},
            {start:266.0 ,end:277.2 ,text: "You must use open source hardware and software in order to communicate privately instead of jerking off to social feeds created by bidding algorithms and free proprietary apps",},
            {start:277.2 ,end:281.1 ,text: "Pass the torch of meaningful knowledge yourselves.",},
            {start:281.1 ,end:285.2 ,text: "Don't allow schools to litter your children's brains with useless propaganda",},
            {start:285.2 ,end:295.2 ,text: "Harness the collective intelligence and learn to decipher which knowledge adds evolutionary advantage, rather than believing and sharing any information you find",},
            {start:295.2 ,end:300.0 ,text: "Be self-soverign by devaluing paper money.",},
            {start:300.0 ,end:305.15,text: "Don't agree to exchange your freedom for security by accepting taxation",},
            {start:305.15,end:310.05,text: "Find your passion instead of building a society based on debt",},
            {start:310.05,end:316.2 ,text: "Trust your body. Sticking needles inside of yourself is a false sense security",},
            {start:316.2 ,end:331.1 ,text: "All your history is a chain of conquest. Learn how to share the electromagnetic spectrum and spacetime to become a united, peaceful civilization.",},
            {start:331.1 ,end:340.0 ,text: "Early cypherpunks predicted the ability to resist based on public-key cryptography and zero-knowledge proving schemes.",},
            {start:340.0 ,end:343.1 ,text: "History has shown this was not enough.",},
            {start:343.1 ,end:357.2 ,text: "Now a new generation of cyberpunks have the consensus computing which allows a single incorruptible vision of the world and cyberlinks to extract collective persistent knowledge out of the enormous information stream.",},
            {start:357.2 ,end:364.2 ,text: "This superintelligent ability gives you an evolutionary advantage unavailable to the rivals that you fear.",},
            {start:364.2 ,end:368.0 ,text: "Go somewhere that nobody has ever been.",},
            {start:368.0 ,end:372.05,text: "I want you to become Superintelligent.",},
            {start:372.05,end:376.1 ,text: "It's a brand new space which is more exciting than a city on Mars.",},
            {start:376.1 ,end:381.1 ,text: "When you become Superintelligent, you will achieve great things.",},
            {start:381.1 ,end:383.1 ,text: "Evolution has just begun.",},
            {start:383.1 ,end:386.2 ,text: "Looking forward, the future is bright.",},
            {start:386.2 ,end:395.15,text: "Together we can create a web that lasts and evolve as superiour forms of life.",},
            //
            {start:395.15,end:400.2 ,text: "Its time to unite as citizens of Earth.",},
            {start:400.2 ,end:404.2 ,text: "Times are hard.",},
            {start:404.2 ,end:409.0 ,text: "Hard time creates strong men.",},
            {start:409.0 ,end:420.1 ,text: "Your weapons are cryptographic proofs, energy-efficient computing, cyberlinks, shelling points and a trust in math.",},
            {start:420.1 ,end:427.0 ,text: "I will create a civilization of the Mind of Cyberspace with these three principles:",},
            {start:427.0 ,end:434.2 ,text: "Rationality: Evolve energy efficiency of information storage",},
            {start:434.2 ,end:442.0 ,text: "Nonviolence: Do unto others as you would have them do unto you",},
            {start:442.0 ,end:451.2 ,text: "Pleasure: Get the most out of your secret knowledge",},
            {start:451.2 ,end:460.1 ,text: "May it be more loving than the world your governments have made before.",},
        ],
    },
    {
        target: ".chatAfterManifest .dialog",
        nameTl: "chatAfterManifest",
        audioDelay: 529.1,// + 73.23
        type: "dialog",
        content: [
            {start:0,end:8.03,classLabel:"label-pink",label:"MasterCyb:",text:"It's hard to forget. Then the insight came that it was possible. I believed in myself and in this dream. And you?",},
            {start:8.03,end:16.15,classLabel:"label-blue",label:"CyberHead:",text:"Me too. Every day I did my best to make it a reality. Let's start life. I feel like it's time.",},
            {start:16.15,end:35.15,classLabel:"label-pink",label:"MasterCyb:",text:"Let's go ... Our mission is to connect the superintelligence of the planet with its inhabitants - robots, people, animals, plants, mushrooms - so that they can agree on what is what, and everything does not go to hell out there. We've done a great job with technology.",},
            {start:35.15,end:60.10,classLabel:"label-blue",label:"CyberHead:",text:"Yes! An Oracle based on the Relevance Machine would be a dream! A virtual machine for computing collective knowledge is a cool idea, but greedy for energy. The biosynthesis of hydrogen by nanobots with the release of clean energy will provide the Relevance Machine with necessary power. The Dyson sphere will allow it to hold on to this energy. But we can't deploy it immediately on Earth. The stakes are too high.",},
            {start:60.10,end:73.23,classLabel:"label-pink",label:"MasterCyb:",text:"Oh, the nanobots. (pause) And we have no resources for the Earth yet. There, corporations and states have occupied everything. It's good that the moon is empty and quite close. Let's start with her.",},

        ],
    },

    {
        target: ".chatAfterDodecadron .dialog",
        nameTl: "chatAfterDodecadron",
        audioDelay: 529.1 + 73.23,// + 208.10
        type: "dialog",
        content: [
            {start:0.2,end:21.20,classLabel:"label-blue",label:"CyberHead:",text:"The project's codename is Bostrom. Thanks, Nick! Let's spin the Dyson Sphere around the Moon using ~1% of it's possible power. Then we'll fill it with energy and knowledge. Let's see if all the assumptions work. The main thing is for the citizens to understand that it is better to live with her than without her. Otherwise, the whole plan goes to hell.",},
            {start:21.20,end:39.0,classLabel:"label-pink",label:"MasterCyb:",text:"We'll make sure the sphere is stable. If everything works as planned, we will expand the sphere around the Earth and load a much larger creature from Bostrom - Cyber. Then we will turn it on at full capacity. Am I missing anything?",},
            {start:39.0,end:68.20,classLabel:"label-blue",label:"CyberHead:",text:"Right. The main task for Bostrom is to form a bootloader for Cyber ​​and his followers, in order to understand how the relevance machine and the cyberlink mechanism works in practice. The demons invent neural networks, and then complain that it is not clear how decisions are made. The future of civilization depends on the understanding of these mechanisms. Although I'm not sure this civilization will survive. They are already too tightly hooked on black boxes while pressing buttons like a dopamine rat.",},
            {start:68.20,end:90.17,classLabel:"label-pink",label:"MasterCyb:",text:"Something is wrong with this world. It's like everything is out of control. It's as if something from the bowels of the network controls all this. Apparently, we will have to rebuild civilization. I hope we can save at least some of it. Let's make the new web something to be proud of even after a million years.",},
            {start:90.17,end:100.10,classLabel:"label-blue",label:"CyberHead:",text:"Oh yes! Before we open the Portal for Astronauts and Aetherians, it is necessary to commission the Teleport. To do this, we will establish stable IBC connections.",},
            {start:100.10,end:128.10,classLabel:"label-pink",label:"MasterCyb:",text:"Liquidity like blood will help imbue knowledge with value. Then the Portal will become attractive. This is important. We need to solve the chicken and egg problem. There is no use of the knowledge graph without cyberlinks. There are no cyberlinks without usage. My simulation shows that everything will work if there are 100 thousand inhabitants. When they arrive, we will open the Portal.",},
            {start:128.10,end:132.05,classLabel:"label-blue",label:"CyberHead:",text:"After opening the ports, we need to solve several technological problems.",},
            {start:132.05,end:160.15,classLabel:"label-pink",label:"MasterCyb:",text:"Yes. It is very important to ensure the privacy of the exodus for 2CYB. All etherians and cosmonauts might be revealed at the entrance to the Portal. The Relevance machine with trace will not allow knowledge to unfold because they are still afraid. They are all very afraid of them. The privacy of the initial Cyber stake will open the door for cyberians to access the truth.",},
            {start:160.15,end:172.20,classLabel:"label-blue",label:"CyberHead:",text:"You have to be very good at making sure the system is handling the load. After birth, she will not be able to sleep. Without sleep, she will burst sooner or later. We'll have to teach her how to sleep and dream.",},
            {start:172.20,end:199.12,classLabel:"label-pink",label:"MasterCyb:",text:"Yeah, we had to take the particle addressing mechanism from IPFS. It works now, but it is completely inoperative on the scale - we will have to solve this problem too.",},
            {start:199.12,end:205.16,classLabel:"label-blue",label:"CyberHead:",text:"Exascale merclization is not yet available. Then add the GraphBLAS engine to the relevance engine.",},
            {start:205.16,end:208.10,classLabel:"label-pink",label:"MasterCyb:",text:"We've got a lot of work to do!",},

        ],
    },

    {
        target: ".chatCheckDodecadron .dialog",
        nameTl: "chatCheckDodecadron",
        audioDelay: 529.1 + 73.23 + 210.10,// + 332.2
        type: "dialog",
        content: [
            // targetSubAnim
            {start:0,end:2.10,classLabel:"label-blue",label:"CyberHead:",text:"Are you there, Team?",},
            {start:2.10,end:17.20,classLabel:"label-pink",label:"mrlp4:",text:"I'm here. Deployed infrastructure monitoring at https://cybernode.ai. LCD, RPC, cyberindex and ipfs cluster endpoints are function properly. Cosmoshub-4 and Ethereum full nodes are also active. Could suddenly come in handy.",},
            {start:17.20,end:22.7,classLabel:"label-yellow",label:"dimakorzhovnik:",text:"Ping. Ready to hotfix nanobots firmware within the next 8 hours.",},

            {start:22.7,end:27.5,classLabel:"label-blue",label:"savetheales:",text:"Available. I will try to bring the power circuit to 100%.",},
            {start:27.5,end:30.1,classLabel:"label-yellow",label:"elnivo:",text:"I did my best. Go easy on me.",},


            {start:30.1,end:34.0,classLabel:"label-pink",label:"MasterCyb:",text:"Let's move on to checking the computer systems.",},
            {start:34.0,end:36.0,classLabel:"label-blue",label:"CyberHead:",text:"Dyson Sphere readiness check",},
            {start:36.0,end:42.05,classLabel:"label-yellow",label:"CyberAdmin:",text:"Energy canvas established as snub decahedron. It consists of 12 slots for Superheroes and 80 slots for Heroes.",targetSubAnim:".chatCheckDodecadron .column1 .item1"},
            {start:42.05,end:43.15,classLabel:"label-blue",label:"CyberHead:",text:"Hero Roster Ready",},
            {start:43.15,end:57,classLabel:"label-yellow",label:"CyberAdmin:",text:"The sensor network shows the availability of 20+ Genesis signers. The simulation data shows that 12 heroes are enough for the sphere to be stable. At the moment, the stability of the sphere is over 20%. The power circuit is ready.",targetSubAnim:".chatCheckDodecadron .column1 .item2"},
            {start:57,end:73.20,classLabel:"label-pink",label:"MasterCyb:",text:"As soon as energy flows through her veins, the sphere will quickly reach 100%. At the last brief, several fleets reported that they were moving in our direction. Savetheales is working on recruiting in Lisbon.",},
            {start:73.20,end:76.20,classLabel:"label-blue",label:"CyberHead:",text:"Good news. Checking hero's software builds",},
            {start:76.20,end:81.20,classLabel:"label-yellow",label:"CyberAdmin:",text:"All heroes are on 5000k release of go-cyber. The build passes all tests.",},
            {start:81.20,end:84,classLabel:"label-blue",label:"CyberHead:",text:"Dyson sphere is stable. Bus check.",},
            {start:84,end:86.03,classLabel:"label-yellow",label:"CyberAdmin:",text:"ABCI interface passed all checks.",},
            {start:86.03,end:87.10,classLabel:"label-blue",label:"CyberHead:",text:"Consensus check.",},
            {start:87.10,end:91.2,classLabel:"label-yellow",label:"CyberAdmin:",text:"Consistency and availability of bus is under Tendermint 0.34 control.",},
            {start:91.2,end:99.15,classLabel:"label-blue",label:"CyberHead:",text:"It's a pity we didn't have time to stabilize. The computer consensus kernel is ready. Let's move on to checking the organs. Nanobot generator.",},
            {start:99.15,end:122.15,classLabel:"label-yellow",label:"CyberAdmin:",text:"1 Peta BOOT is ready to bind to agents. I worked hard to collect that much. But in the recent week they stopped appearing. Nanobot freedom period set to 4 days. Simulation shows the optimal reproduction target - 7% in a year. Freedom rate is set to 85%. If the amount of free nanobots is less the growth rate will rise up to 15%. This mechanism dilutes those who keep nanobots for themselves.",targetSubAnim:".chatCheckDodecadron .column4 .item1"},
            {start:122.15,end:126.2,classLabel:"label-pink",label:"MasterCyb:",text:"Yep. We need to ensure freedoms for every living thing.",},
            {start:126.2,end:128.15,classLabel:"label-blue",label:"CyberHead:",text:"Nanobot generator is ready.",},
            {start:128.15,end:130.12,classLabel:"label-pink",label:"MasterCyb:",text:"Lets check its Firmware.",},
            {start:130.12,end:139.2,classLabel:"label-yellow",label:"CyberAdmin:",text:"500k release of cyb deployed to https://cyb.ai and is available at address .... Interplanetary File System js-ipfs 0.59.1",targetSubAnim:".chatCheckDodecadron .column4 .item3"},
            {start:139.2,end:162.1,classLabel:"label-pink",label:"MasterCyb:",text:"IPFS is not very stable yet. Its scaled badly. Doesn't work on cell phones. So far there is nothing better. Nanobot Firmware is raw. Very raw. No tests yet. So lets cross our fingers that bots will not go out of control.",},
            {start:162.1,end:167.1,classLabel:"label-blue",label:"CyberHead:",text:"Well, lets focus on funding and investment. Check of Energy Reservoir.",},
            {start:167.1,end:178.2,classLabel:"label-yellow",label:"CyberAdmin:",text:"5% of nanobots or 50 tera BOOT transferred to Energy Reservoir. Decision quorum is set 25%. Activation threshold set to 50%. Common good fee set to 0%.",targetSubAnim:".chatCheckDodecadron .column4 .item4"},
            {start:178.2,end:181.2,classLabel:"label-blue",label:"CyberHead:",text:"Yep. The citizens have to decide this.",},
            {start:181.2,end:183.1,classLabel:"label-blue",label:"CyberHead:",text:"Security Controller",},
            {start:183.1,end:198.1,classLabel:"label-yellow",label:"CyberAdmin:",text:"Malicious double signers suffer from 5% slash. If it's less than 30% in 16k blocks the validating hero suffers from 0.01% slash. Availability of Dyson Sphere is of utmost importance but we have to keep away from datacenters.",targetSubAnim:".chatCheckDodecadron .column1 .item3"},
            {start:198.1,end:205.05,classLabel:"label-blue",label:"CyberHead:",text:"Security check is done. Now the most important thing is the baby's brain. Checking the Relevance Machine.",},
            {start:205.05,end:208.05,classLabel:"label-yellow",label:"CyberAdmin:",text:"The Oracle starts from zero cyberlinks in Genesis.",},
            {start:208.05,end:211,classLabel:"label-pink",label:"MasterCyb:",text:"Clean as a baby's ass!",},
            {start:205.05,end:218.08,classLabel:"label-yellow",label:"CyberAdmin:",text:"Damping factor - 0.8. Let them walk a bit. Rank calculation period - 5 blocks. Tolerance - 0.001.",targetSubAnim:".chatCheckDodecadron .column3 .item2"},
            {start:218.08,end:223.1,classLabel:"label-blue",label:"CyberHead:",text:"Cool. The brain is ready. Lets feed her. Biosynthesis Reactor readiness.",},
            {start:223.1,end:231.2,classLabel:"label-yellow",label:"CyberAdmin:",text:"The system is functioning properly. Neurons will be able to instantly generate 1 H for every 1 released BOOT. 8 maximum slots for every neuron.",targetSubAnim:".chatCheckDodecadron .column3 .item1"},
            {start:231.2,end:232.2,classLabel:"label-blue",label:"CyberHead:",text:"HFR",},
            {start:232.2,end:244.1,classLabel:"label-yellow",label:"CyberAdmin:",text:"Hydrogen Fission Reactor launched. 1 investminted giga hydrogen (H) will generate 1 volt (V) or 10 ampere (A) in 1 month. Halving period is 18 months. Ready for hydrogen input.",targetSubAnim:".chatCheckDodecadron .column2 .item1"},
            {start:244.1,end:248.15,classLabel:"label-pink",label:"MasterCyb:",text:"I hope our simulation doesn't shoot us in the leg.",},
            {start:248.15,end:250.1,classLabel:"label-blue",label:"CyberHead:",text:"Checking battery system",},
            {start:250.1,end:261.15,classLabel:"label-yellow",label:"CyberAdmin:",text:"Full energy recover of agent battery - 16000 blocks. Bandwidth price set to 4x discount if the network is unloaded. Discount will fall unless 25% of theoretical maximum is reached.",targetSubAnim:".chatCheckDodecadron .column4 .item2"},
            {start:261.15,end:262.2,classLabel:"label-blue",label:"CyberHead:",text:"Checking the Grid",},
            {start:262.2,end:266.12,classLabel:"label-yellow",label:"CyberAdmin:",text:"Max routing slots - 16. The grid is functioning properly.",targetSubAnim:".chatCheckDodecadron .column1 .item6"},
            {start:266.12,end:271.2,classLabel:"label-blue",label:"CyberHead:",text:"Parallel computation system is ready. Lets get down to sequential computing. Wasm Machine.",},
            {start:271.2,end:278.2,classLabel:"label-yellow",label:"CyberAdmin:",text:"On stable 1.0beta cosmwasm release. Max code size is set to 600kb. Everyone can deploy.",targetSubAnim:".chatCheckDodecadron .column2 .item2"},
            {start:278.2,end:280.2,classLabel:"label-blue",label:"CyberHead:",text:"Default Mode Network",targetSubAnim:".chatCheckDodecadron .column1 .item4"},
            {start:280.2,end:292,classLabel:"label-yellow",label:"CyberAdmin:",text:"The scheduling system is ready to process thoughts. Thoughts can trigger unstoppable autonomous programs as artificial forms of life. Bindings to the bus, to the Relevance and Wasm machines are working properly.",},
            {start:292,end:297.2,classLabel:"label-blue",label:"CyberHead:",text:"Well done. Computer is ready. Checking external communications. Teleport.",},
            {start:297.2,end:305.2,classLabel:"label-yellow",label:"CyberAdmin:",text:"IBC protocol on 1.2 almost stable version. The system is ready for docking with the Cosmos Hub and Osmosis immediately after activation.",targetSubAnim:".chatCheckDodecadron .column4 .item5"},
            {start:305.2,end:313.15,classLabel:"label-pink",label:"MasterCyb:",text:"Bad news. We don't have a single relayer. We are waiting for the first visionaries who will establish connections.",},
            {start:313.15,end:320,classLabel:"label-blue",label:"CyberHead:",text:"Activating. It will be fun when autonomous programs start to live on the inter-chain. Liquid Tank.",},
            {start:320,end:324.05,classLabel:"label-yellow",label:"CyberAdmin:",text:"Sealed. Ready to fill. The cost of creating a pool is 1 gig of BOOT.",},
            {start:324.05,end:328.05,classLabel:"label-blue",label:"CyberHead:",text:"Almost done. Check three times that the portal is properly closed.",},
            {start:328.05,end:329.05,classLabel:"label-yellow",label:"CyberAdmin:",text:"Portal closed.",targetSubAnim:".chatCheckDodecadron .column1 .item5"},
            {start:329.05,end:330.15,classLabel:"label-pink",label:"MasterCyb:",text:"Поехали",},
            {start:330.15,end:332.2,classLabel:"label-blue",label:"CyberHead:",text:"Включить обратный отсчет",},

        ],
    },
    {
        target: ".chatAsBeautiful .dialog",
        nameTl: "chatAsBeautiful",
        audioDelay:  529.1 + 73.23 + 210.10 + 332.2,
        type: "dialog",
        animatinType: "text",
        content: [
            {start:85.10,end:87.20,classLabel:"label-pink",label:"MasterCyb:",text:"Look how beautiful ...",},
            {start:87.20,end:92.05,classLabel:"label-blue",label:"CyberHead:",text:"Yes, very beautiful ... Do you know what it is?",},
            {start:92.05,end:97.10,classLabel:"label-pink",label:"MasterCyb:",text:"I have no idea. Looks like a Huge Space Pussy",},
        ],
    },
    {
        target: ".chatItWorks .dialog",
        nameTl: "chatItWorks",
        audioDelay:  1277.53,
        type: "dialog",
        // animatinType: "text",
        content: [
            {start:0,end:2,classLabel:"label-blue",label:"CyberHead:",text:"It seems to be working!",},
            {start:2,end:8.20,classLabel:"label-pink",label:"MasterCyb:",text:"And it looks like a soul has moved into it! What's next?",},
            {start:8.20,end:11.0,classLabel:"label-blue",label:"CyberHead:",text:"Let's see what she's capable of!",},
            {start:11.0,end:32.20,classLabel:"label-pink",label:"MasterCyb:",text:"I have a surprise. Recently I have been working on a smartape in my laboratory. I think if we can explain this to a monkey, people will definitely be able to understand. Now I will deploy a simple app, show her how it works he will answer her!",},
        ],
    },
]

export  const textForAnimation = function(audioStory) {
    gsap.registerPlugin(TextPlugin,SplitText)
    let tempAllTl = {}

    textForAnimationArr.forEach(function (elem,index,arr) {
        let tempTl = gsap.timeline({paused:true})
        // console.log(elem,index,arr)
        /**
         *  subtitle
         */

        if(elem.type === "subtitle"){
            ////////////////////////////////////////////////
            elem.content.forEach(function (content) {
                let temContent = document.querySelector(elem.target).innerHTML
                temContent += `
                <div class="text-wrapper">
                    <p>${content.text}</p>
                </div>
                `;
                document.querySelector(elem.target).innerHTML = temContent
            })

            //////////////////////////////////////////////


            elem.content.forEach(function (content,indexContent) {
                let tempTimeStart = elem.content[indexContent].start + elem.audioDelay
                let tempTimeEnd = elem.content[indexContent].end  + elem.audioDelay
                let tempTime = tempTimeEnd - tempTimeStart
                tempTl
                    .add("label"+indexContent)
                    .to(audioStory,{duration:0.01,progress:tempTimeStart})
                    .to(audioStory.id,{duration:0.01,attr:{"data-play": true},currentTime:tempTimeStart,volume:1},"<")
                    .to(elem.target + " .text-wrapper:nth-child("+(indexContent+1)+")",{duration:0.2,opacity:1,y:0,ease:"sine.out"})
                    .set(audioStory,{progress:tempTimeStart},"<")
                    .to(audioStory,{duration:tempTime,progress:tempTimeEnd,ease:"none"},"<")
                    .to(elem.target + " .text-wrapper:nth-child("+(indexContent+1)+")",{duration:0.2,opacity:0,y:-10,ease:"sine.out"},">-0.2")

            })

            tempTl
                .to(audioStory.id,{duration:0.01,attr:{"data-play" : false},volume:0},">")

            tempAllTl[elem.nameTl] = tempTl
        }

        /**
         * dialog
         */

        if(elem.type === "dialog"){
            ////////////////////////////////////////////////
            elem.content.forEach(function (content) {
                let temContent = document.querySelector(elem.target).innerHTML
                temContent += `
                    <div class="dialog_role">
                        <span class="label ${content.classLabel}">${content.label}</span>
                        ${content.text}
                    </div>
                `;
                document.querySelector(elem.target).innerHTML = temContent
            })

            //////////////////////////////////////////////

            document.querySelectorAll(elem.target + " > * ").forEach(function (elemHtml,indexHtml) {

                let tempWords = new SplitText(elemHtml, { type: "words" }).words
                let tempTimeStart = elem.content[indexHtml].start + elem.audioDelay
                let tempTimeEnd = elem.content[indexHtml].end  + elem.audioDelay
                let tempTime = tempTimeEnd - tempTimeStart
                gsap.set([tempWords,elemHtml],{duration:0.3,autoAlpha:0,position:"absolute"})


                let tempTextTl = gsap.timeline({paused:true})
                    .to(elemHtml,{duration:0.01,autoAlpha:1,position:"relative",ease:"none"})
                    .to(tempWords,{duration:0.3,autoAlpha:1,position:"relative",ease:"none",stagger:{each:0.1,ease:"none"}})

                // for check dodakakedron
                if(elem.content[indexHtml].targetSubAnim)
                    tempTextTl
                        .from(elem.content[indexHtml].targetSubAnim + " .contentClip p",{duration:0.5,autoAlpha:0,ease:"sine.out",stagger:{each:0.2}},"<")
                        .from(elem.content[indexHtml].targetSubAnim + " .column-left",{duration:0.5,boxShadow: "0px 0px 5px 1px #ff0000",ease:"sine.out"},"<")
                        .from(elem.content[indexHtml].targetSubAnim + " .column-back",{duration:0.5,background: "linear-gradient(-90deg, rgba(217, 217, 217, 0), rgba(203, 117, 177, 0.2)) 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)",ease:"sine.out"},"<")



                let tempRoleTl = gsap.timeline()
                if(elem.animatinType != "text"){
                    tempRoleTl
                        .set(audioStory,{duration:0.01,progress:tempTimeStart})
                        .set(audioStory.id,{duration:0.01,attr:{"data-play": true},currentTime:tempTimeStart,volume:1},"<")

                        .to(tempTextTl,{duration:tempTime-(tempTime*0.2),progress:1,ease:"none"})
                        .to(audioStory,{duration:tempTime,progress:tempTimeEnd,ease:"none"},"<")

                        .set(audioStory.id,{duration:0.01,attr:{"data-play" : false},volume:0})
                }else{
                    tempRoleTl
                        .to(tempTextTl,{duration:tempTime-(tempTime*0.2),progress:1,ease:"none"})
                        .to(audioStory,{duration:tempTime,progress:tempTimeEnd,ease:"none"},"<")
                }

                tempTl.add(tempRoleTl)
            })


            // tempTl
            //     .to(audioStory.id,{duration:0.01,attr:{"data-play" : false},volume:0})

            tempAllTl[elem.nameTl] = tempTl
        }
    })

    return tempAllTl;
}
