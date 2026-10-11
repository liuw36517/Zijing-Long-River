import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


let animals=[];



export function createAnimals(scene){



for(
let i=0;i<30;i++
){


let shrimp =
new THREE.Mesh(

new THREE.SphereGeometry(

0.5,

8,

8

),

new THREE.MeshStandardMaterial({

color:0xff7755

})

);



shrimp.position.set(

(Math.random()-0.5)*50,

1,

(Math.random()-0.5)*200

);



shrimp.userData.speed=

Math.random()*0.03;



scene.add(shrimp);


animals.push(shrimp);



}



}



export function updateAnimals(){



animals.forEach(a=>{


a.position.z +=

a.userData.speed;



if(a.position.z>100)

a.position.z=-100;


});


}
