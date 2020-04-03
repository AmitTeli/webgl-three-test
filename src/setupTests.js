var Canvas = require("canvas");
var glContext = require('gl')(1,1); //headless-gl
var THREE = require('../public/js/Three');

var window = {innerWidth: 800, innerHeight: 600};
global.THREE = THREE;



function init() {
    // GL scene renderer
    var canvasGL = new Canvas.Canvas(window.innerWidth, window.innerHeight);
    canvasGL.addEventListener = function(event, func, bind_) {}; // mock function to avoid errors inside THREE.WebGlRenderer()
    var renderer = new THREE.WebGLRenderer( { context: glContext, antialias: true, canvas: canvasGL });
    global.renderer = renderer;

    // camera
    var  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 1,1,1 );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    global.camera = camera;
  

    // scene
    var scene = new THREE.Scene();
    console.log(JSON.stringify(scene))
    global.scene = scene;
  }
  
  init();