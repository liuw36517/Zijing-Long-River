import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


let time = 0;


export function createDayNight(scene,sun){


scene.userData.dayNight=true;


function loop(){


time +=0.001;



let light =
(Math.sin(time)+1)/2;



sun.intensity =
0.5 + light*2;



scene.background =
new THREE.Color(

0x07152b

).lerp(

new THREE.Color(0x87ceeb),

light

);



requestAnimationFrame(loop);


}


loop();


}
