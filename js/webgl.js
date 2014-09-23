// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer, cube;

var canvas = document.getElementById('draw');
var width = $('#draw').width();
var height = $('#draw').height();

init();
animate();

// Sets up the scene.
function init() {

    // Scene
    scene = new THREE.Scene();

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true, canvas:canvas});
    renderer.setSize(width, height);

    // Create a camera, zoom it out from the model a bit, and add it to the scene.
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 20000);
    camera.position.set(0,6,0);
    camera.rotation.set(-1,0,2);
    scene.add(camera);

    // Set the background color of the scene.
    renderer.setClearColor(0x333F47, 1);

    // Create a light, set its position, and add it to the scene.
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    // cube
    cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
    cube.overdraw = true;
    scene.add(cube);

    drawGrid(scene,-3,3,0.2);

    // Add OrbitControls so that we can pan around with the mouse.
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    //Set cube controls
    document.onkeydown = function(evt){userControls(evt,cube,10)};
}


// Renders the scene and updates the render as needed.
function animate() {

    // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);
    
    // Render the scene.
    renderer.render(scene, camera);

    controls.update();

}