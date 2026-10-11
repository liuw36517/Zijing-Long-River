import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";



let fishes=[];



export function createFish(scene){



const fishMaterial =
new THREE.MeshStandardMaterial({

color:0xffaa33

});



for(
let i=0;
i<80;
i++
){


const fish =
new THREE.Mesh(

new THREE.ConeGeometry(
0.8,
3,
8
),

fishMaterial

);



fish.rotation.z =
Math.PI/2;



fish.position.set(

(Math.random()-0.5)*30,

Math.random()*8,

(Math.random()-0.5)*300

);



fish.userData={

speed:
0.05+
Math.random()*0.08,


direction:
Math.random()

};



scene.add(fish);



fishes.push(fish);


}



}



export function updateFish(){



fishes.forEach(
fish=>{


fish.position.z +=
fish.userData.speed;



if(
fish.position.z>150
){

fish.position.z=-150;

}



fish.rotation.y +=
Math.sin(
Date.now()*0.002
)
*
0.02;



}

);


}
