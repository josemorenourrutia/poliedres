import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

export const initControls = (camera, canvas, scene) => {
  const raycaster = new THREE.Raycaster();
  raycaster.params.Line.threshold = 0.05;
  raycaster.params.Points.threshold = 0.1;
  const mouse = new THREE.Vector2();

  const controls = {
    active: true,
    dragTransform: true,
    objectsTransform: [],

    orbit: new OrbitControls(camera, canvas),
    transform: new TransformControls(camera, canvas),

    needUpdate: false,

    resetConfigControls: () => {
      controls.dragTransform = false;
      controls.selected = null;
      controls.orbit.enabled = true;
      controls.transform.detach();
    },
    updateObjectsControls: (objects) => {
      controls.objectsTransform = objects;
      controls.resetConfigControls();
    },
    addObjectsControls: (objects) => {
      controls.resetConfigControls();
      for (let i = 0; i < objects.length; i++)
        controls.objectsTransform.push(objects[i]);
    }
  };

  controls.orbit.minDistance = 1;
  controls.orbit.maxDistance = 500;
  controls.orbit.maxPolarAngle = Math.PI / 1;
  // controls.orbit.update();

  controls.transform.size = 0.5;

  scene.add(controls.transform.getHelper());

  controls.resetConfigControls();

  controls.transform.addEventListener('dragging-changed', (event) => {
    controls.dragTransform = event.value;
    controls.orbit.enabled = !event.value;
  });

  canvas.addEventListener('mousedown', (event) => { //return;

    if (controls.dragTransform || !controls.active) return;

    mouse.x = (event.offsetX / event.target.clientWidth) * 2 - 1;
    mouse.y = - (event.offsetY / event.target.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(controls.objectsTransform, true);

    if (intersects.length == 0) {
      controls.transform.detach();
      controls.orbit.enabled = true;
    }
    else {
      const object = intersects[0].object;//.userData.attach

      if (object !== controls.transform.object) {
        controls.transform.detach();
        controls.transform.attach(object);
      }
      // object.geometry.attributes.position.needsUpdate = true;
      // object.matrixWorldNeedsUpdate = true;
    }
  });

  window.addEventListener('keyup', (event) => {

    switch (event.key.toUpperCase()) {
      case 'CONTROL':
        controls.transform.detach();
        controls.orbit.enabled = true;
        controls.active = false;
        break;
    }
  });

  window.addEventListener('keydown', (event) => {
    switch (event.key.toUpperCase()) {

      case 'CONTROL':
        controls.active = true;
        break;

      case 'Q':
        controls.transform.setSpace(controls.transform.space === 'local' ? 'world' : 'local');
        break;

      case 'SHIFT':
        controls.transform.setTranslationSnap(0.5);
        controls.transform.setRotationSnap(THREE.MathUtils.degToRad(15));
        controls.transform.setScaleSnap(0.25);
        break;

      case 'T':
        controls.transform.setMode('translate');
        break;

      case 'R':
        controls.transform.setMode('rotate');
        break;

      case 'S':
        controls.transform.setMode('scale');
        break;


      case '+': // +, =, num+
        controls.transform.setSize(controls.transform.size + 0.1);
        break;

      case '-': // -, _, num-
        controls.transform.setSize(Math.max(controls.transform.size - 0.1, 0.1));
        break;

      case 'X': // X
        controls.transform.showX = !controls.transform.showX;
        break;

      case 'Y': // Y
        controls.transform.showY = !controls.transform.showY;
        break;

      case 'Z': // Z
        controls.transform.showZ = !controls.transform.showZ;
        break;

      case ' ': // Spacebar
        controls.transform.enabled = !controls.transform.enabled;
        break;

      case 'ESCAPE': // Esc
        controls.transform.reset();
        break;
    }
  });

  return controls;
}
