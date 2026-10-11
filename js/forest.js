import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";



export function createForest(scene){



const treeMaterial =
new THREE.MeshStandardMaterial({

color:0x174d22

});



for(
let i=0;
i<300;
i++
){


const height =
20+
Math.random()*50;



const tree =
new THREE.Mesh(

new THREE.CylinderGeometry(

2,
5,
height,
8

),

treeMaterial

);



tree.position.set(

(Math.random()-0.5)*600,

height/2,

(Math.random()-0.5)*600

);



scene.add(tree);



}



}
