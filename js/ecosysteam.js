import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";



export function createPlants(scene){


const plantMaterial =
new THREE.MeshStandardMaterial({

color:0x16803a

});



for(
let i=0;i<100;i++
){


const plant =
new THREE.Mesh(

new THREE.ConeGeometry(

0.3,

Math.random()*5+3,

6

),

plantMaterial

);



plant.position.set(

(Math.random()-0.5)*60,

2,

(Math.random()-0.5)*300

);



scene.add(plant);


}


}
