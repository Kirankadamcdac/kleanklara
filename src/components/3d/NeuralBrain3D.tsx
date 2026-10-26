'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NeuralBrain3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for brain structure
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);

    // Create 3D Brain Point Cloud Shape
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const cyanColor = new THREE.Color('#00f0ff');
    const purpleColor = new THREE.Color('#a855f7');
    const blueColor = new THREE.Color('#3b82f6');

    // Mathematical shape forming two brain hemispheres
    for (let i = 0; i < particleCount; i++) {
      const isLeftHemisphere = i % 2 === 0;

      // Sphere with brain-like distortion
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const r = 5.5 + Math.sin(theta * 4) * 0.4 + Math.cos(phi * 6) * 0.3;

      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta);
      let z = r * Math.cos(phi) * 0.75; // slightly flattened

      // Hemisphere separation
      if (isLeftHemisphere) {
        x -= 0.35;
      } else {
        x += 0.35;
      }

      // Add temporal lobe indentations
      y *= 0.9;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color selection
      const rand = Math.random();
      const pColor = rand > 0.6 ? cyanColor : rand > 0.3 ? purpleColor : blueColor;
      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;

      sizes[i] = Math.random() * 0.25 + 0.08;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Particle Shader Material
    const pMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const brainParticles = new THREE.Points(geometry, pMaterial);
    brainGroup.add(brainParticles);

    // Neural Synapse Connecting Lines
    const maxConnections = 600;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    let connectionCount = 0;
    const posArr = positions;

    for (let i = 0; i < particleCount && connectionCount < maxConnections; i++) {
      const x1 = posArr[i * 3];
      const y1 = posArr[i * 3 + 1];
      const z1 = posArr[i * 3 + 2];

      for (let j = i + 1; j < particleCount && connectionCount < maxConnections; j++) {
        const x2 = posArr[j * 3];
        const y2 = posArr[j * 3 + 1];
        const z2 = posArr[j * 3 + 2];

        const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);

        if (dist < 1.8) {
          linePositions[connectionCount * 6] = x1;
          linePositions[connectionCount * 6 + 1] = y1;
          linePositions[connectionCount * 6 + 2] = z1;
          linePositions[connectionCount * 6 + 3] = x2;
          linePositions[connectionCount * 6 + 4] = y2;
          linePositions[connectionCount * 6 + 5] = z2;

          // Line gradient color
          lineColors[connectionCount * 6] = 0.0;
          lineColors[connectionCount * 6 + 1] = 0.94;
          lineColors[connectionCount * 6 + 2] = 1.0;
          lineColors[connectionCount * 6 + 3] = 0.65;
          lineColors[connectionCount * 6 + 4] = 0.33;
          lineColors[connectionCount * 6 + 5] = 0.96;

          connectionCount++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, connectionCount * 6), 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors.slice(0, connectionCount * 6), 3));

    const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.25 });

    const neuralLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    brainGroup.add(neuralLines);

    // Orbiting Synapse Rings
    const ringGeo = new THREE.TorusGeometry(7.2, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4 });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.3 });

    const ring1 = new THREE.Mesh(ringGeo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    brainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    brainGroup.add(ring2);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / height) * 2 + 1;

      targetRotationY = mouseX * 0.4;
      targetRotationX = -mouseY * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation towards mouse
      brainGroup.rotation.y += (targetRotationY - brainGroup.rotation.y) * 0.05 + 0.003;
      brainGroup.rotation.x += (targetRotationX - brainGroup.rotation.x) * 0.05;

      // Pulse rings
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.2;

      // Slight floating pulsation
      brainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.3;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full glass-pill px-4 py-1.5 text-xs text-cyan-400 font-mono border border-cyan-500/20">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
        Interactive 3D Neural Synapse Engine (Drag to rotate)
      </div>
    </div>
  );
}
