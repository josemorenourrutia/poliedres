import * as THREE from "three";
import TWEEN from '@tweenjs/tween.js'
import { initScene, foreverPlane } from "./commons/index.js";
// import { initScene, foreverPlane, intializeRendererControls, initializeHelperControls, applyShadowsAndDepthWrite } from "./commons/index.js";
import initGUI from './basicGUI.js'

import { typeControls } from './commons/bootstrap.js'
import { tetraedro1, tetraedro2 } from "./components/tetraedro.js";

import { hexaedro1, hexaedro2 } from "./components/hexaedro.js";

import { octaedro1, octaedro2, octaedro3, octaedro4 } from "./components/octaedro.js";

import { dodecaedro1, dodecaedro2 } from "./components/dodecaedro.js";

import { icosaedro1 } from "./components/icosaedro.js";

const A = new THREE.Vector3(0, 0, 0)
const B = new THREE.Vector3(1, Math.sqrt(3), 0)
const C = new THREE.Vector3(2, 0, 0)
const SetupDraw = ({ container }) => {

  const props = {
    container: container,
    // cameraType: 'OrthographicCamera',
    cameraType: 'PerspectiveCamera',
    backgroundColor: 0x666666,
    // fogColor: 0xffffff,
    disableShadows: true,
    // disableLights, 
    // disableDefaultControls
    controlsType: typeControls.ORBITCONTROL
  };

  THREE.Object3D.prototype.rotateAroundWorldAxis = function (vecA, vecB, angle, posA = vecA) {

    // rotate object around axis in world space (the axis passes through point)
    // axis is assumed to be normalized
    // assumes object does not have a rotated parent


    const vec = new THREE.Vector3().copy(vecA).sub(vecB).normalize();
    const q = new THREE.Quaternion().setFromAxisAngle(vec, angle);

    this.applyQuaternion(q);

    this.position.sub(posA);
    this.position.applyQuaternion(q);
    this.position.add(posA);

  };


  initScene(props)(({ scene, camera, renderer, controls }) => {

    const gui = initGUI({ container: container });
    gui.number.onChange((e) => {
      for (let i = 0; i < 2; i++) {
        const faces = groupFaces[i].moveFaces;

        faces.forEach((t) => {
          // if (index !== 0) 
          t.rotation.setFromVector3(rotationAxes.set(e, 0, 0))
        });
      }
    })
    gui.number2.onChange((e) => {
      for (let i = 2; i < 4; i++) {
        const faces = groupFaces[i].moveFaces;

        faces.forEach((t) => {
          // if (index !== 0) 
          t.rotation.setFromVector3(rotationAxes.set(e, 0, 0))
        });
      }
    })
    gui.number3.onChange((e) => {
      for (let i = 4; i < 8; i++) {
        const faces = groupFaces[i].moveFaces;

        faces.forEach((t) => {
          // if (index !== 0) 
          t.rotation.setFromVector3(rotationAxes.set(e, 0, 0))
        });
      }
    })

    gui.number4.onChange((e) => {
      for (let i = 8; i < 10; i++) {
        const faces = groupFaces[i].moveFaces;

        faces.forEach((t) => {
          // if (index !== 0) 
          t.rotation.setFromVector3(rotationAxes.set(e, 0, 0))
        });
      }
    })

    gui.number5.onChange((e) => {
      for (let i = 10; i < groupFaces.length; i++) {
        const faces = groupFaces[i].moveFaces;

        faces.forEach((t) => {
          // if (index !== 0) 
          t.rotation.setFromVector3(rotationAxes.set(e, 0, 0))
        });
      }
    })

    const helper = new THREE.GridHelper(50, 50);
    // helper.position.y = - 199;
    helper.material.opacity = 0.5;
    helper.material.transparent = true;
    scene.add(helper);

    camera.position.x = -16;
    camera.position.y = 16;
    camera.position.z = 16;


    const groupFaces = [];
    groupFaces[0] = tetraedro1({ x: -6, y: 0, z: -14 });
    groupFaces[1] = tetraedro2({ x: 2, y: 0, z: -14 });
    scene.add(groupFaces[0].polyhedron, groupFaces[1].polyhedron)

    groupFaces[2] = hexaedro1({ x: -6, y: 0, z: -7 });
    groupFaces[3] = hexaedro2({ x: 2, y: 0, z: -7 });
    scene.add(groupFaces[2].polyhedron, groupFaces[3].polyhedron)

    groupFaces[4] = octaedro1({ x: -6, y: 0, z: 0 });
    groupFaces[5] = octaedro2({ x: 2, y: 0, z: 0 });
    groupFaces[6] = octaedro3({ x: 10, y: 0, z: 0 });
    groupFaces[7] = octaedro4({ x: 18, y: 0, z: 0 });
    scene.add(groupFaces[4].polyhedron, groupFaces[5].polyhedron, groupFaces[6].polyhedron, groupFaces[7].polyhedron)

    groupFaces[8] = dodecaedro1({ x: -6, y: 0, z: 6 });
    groupFaces[9] = dodecaedro2({ x: 3, y: 0, z: 6 });
    scene.add(groupFaces[8].polyhedron, groupFaces[9].polyhedron)

    groupFaces[10] = icosaedro1({ x: -6, y: 0, z: 13 });
    scene.add(groupFaces[10].polyhedron)
    // Animación de rotación de caras laterales
    const duration = 4000; // Duración de la animación en ms

    const p = 3, q = 3;
    const rotationAxes = new THREE.Vector3(1, 0, 0);
    const angle = Math.PI - 2 * Math.asin(Math.cos(Math.PI / q) / Math.sin(Math.PI / p));
    const angle2 = Math.PI - 2 * Math.asin(Math.cos(Math.PI / 3) / Math.sin(Math.PI / 4))
    const angle3 = Math.PI - 2 * Math.asin(Math.cos(Math.PI / 4) / Math.sin(Math.PI / 3))
    const angle4 = Math.PI - 2 * Math.asin(Math.cos(Math.PI / 3) / Math.sin(Math.PI / 5))
    const angle5 = Math.PI - 2 * Math.asin(Math.cos(Math.PI / 5) / Math.sin(Math.PI / 3))

    // Animación de los triángulos laterales
    const grupoTween = [];
    for (let i = 0; i < groupFaces.length; i++) {
      const faces = groupFaces[i].moveFaces;
      grupoTween[i] = [];
      for (let index = 0; index < faces.length; index++) {
        const face = faces[index];

        // Crear un objeto para almacenar la rotación actual
        const rotation = { angle: 0 };
        const rotation2 = { angle: 0 };
        const rotation3 = { angle: 0 };
        const rotation4 = { angle: 0 };
        const rotation5 = { angle: 0 };

        // Animación con TWEEN


        grupoTween[i][index - 0] = new TWEEN.Tween(i < 2 ? rotation : (i < 4 ? rotation2 : (i < 8 ? rotation3 : (i < 10 ? rotation4 : rotation5))))
          .to({ angle: i < 2 ? angle : (i < 4 ? angle2 : (i < 8 ? angle3 : (i < 10 ? angle4 : angle5))) }, duration) // Rotar hasta el ángulo deseado
          .easing(TWEEN.Easing.Quadratic.Out)
          // .delay(index * 500) // Retraso para cada cara
          .onUpdate(() => {
            // Aplicar la rotación al triángulo
            i < 2 ? gui.number.setValue(rotation.angle) : (i < 4 ? gui.number2.setValue(rotation2.angle) : (i < 8 ? gui.number3.setValue(rotation3.angle) : (i < 10 ? gui.number4.setValue(rotation4.angle) : gui.number5.setValue(rotation5.angle))))
            face.rotation.setFromVector3(rotationAxes.set(i < 2 ? rotation.angle : (i < 4 ? rotation2.angle : (i < 8 ? rotation3.angle : (i < 10 ? rotation4.angle : rotation5.angle))), 0, 0));
          })
          .start();



      }
    }

    switch (props.controlsType) {
      case typeControls.ORBITCONTROL:
        controls.update();
        break;
      case typeControls.ORBITTRANSFORMCONTROL:
        controls.addObjectsControls([grupoTriangles[0].polyhedron, grupoTriangles[1].polyhedron])
        controls.orbit.update();
        break;
    }


    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      for (let i = 0; i < grupoTween.length; i++) {
        const tween = grupoTween[i];
        tween.forEach(t => t.update())

        // for (let j = 0; j < array.length; j++) {
        //   const element = array[j];

        // }

      }
      // tween.forEach(t => t.update())
      // triangles[0].rotateAroundWorldAxis(A, B, 0.01, C)

      // camera.position.y = gui.number1;
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // cube.rotation.z += 0.01;

      // controls.orbit.update();
    }
    animate();

  });

}

export default SetupDraw;
