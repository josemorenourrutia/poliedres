import * as THREE from 'three'

import { initOrbitControls, initControls, initLighting, onResize } from './index'

export const typeControls = Object.freeze({
  NOCONTROLS: 0,
  ORBITCONTROL: 1,
  ORBITTRANSFORMCONTROL: 2,
});

export const initScene = ({ container, cameraType, backgroundColor, fogColor, disableShadows, disableLights, controlsType }) => {
  const init = (fn) => {
    // basic scene setup
    const scene = new THREE.Scene()

    if (backgroundColor) { scene.backgroundColor = backgroundColor }

    if (fogColor) { scene.fog = new THREE.Fog(fogColor, 0.0025, 50) }

    const width = container === undefined ? window.innerWidth : container.clientWidth;
    const height = container === undefined ? window.innerHeight : container.clientHeight;
    // setup camera and basic renderer

    let camera, frustumSize = 10;
    const aspect = width / height;
    if (cameraType === 'OrthographicCamera') {
      camera = new THREE.OrthographicCamera(
        -frustumSize * aspect / 2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        - frustumSize / 2,
        -100, 1000);
    }
    else {
      camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.outputEncoding = THREE.sRGBEncoding
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.setClearColor(backgroundColor)
      ;
    // onResize(camera, renderer, container)
    renderer.setSize(width, height);

    const canvas = renderer.domElement;
    // if (container === undefined) document.body.appendChild(canvas)
    // if (container === undefined) document.body.append(canvas)
    if (container === undefined) document.body.prepend(canvas);
    else container.append(canvas);

    // initialize orbit controls
    let controls
    switch (controlsType) {
      case typeControls.NOCONTROLS:
        controls = null;
        break;
      case typeControls.ORBITCONTROL:
        controls = initOrbitControls(camera, renderer);
        break;
      case typeControls.ORBITTRANSFORMCONTROL:
        controls = initControls(camera, canvas, scene);
        break;

      default:
        break;
    }
    // add some basic lighting to the scene
    if (!disableLights ?? false) { initLighting(scene, { disableShadows }) }

    onResize(camera, renderer, container, frustumSize);

    fn({ scene, camera, renderer, controls });
  }

  return init;
}
