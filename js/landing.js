// Setup
const screenDivide = 0.5;
const sizes = {
  width: window.innerWidth * screenDivide,
  height: window.innerHeight
}


console.log(window.innerWidth)

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);
const canvas = document.querySelector('#bg')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas ,
  alpha: true,
  antialias:true
});
renderer.setSize(sizes.width , sizes.height)
camera.aspect = sizes.width / sizes.height
camera.updateProjectionMatrix()
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// globe wireframe

const geometry = new THREE.IcosahedronGeometry(20, 2)
const material = new THREE.MeshNormalMaterial()
// Material Props.
material.wireframe = true
// Create Mesh & Add To Scene
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 50

const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true
controls.autoRotate = true
controls.enableZoom = false
controls.enablePan = false
controls.dampingFactor = 0.03
controls.maxDistance = 100000
controls.enableZoom = false
controls.minDistance = 30
controls.autoRotateSpeed = 1.5
controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN,
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth * screenDivide
    sizes.height = window.innerHeight
    if (window.innerWidth <= 693) {
      sizes.width = window.innerWidth
    }
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// interaction
document.addEventListener('mousemove', animateTerrain)

let mouseY = 0;

function animateTerrain(event) {
  mouseY = event.clientY
}


window.addEventListener("resize", e => {
  
})

const scaleArr = [21]
// Render Loop
function animate() {
  mesh.rotation.z += 0.01 * Math.sin(1)
  if (window.innerWidth < 550) {
    sizes.width = window.innerWidth
    renderer.setSize(sizes.width, sizes.height)
    
  }

  controls.update()

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}



window.onload = function hi() {
  console.log("loaded")
  if (window.innerWidth < 693) {
    
    sizes.width = window.innerWidth
    if (window.innerWidth <= 693) {
      sizes.width = window.innerWidth-10
    }
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
}
// commit again
animate();