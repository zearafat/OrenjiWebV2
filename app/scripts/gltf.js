/**
 * Importing
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'dat.gui';


/**
 * Sizes
 * @type {{width: number, height: number}}
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};


/**
 * Scene
 * @type {Scene}
 */
const scene = new THREE.Scene();
scene.background = null;


/**
 * Camera
 * @type {PerspectiveCamera}
 */
const camera= new THREE.PerspectiveCamera(
    3,
    sizes.width / sizes.height,
    1,
    100
);
camera.position.set(
    -15,
    30,
    65
);
camera.zoom = 1;


/**
 * Ligthing
 * @type {HemisphereLight}
 */
const hemisphereLight = new THREE.HemisphereLight(
    0xffffff,
    0x080820,
    2
);
const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    2
);
directionalLight.position.set(
    5,
    2.5,
    5
);

const ambientLight = new THREE.AmbientLight(
    0x404040,
    10
); // soft white light


/**
 * Shadows
 * @type {Boolean}
 */
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 6000;
directionalLight.shadow.mapSize.height = 6000;
directionalLight.shadow.bias = -0.0001;
directionalLight.shadow.camera = new THREE.OrthographicCamera(
    -10,
    10,
    -10,
    10,
    0.5,
    25
);
scene.add(hemisphereLight, directionalLight, ambientLight);


/**
 * Import gLTF Object
 */
// Import gLTF Object
let hero;
const loader = new GLTFLoader();
loader.load('assets/illustrations/gltf/orenji.glb', (gltf) => {
    hero = gltf.scene;
    // "traverse" is for GLTF to received/cast Shadow
    hero.traverse(function (child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    scene.add(hero);

    // Initialize the GUI controls once the model has loaded
    initModelControls(hero, directionalLight);

    // Update the renderer and start the animation loop
    renderer.render(scene, camera);
}, undefined, function (error) {
    console.error(error);
});


/**
 *
 * @param model
 * @param light
 */
// function initModelControls(model, light) {
//     const gui = new GUI();
//
//     // Add camera position folder
//     const cameraFolder = gui.addFolder('Camera Position');
//     cameraFolder.add(camera.position, 'x', -100, 100);
//     cameraFolder.add(camera.position, 'y', -100, 100);
//     cameraFolder.add(camera.position, 'z', -100, 100);
//
//     // Add model position folder
//     const modelFolder = gui.addFolder('Model Position');
//     modelFolder.add(model.position, 'x', -10, 10).onChange(() => render());
//     modelFolder.add(model.position, 'y', -10, 10).onChange(() => render());
//     modelFolder.add(model.position, 'z', -10, 10).onChange(() => render());
//
//     // Add hemisphere lighting position folder
//     const hemisphereLightFolder = gui.addFolder('Hemisphere Light');
//     hemisphereLightFolder.add(hemisphereLight, 'intensity', 0, 100);
//     hemisphereLightFolder.add(hemisphereLight.position, 'x', -100, 100).onChange(() => render());
//     hemisphereLightFolder.add(hemisphereLight.position, 'y', -100, 100).onChange(() => render());
//     hemisphereLightFolder.add(hemisphereLight.position, 'z', -100, 100).onChange(() => render());
//
//     // Add directional lighting position
//     const directionalLightFolder = gui.addFolder('Directional Light');
//     directionalLightFolder.add(directionalLight, 'intensity', 0, 100);
//     directionalLightFolder.add(directionalLight.position, 'x', -100, 100).onChange(() => render());
//     directionalLightFolder.add(directionalLight.position, 'y', -100, 100).onChange(() => render());
//     directionalLightFolder.add(directionalLight.position, 'z', -100, 100).onChange(() => render());
//
//     // Add camera zoom folder
//     const cameraZoomFolder = gui.addFolder('Camera Zoom');
//     cameraZoomFolder.add(camera, 'zoom', 0.1, 100).onChange(() => {
//         camera.updateProjectionMatrix();
//     });
//
//     cameraZoomFolder.open();
//     modelFolder.open();
//     cameraFolder.open();
//     hemisphereLightFolder.open();
//     directionalLightFolder.open();
// }

// Ensure you have a render function that updates the scene
function render() {
    renderer.render(scene, camera);
}


/**
 * Renderer
 * @type {WebGLRenderer}
 */
const renderer = new THREE.WebGLRenderer(
    {
        alpha: true,
        antialias: true,
    }
);
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 1; // Physically based renderer needs toneMappingExposure function
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.getElementById("hero").appendChild(renderer.domElement);


/**
 * Orbit Control
 * @type {OrbitControls}
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.enableRotate = false;
// Clamp Orbit Control
// controls.minAzimuthAngle = 1;
// controls.maxAzimuthAngle = 2;


/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.position.x = 40
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});


/**
 * Mouse Hover
 */
document.addEventListener('mousemove', onDocumentMouseMove)
let mouseX
let mouseY
const windowHalfX = window.innerWidth / 2
const windowHalfY = window.innerHeight / 2
function onDocumentMouseMove (event) {
    // CLAMP MOUSE POSITION
    mouseX = THREE.MathUtils.clamp((event.clientX - windowHalfX) / 10, -40, 40);
    mouseY = THREE.MathUtils.clamp((event.clientY - windowHalfY) / 30, -30, 30);
}


/**
 * Helper
 * @type {DirectionalLightHelper}
 */
// const helperCamera = new THREE.CameraHelper( camera );
// const helperLighting = new THREE.DirectionalLightHelper( directionalLight, 5, "#FF0000" );
// scene.add( helperLighting );


/**
 * Animate
 * @type {Clock}
 */
const clock = new THREE.Clock();
const animate = () => {
    const targetX = mouseX * .001
    const targetY = mouseY * .001
    const elapsedTime = clock.getElapsedTime();
    if (hero) {
        // This will override GUI controller. So comment this out if you wanna use GUI controller for model position.
        hero.position.set(-2.3, 0, 0);
        hero.rotation.set(targetY, targetX, hero.rotation.z);
    }
    window.requestAnimationFrame( animate );
    controls.update();
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
};
animate();

