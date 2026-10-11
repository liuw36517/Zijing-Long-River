import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


export function createRiver(scene){


const waterGeometry =
new THREE.PlaneGeometry(
500,
80,
100,
20
);



const waterMaterial =
new THREE.MeshStandardMaterial({

color:0x146b8c,

transparent:true,

opacity:0.75,

roughness:0.1,

metalness:0.3

});



const river =
new THREE.Mesh(
waterGeometry,
waterMaterial
);



river.rotation.x =
-Math.PI/2;



river.position.y =
1;



scene.add(river);



// 水面波浪动画

river.userData.wave = true;



function wave(){

const time =
Date.now()*0.001;


const position =
river.geometry.attributes.position;


for(
let i=0;
i<position.count;
i++
){

const x =
position.getX(i);


position.setZ(

i,

Math.sin(
x*0.08+time*2
)*1.5

);


}


position.needsUpdate=true;


requestAnimationFrame(wave);

}


wave();



// 河岸石头


const stoneMaterial =
new THREE.MeshStandardMaterial({

color:0x555555

});


for(
let i=0;
i<80;
i++
){


const stone =
new THREE.Mesh(

new THREE.DodecahedronGeometry(
Math.random()*2+1
),

stoneMaterial

);



stone.position.set(

(Math.random()>0.5?1:-1)
*
(45+Math.random()*30),

2,

(Math.random()-0.5)*500

);



scene.add(stone);


}



}
