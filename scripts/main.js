import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

main();
function main() {
  spinCube("#webglheader1");
  spinCube("#webglheader2");
  spawnComputer("#computer");
  spawnCd("#cd");
}

function spinCube(id_placement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);

  const canvas = document.querySelector(id_placement);

  // Renderer uses the existing canvas
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
  });

  // Match renderer to canvas size (64x64 as in your HTML)
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height, false);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const edgeGeometry = new THREE.EdgesGeometry(cubeGeometry);

  const r = Math.random();
  const g = Math.random();
  const b = Math.random();
  const randomColor = new THREE.Color(r, g, b);

  const cubeMaterial = new THREE.MeshBasicMaterial({ color: randomColor });
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
  const cubeEdges = new THREE.LineSegments(edgeGeometry, lineMaterial);
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.add(cubeEdges);
  scene.add(cube);

  camera.position.z = 3;

  renderer.setAnimationLoop(animate);

  function animate() {
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
  }
}

function spawnComputer(id_placement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);

  const canvas = document.querySelector(id_placement);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
    alpha: true,
  });

  const width = canvas.clientWidth || 300;
  const height = canvas.clientHeight || 300;
  renderer.setSize(width, height, false);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 0.6);
  dir.position.set(5, 10, 7.5);
  scene.add(dir);

  // Load model
  const loader = new GLTFLoader();
  let model = null;
  const modelUrl = new URL("../assets/computerModel.glb", import.meta.url);
  loader.load(
    modelUrl.href,
    function (gltf) {
      model = gltf.scene;
      model.position.set(0, -0.5, 0);
      model.rotation.y = Math.PI; // initial orientation
      model.scale.set(1, 1, 1);
      scene.add(model);
    },
    undefined,
    function (error) {
      console.error("Error loading computer model:", error);
    },
  );

  camera.position.set(0, 0, 3);

  renderer.setAnimationLoop(animate);

  function animate() {
    if (model) {
      model.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
  }
}
function spawnCd(id_placement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);

  const canvas = document.querySelector(id_placement);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
    alpha: true,
  });

  const width = canvas.clientWidth || 300;
  const height = canvas.clientHeight || 300;
  renderer.setSize(width, height, false);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 0.6);
  dir.position.set(5, 10, 7.5);
  scene.add(dir);

  // Load model
  const loader = new GLTFLoader();
  let model = null;
  const modelUrl = new URL("../assets/cdModel.glb", import.meta.url);
  loader.load(
    modelUrl.href,
    function (gltf) {
      model = gltf.scene;
      // Center and scale the model if needed
      model.position.set(0, -0.5, 0);
      model.rotation.y = Math.PI; // initial orientation
      // try a reasonable scale
      model.scale.set(1, 1, 1);
      scene.add(model);
    },
    undefined,
    function (error) {
      console.error("Error loading computer model:", error);
    },
  );

  camera.position.set(0, 0, 3);

  renderer.setAnimationLoop(animate);

  function animate() {
    if (model) {
      model.rotation.y += 0.03;
    }
    renderer.render(scene, camera);
  }
}
