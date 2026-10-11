import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


import {createForest}
from "./forest.js";


import {createRiver}
from "./river.js";
import {
createFish,
updateFish
}
from "./fishAI.js";


import {
createPlants
}
from "./ecosystem.js";

import {
createDayNight
}
from "./daynight.js";


import {
createWeather
}
from "./weather.js";


import {
createAnimals,
updateAnimals
}
from "./animalAI.js";


const canvas =
document.querySelector("#world");



const scene =
new THREE.Scene();



scene.fog =
new THREE.FogExp2(
0x16301d,
0.015
);



const camera =
new THREE.PerspectiveCamera(

60,

window.innerWidth/window.innerHeight,

0.1,

2000

);



camera.position.set(
0,
80,
180
);



const renderer =
new THREE.WebGLRenderer({

canvas,
antialias:true

});


renderer.setSize(
window.innerWidth,
window.innerHeight
);



renderer.setPixelRatio(
window.devicePixelRatio
);



/*
天空光
*/


const ambient =
new THREE.AmbientLight(
0xffffff,
1
);


scene.add(ambient);



const sun =
new THREE.DirectionalLight(
0xffffff,
2
);


sun.position.set(
100,
200,
50
);


scene.add(sun);

createDayNight(
scene,
sun
);


createWeather(
scene
);


createAnimals(
scene
);

/*
创建森林
*/

createForest(scene);


/*
创建河流
*/

createRiver(scene);


/*
创建鱼群
*/

createFish(scene);


/*
创建水草生态
*/

createPlants(scene);



/*
动画循环
*/


function animate(){


requestAnimationFrame(
animate
);



camera.position.z -=0.02;

updateFish();
updateAnimals(); 

renderer.render(
scene,
camera
);


}



animate();





window.addEventListener(
"resize",
()=>{


camera.aspect =
window.innerWidth/window.innerHeight;


camera.updateProjectionMatrix();



renderer.setSize(

window.innerWidth,
window.innerHeight

);


});
