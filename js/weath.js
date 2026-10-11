import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


let rain=[];


export function createWeather(scene){


const rainMaterial =
new THREE.PointsMaterial({

color:0x99ccff,

size:0.15

});



let geometry =
new THREE.BufferGeometry();



let points=[];



for(
let i=0;i<1000;i++
){

points.push(

(Math.random()-0.5)*500,

Math.random()*200,

(Math.random()-0.5)*500

);

}



geometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(

points,

3

)

);



let rainSystem =
new THREE.Points(

geometry,

rainMaterial

);



scene.add(rainSystem);



function update(){


rainSystem.rotation.x+=0.001;


requestAnimationFrame(update);


}


update();



}
