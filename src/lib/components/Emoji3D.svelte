<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let emojis: THREE.Group[] = [];

  interface EmojiConfig {
    text: string;
    size: number;
    color: string;
    x: number;
    y: number;
    z: number;
  }

  const emojiConfigs: EmojiConfig[] = [
    { text: '🔋', size: 2, color: '#FF6B6B', x: -8, y: 5, z: -5 },
    { text: '⚡', size: 2.5, color: '#FFD93D', x: 8, y: -3, z: -5 },
    { text: '🚗', size: 2, color: '#6BCF7F', x: 0, y: 6, z: -8 },
    { text: '☀️', size: 2, color: '#FF9F43', x: -5, y: -4, z: -6 },
    { text: '🔌', size: 1.8, color: '#4ECDC4', x: 6, y: 4, z: -7 },
  ];

  function createEmojiMesh(config: EmojiConfig): THREE.Group {
    const group = new THREE.Group();

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return group;

    // White background for better contrast
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 512, 512);

    // Try multiple fonts for better emoji support
    ctx.font = 'bold 420px "Segoe UI Emoji", "Noto Color Emoji", "Apple Color Emoji", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000000';
    
    // Draw emoji with fallback rendering
    try {
      ctx.fillText(config.text, 256, 256);
    } catch (e) {
      // Fallback: draw a simple colored square if emoji fails
      ctx.fillStyle = config.color;
      ctx.fillRect(50, 50, 412, 412);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      emissive: new THREE.Color(config.color),
      emissiveIntensity: 0.5,
      metalness: 0.2,
      roughness: 0.6,
    });

    const geometry = new THREE.PlaneGeometry(config.size, config.size);
    const mesh = new THREE.Mesh(geometry, material);

    group.add(mesh);
    group.position.set(config.x, config.y, config.z);
    group.userData = { rotationSpeed: Math.random() * 0.02 + 0.01, bobSpeed: Math.random() * 2 + 1 };

    return group;
  }

  onMount(() => {
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    emojiConfigs.forEach((config) => {
      const emojiMesh = createEmojiMesh(config);
      scene.add(emojiMesh);
      emojis.push(emojiMesh);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x4B83FF, 1);
    pointLight.position.set(10, 10, 20);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00E676, 0.6);
    pointLight2.position.set(-10, -10, 15);
    scene.add(pointLight2);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      emojis.forEach((emoji) => {
        emoji.rotation.x += emoji.userData.rotationSpeed;
        emoji.rotation.z += emoji.userData.rotationSpeed * 0.5;

        const originalY = emoji.position.y;
        emoji.position.y = originalY + Math.sin(time * emoji.userData.bobSpeed) * 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  });
</script>

<div class="emoji-3d-container" bind:this={container} />

<style>
  .emoji-3d-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.5;
    z-index: 1;
  }
</style>
