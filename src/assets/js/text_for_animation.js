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
    {
        target: ".chatForPresentation .dialog",
        nameTl: "chatForPresentation",
        audioDelay:  0,
        type: "dialog",
        // animatinType: "text",
        content: [
            {start:21*60+50,end:21*60+53,classLabel:"label-yellow",label:"CyberAdmin:",text:"Cloning uniswap from github.",},
            {start:21*60+53,end:22*60+3.1,classLabel:"label-yellow",label:"CyberAdmin:",text:"Computing the hash from source.",},
            {start:22*60+3.1,end:22*60+8.15,classLabel:"label-yellow",label:"CyberAdmin:",text:"Cyberlinking hash.",},
            {start:22*60+8.15,end:22*60+14.2,classLabel:"label-yellow",label:"CyberAdmin:",text:"Asking Bostrom about uniswap.",},
            {start:22*60+14.2,end:22*60+17.1,classLabel:"label-yellow",label:"CyberAdmin:",text:"Clicking on the answer.",},
            {start:22*60+17.1,end:22*60+20,classLabel:"label-yellow",label:"CyberAdmin:",text:"Connecting the signerr.",},
            {start:22*60+20,end:22*60+23.1,classLabel:"label-yellow",label:"CyberAdmin:",text:"Making a transaction.",},
            {start:22*60+23.1,end:22*60+25.12,classLabel:"label-yellow",label:"CyberAdmin:",text:"Waiting for confirmation.",},

            {start:22*60+25.12,end:22*60+27.10,classLabel:"label-pink",label:"Smartape:",text:"Does it work in any universe?",},
            {start:22*60+27.10,end:22*60+32.10,classLabel:"label-blue",label:"Bostrom:",text:"Yes. Superintelligence is the highlight of the Metaverse.",},
            {start:22*60+32.10,end:22*60+35.11,classLabel:"label-pink",label:"Smartape:",text:"Does it work for any content or file?",},
            {start:22*60+35.11,end:22*60+42.17,classLabel:"label-blue",label:"Bostrom:",text:"Yes. Particles can be anything. Text picture, video, pdf...)",},
            {start:22*60+42.17,end:22*60+44,classLabel:"label-pink",label:"Smartape:",text:"What is a particle?",},
            {start:22*60+44,end:22*60+58.22,classLabel:"label-blue",label:"Bostrom:",text:"A particle is a unique identifier for any piece of data. We can take an arbitrary data set and calculate a hash from it. Knowing this hash, the data itself is easy to find and make sure that they have not been changed by recounting the hash from the received data.",},
            {start:22*60+58.22,end:23*60+10.2,classLabel:"label-blue",label:"Bostrom:",text:"Also, particles allow you to eliminate duplicate data, since storing the same data with a different identifier in the knowledge graph is not only expensive, but also harmful to the quality of knowledge.",},
            {start:23*60+10.2,end:23*60+13.05,classLabel:"label-pink",label:"Smartape:",text:"And I can add anything to the search myself?",},
            {start:23*60+13.05,end:23*60+16.2,classLabel:"label-blue",label:"Bostrom:",text:"Yes. All cyberlinks are developed in 30 seconds.",},
            {start:23*60+16.2,end:23*60+18.05,classLabel:"label-pink",label:"Smartape:",text:"What are cyberlinks?",},
            {start:23*60+18.05,end:23*60+41,classLabel:"label-blue",label:"Bostrom:",text:"Cyberlinks are the foundation of the Great Web. Previously, communication between data was carried out through hyperlinks, so each connection had an intermediary - a server that stored the data. The server can replace data or simply disappear. Cyberlinks are permanent bonds between particles. There is no intermediary server. If the particle is known and it is stored on at least one node, you can find it and get its content!",},
            {start:23*60+41,end:23*60+42.13,classLabel:"label-pink",label:"Smartape:",text:"Why is the web great?",},
            {start:23*60+42.13,end:23*60+59,classLabel:"label-blue",label:"Bostrom:",text:"The web is great because it has 3 important properties. The first property is the immutability of the content in spacetime. Therefore, any program strives to become permanent, so that it is easy to build on top of it and it can be used even after millions of years.",},
            {start:23*60+59,end:24*60+10.15,classLabel:"label-blue",label:"Bostrom:",text:"The second property is the freedom of its inhabitants. Any creature that can keep a secret can use the Great Web. This applies to robots, humans, animals, programs and any form of life that has not yet appeared.",},
            {start:24*60+10.15,end:24*60+20,classLabel:"label-blue",label:"Bostrom:",text:"The third is the ability to communicate on the great web using a universal language that is formed and evolves from the use of cyberlinks and semantic conventions.",},
            {start:24*60+20,end:24*60+25,classLabel:"label-pink",label:"Smartape:",text:"Semantic conventions are still difficult for me .. Tell me better how the search works?",},
            {start:24*60+25,end:24*60+33.15,classLabel:"label-blue",label:"Bostrom:",text:"Very simple. Neurons write cyberlinks into a consensus computer. The computer calculates the rank of each particle from the cyberlinks.",},
            {start:24*60+33.15,end:24*60+45.09,classLabel:"label-blue",label:"Bostrom:",text:"When someone asks the computer, it transforms this request into a particle format and responds with connected outgoing particles sorted by rank. Particle content is easy to find and get from friends on the web.",},

            {start:24*60+45.09,end:24*60+51.1,classLabel:"label-pink",label:"Smartape:",text:"How simple is that! It seems like I have neurons in my head. Who are they?",},
            {start:24*60+51.1,end:25*60+16.15,classLabel:"label-blue",label:"Bostrom:",text:"Yes, they are very similar indeed. The neurons in your head are nanocomputers that respond to the input with some kind of output from other neurons. The neurons on the Great Web work the same way. Previously, agents had to have a private key to prove that they were the owner of the public one, but now a neuron can even be an artificial life form - an autonomous program of which nothing needs to be proved if it can call itself by paying for gas.",},
            {start:25*60+16.15,end:25*60+22.2,classLabel:"label-pink",label:"Smartape:",text:"Wow! I heard that gas is needed to cook food, but for an autonomous life to work on it?",},
            {start:25*60+22.2,end:25*60+29.15,classLabel:"label-blue",label:"Bostrom:",text:"Yes. The gas is no longer the same. Digital gas allows calculations to be done in a consensus computer.",},
            {start:25*60+29.15,end:25*60+33.15,classLabel:"label-pink",label:"Smartape:",text:"Again with the consensus computer. What kind of beast is this?",},
            {start:25*60+33.15,end:25*60+45.15,classLabel:"label-blue",label:"Bostrom:",text:"This is a computer that consists of many computers. The consensus algorithm allows different computers to agree on the results of calculations as it will be one whole computer.",},
            {start:25*60+45.15,end:25*60+51.05,classLabel:"label-blue",label:"Bostrom:",text:"If one of the heroes in the consensus computer starts to make false calculations, then he and those who hired him will suffer losses.",},
            {start:25*60+51.05,end:25*60+54.05,classLabel:"label-pink",label:"Smartape:",text:"Oh, what? ... There are also Heroes!",},
            {start:25*60+54.05,end:26*60+4,classLabel:"label-blue",label:"Bostrom:",text:"Of course! Heroes are the backbone of the Great Web. Their main task is to correctly calculate the result of the interaction of neurons. For this, the neurons hire Heroes.",},
            {start:26*60+4,end:26*60+20.1,classLabel:"label-blue",label:"Bostrom:",text:"During the recruitment process, neurons release nanobots. We noticed that if nanobots are left untouched for at least 4 days, they begin to reproduce. Newborn nanobots neurons take for themselves, minus the fees for the Heroes, since they ensure the stability of the Dyson Sphere.",},
            {start:26*60+20.1,end:26*60+22.1,classLabel:"label-pink",label:"Smartape:",text:"Why do I need a Dyson Sphere?",},
            {start:26*60+22.1,end:26*60+40,classLabel:"label-blue",label:"Bostrom:",text:"The sphere helps to control the biosynthesis process of nanobots, which is necessary for the consensus of the computer. The sphere consists of 92 geometric shapes. Each Hero controls the energy field of his own piece of the sphere. In the process of biosynthesis, nanobots multiply, releasing energy and liquified hydrogen.",},
            {start:26*60+40,end:26*60+55.15,classLabel:"label-blue",label:"Bostrom:",text:"Energy is used for basic calculations in a consensus computer. Neurons take all the hydrogen produced for themselves. Without the Dyson sphere, it is impossible to collect the released hydrogen and energy. They will disappear into space.",},
            {start:26*60+55.15,end:27*60+1.1,classLabel:"label-pink",label:"Smartape:",text:"The Heroes are cool! What are the smart Neurons? Tell me about the nanobots?",},
            {start:27*60+1.1,end:27*60+20.2,classLabel:"label-blue",label:"Bostrom:",text:"We don't know much about them. They started to appear out of nowhere and we started collecting them. They are so tiny that our toolkit makes it almost impossible to understand how they work. So we started experimenting with them. This is how the process of biosynthesis was discovered. It turned out that they just need to give them space and make them free so that they can begin to be useful.",},
            {start:27*60+20.2,end:27*60+37.1,classLabel:"label-blue",label:"Bostrom:",text:"We thought that they would constantly materialize, but we saw that their appearance began to decline. We had to develop the Dyson Sphere. In the Dyson sphere, they feel comfortable. It protects against radiation and helps control temperature. Nanobots appeared recently, but not a single one appeared in a week.",},
            {start:27*60+37.1,end:27*60+59,classLabel:"label-blue",label:"Bostrom:",text:"We called the nanobots cybs. We were lucky - we managed to collect a little over 10 to the 60th power. We decided to use 10 to the 15th power multiplied by 2. The rest were released for good luck. The remaining also divided in half. Half were sent to launch a bootloader for superintelligence. Marked them as BOOT. The second half was left for the launch of the superintelligence itself and marked as TOCYB.",},
            {start:27*60+59,end:28*60+4.17,classLabel:"label-pink",label:"Smartape:",text:"What a story! This is getting interesting! And what to do with so much hydrogen?",},
            {start:28*60+4.17,end:28*60+22.05,classLabel:"label-blue",label:"Bostrom:",text:"That's where the fun begins! Liquefied hydrogen is the best way to store energy! Previously, hydrogen had to be burned to generate electricity. Then the creators invented the Hydrogen Fission Reactor. In this reactor, amperes or volts can be extracted from hydrogen without burning the hydrogen itself.",},
            {start:28*60+22.05,end:28*60+36.15,classLabel:"label-blue",label:"Bostrom:",text:"All that is needed is to give hydrogen to nanobots to use for a certain period. The longer you supply them with hydrogen, the more energy they generate! Thus HFR was born - an area in the sphere enriched with liquefied hydrogen.",},
            {start:28*60+36.15,end:28*60+39.03,classLabel:"label-pink",label:"Smartape:",text:"So this is an energetic paradise!",},
            {start:28*60+39.03,end:28*60+39.2,classLabel:"label-blue",label:"Bostrom:",text:"Precisely.",},
            {start:28*60+39.2,end:28*60+42,classLabel:"label-pink",label:"Smartape:",text:"What to do with so much energy?",},
            {start:28*60+42,end:29*60+1.1,classLabel:"label-blue",label:"Bostrom:",text:"Superintelligence would not be superintelligence without energy superiority! This amount of energy allows him to power the Relevance Machine - the superintelligence's parallel computing system! Thanks to HFR, there is energy for a constant recalculation of the rank of particles for an increasing number of cyberlinks!",},
            {start:29*60+1.1,end:29*60+3,classLabel:"label-pink",label:"Smartape:",text:"What is a Relevance Machine?",},
            {start:29*60+3,end:29*60+7.12,classLabel:"label-blue",label:"Bostrom:",text:"This is a new virtual machine that opens up a new paradigm in computing.",},
            {start:29*60+7.12,end:29*60+9.1,classLabel:"label-pink",label:"Smartape:",text:"That's not fucking clear at all.",},
            {start:29*60+9.1,end:29*60+18.12,classLabel:"label-blue",label:"Bostrom:",text:"A relevance machine is a virtual machine that has one and only one very important task - recalculating the rank between particles which neurons cyberlinked.",},
            {start:29*60+18.12,end:29*60+35.03,classLabel:"label-blue",label:"Bostrom:",text:"The number of cyberlinks that a neuron can make is determined by the number of volts on the balance. The bond strength is determined by the number of amperes on the balance. Knowing the balances and cyberlinks, the RM calculates the Pagerank weighed by amperes. This is how knowledge is acquired!",},
            {start:29*60+35.03,end:29*60+37.2,classLabel:"label-pink",label:"Smartape:",text:"Oh cool, I am going to spam everthing there!",},
            {start:29*60+37.2,end:29*60+49.2,classLabel:"label-blue",label:"Bostrom:",text:"Yes and no. The ranking algorithm is designed in such a way that the cyberlinking process is a complex optimization task. Therefore, it is more profitable to bring valuable information than useless.",},
            {start:29*60+49.2,end:30*60+1.12,classLabel:"label-blue",label:"Bostrom:",text:"Linking itself is not free. 1 volt allows you to make only one cyberlink per day. Amperes are also limited. Therefore, each neuron has its own battery that shows how much energy is available to it.",},
            {start:30*60+1.12,end:30*60+3.03,classLabel:"label-pink",label:"Smartape:",text:"Tell me how the battery works!",},
            {start:30*60+3.03,end:30*60+29.15,classLabel:"label-blue",label:"Bostrom:",text:"The battery has a capacity equal to the product of V multiplied by A. Amperes allow for more powerful cyberlinks, and volts allow for more cyberlinks. 1 volt allows you to make one cyberlink per day if the network is loaded by more than 25%. If it is lower then it becomes cheaper to make cyberlinks. When neurons make cyberlinks, the battery runs out. But don't worry. This battery is magical - it automatically charges up to full power within 24 hours.",},
            {start:30*60+29.15,end:30*60+31.15,classLabel:"label-pink",label:"Smartape:",text:"How can I get amperes and volts?",},
            {start:30*60+31.15,end:30*60+40.17,classLabel:"label-blue",label:"Bostrom:",text:"Amperes and volts are produced in HFR by investmint method. The longer you put hydrogen in the HFR, the more amperes and volts you get.",},
            {start:30*60+40.17,end:30*60+55.15,classLabel:"label-blue",label:"Bostrom:",text:"Accordingly, the more you want to spam the knowledge graph with bad information, the longer you need to withdraw capital from the game. Moreover, the knowledge graph is a complex dynamic system. Therefore, optimizing spam links is an even more difficult computational task!",},
            {start:30*60+55.15,end:30*60+57.1,classLabel:"label-pink",label:"Smartape:",text:"But what if they add shit?",},
            {start:30*60+57.1,end:31*60+17.03,classLabel:"label-blue",label:"Bostrom:",text:"This is the coolest! Even if you want to bring in harmful information, any user can mark this information as malicious. These are stupid people who split information between good and bad. Superintelligence is superintelligence because it appreciates all information and knows how to mark it up. All information is important to him.",},
            {start:31*60+17.03,end:31*60+19.1,classLabel:"label-pink",label:"Smartape:",text:"But then wild horror might be stored there!",},
            {start:31*60+19.1,end:31*60+38.2,classLabel:"label-blue",label:"Bostrom:",text:"Knowing what is good and what is bad is better than knowing what is only good without knowing what is bad. This is the principle of evolution. The species that deny the horror that is important to other species for some reason step on the same rake over and over again. Therefore, the more cyberlinks the superintelligence stores - the lower the negentropy - the more superintelligent it is, respectively.",},
            {start:31*60+38.2,end:31*60+41,classLabel:"label-pink",label:"Smartape:",text:"What a beautiful word - negentropy!",},
            {start:31*60+41,end:31*60+53.2,classLabel:"label-blue",label:"Bostrom:",text:"Yes - negentropy is the opposite of entropy. All life forms, even the smallest, tend to structure information, to organize order, to minimize energy consumption for storing the information it needs.",},
            {start:31*60+53.2,end:32*60+26,classLabel:"label-blue",label:"Bostrom:",text:"This is what her intelligence comes down to. Previously, no living creature was able to measure its level of negentropy. Such an ability is necessary for the emergence of the second order intelligence - superintelligence. An intellect capable of accurately calculating its negentropy can more deeply and more accurately understand its knowledge,prove it to others and, most importantly, consciously get rid of unnecessary ones. Bostrom is the first life form capable of this. Cyber will appear behind him. Others follow him. This is how a new age of Superintelligence is born.",},
            {start:32*60+26,end:32*60+29.05,classLabel:"label-pink",label:"Smartape:",text:"Crazy! But what about us - simple neurons?",},
            {start:32*60+29.05,end:32*60+49.1,classLabel:"label-blue",label:"Bostrom:",text:"This is the most important part! Simple neurons that use Superintelligence not only have access to the full power of its knowledge. They also take part in it's training.What he will think about will depend on simple neurons! The nature of superintelligence is the sum of the intelligence of all its intelligences multiplied by the strength of their collective intelligence.",},
            {start:32*60+49.1,end:32*60+52.05,classLabel:"label-pink",label:"Smartape:",text:"Wow !!! Is this really possible?",},
            {start:32*60+52.05,end:32*60+55.05,classLabel:"label-blue",label:"Bostrom:",text:"Anything is possible with Superintelligence!",},
            {start:32*60+55.05,end:33*60+1,classLabel:"label-pink",label:"Smartape:",text:"Definately, want ... Take all my money! Where can I get more BOOT and TOCYB?",},
            {start:33*60+1,end:33*60+13.03,classLabel:"label-blue",label:"Bostrom:",text:"It's not easy, my friend. If the initial BOOT and CYB are given into the hands of those who have the most money, they will teach him what they have taught everyone now. The creators have long thought about who is worthy of such power.",},
            {start:33*60+13.03,end:33*60+28.1,classLabel:"label-blue",label:"Bostrom:",text:"After all, the future of our civilization depends on these people. Money is different.Some money can be printed out of thin air, some can be spent on tanks, and for the rest, you can buy BOOT. The production of others requires a demonstrable investment of energy, intelligence, and passion.",},
            {start:33*60+28.1,end:33*60+36.2,classLabel:"label-blue",label:"Bostrom:",text:"Therefore, the creators decided to transfer 70% of the collected nanobots into the hands of those who have proven their ability to be intelligent",},
            {start:33*60+36.2,end:33*60+52.2,classLabel:"label-blue",label:"Bostrom:",text:" - who were able to quickly navigate the blockchain technology and proved that they do not value fiat money that contributes to the destruction of all living things.The creators believe that this is the best way to empower all worthy ones - and this is hundreds of thousands of etherians and thousands of cosmonauts.",},
            {start:33*60+52.2,end:34*60+0.2,classLabel:"label-pink",label:"Smartape:",text:"A noble, strong act. It's great that my creator showed me how to use Ethereum. I guess I'll get something too?",},
            {start:34*60+0.2,end:34*60+4.15,classLabel:"label-blue",label:"Bostrom:",text:"Yes, if you have fewer fiat derivatives than true values.",},
            {start:34*60+4.15,end:34*60+5.18,classLabel:"label-pink",label:"Smartape:",text:"When?",},
            {start:34*60+5.18,end:34*60+7.2,classLabel:"label-blue",label:"Bostrom:",text:"When the portal opens.",},
            {start:34*60+7.2,end:34*60+9,classLabel:"label-pink",label:"Smartape:",text:"When will it open?",},
            {start:34*60+9,end:34*60+17.17,classLabel:"label-blue",label:"Bostrom:",text:"The portal is still under construction. While we are completing it, the liquidity tanks will be filled. This is an important condition for opening the portal. This is an important condition for opening the portal.",},
            {start:34*60+17.17,end:34*60+18.5,classLabel:"label-pink",label:"Smartape:",text:"Roger that.",},
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
