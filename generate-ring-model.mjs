import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as fs from 'fs';
import * as path from 'path';

// Create a simple gold ring (torus)
const geometry = new THREE.TorusGeometry(1.2, 0.5, 32, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xD4AF37, // Gold
  metalness: 0.95,
  roughness: 0.05,
});
const ring = new THREE.Mesh(geometry, material);

// Create scene
const scene = new THREE.Scene();
scene.add(ring);

// Add lights
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(5, 5, 5);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 0.5);
light2.position.set(-5, -5, 5);
scene.add(light2);

// Add environment
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// Export to GLB
const exporter = new GLTFExporter();

exporter.parse(
  scene,
  (gltf) => {
    const output = JSON.stringify(gltf, null, 2);
    console.log('Model exported:', output.substring(0, 200));
    const buffer = Buffer.from(gltf);
    const outputPath = path.resolve('./public/models/ring.glb');
    fs.writeFileSync(outputPath, buffer);
    console.log('✅ Model saved to:', outputPath);
  },
  (error) => {
    console.error('❌ Export failed:', error);
  },
  { binary: true, onlyVisible: true }
);
