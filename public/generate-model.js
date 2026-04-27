// This script generates a simple GLB file for testing
// Run this once to create the placeholder model

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@r128/build/three.module.js';
import { GLTFExporter } from 'https://cdn.jsdelivr.net/npm/three@r128/examples/jsm/exporters/GLTFExporter.js';

// Create a simple ring (torus) geometry
const geometry = new THREE.TorusGeometry(1, 0.4, 32, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xD4AF37, // Gold color
  metalness: 0.9,
  roughness: 0.1
});
const ring = new THREE.Mesh(geometry, material);

// Create scene
const scene = new THREE.Scene();
scene.add(ring);

// Add lighting
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(5, 5, 5);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
light2.position.set(-5, -5, 5);
scene.add(light2);

// Export to GLB
const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (gltf) => {
    const link = document.createElement('a');
    const blob = new Blob([gltf], { type: 'application/octet-stream' });
    link.href = URL.createObjectURL(blob);
    link.download = 'ring.glb';
    link.click();
  },
  (error) => {
    console.error('Export failed:', error);
  },
  { binary: true }
);
