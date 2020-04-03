/* global THREE:false, camera:false, scene:false, renderer:false */

var container, stats;

var cube, plane;
var startTime	= Date.now();

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 600;

export function start3JS() {
    // create the camera
	camera = new THREE.PerspectiveCamera(100, SCREEN_WIDTH / SCREEN_HEIGHT, 0.1, 500);
    camera.position.z = 500;

    // create the Scene
    scene = new THREE.Scene();

    scene.background = new THREE.Color(0xAAAAFF);

    // create the container element
    container = document.getElementById( 'App' );

    // init the WebGL renderer and append it to the Dom
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    renderer.domElement.style.position = "relative";
    container.appendChild( renderer.domElement );

    addACube();
    renderer.render( scene, camera );

}

export function addACube() {

    // create the Cube
    var cube = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) );
    cube.position.set(100,120,100);
    cube.rotation.x += 0.2;
    cube.rotation.y += 0.1;
    cube.rotation.z += 0.2;    

    // add the object to the scene
    scene.add( cube );

}