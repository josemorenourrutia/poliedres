import * as THREE from "three";
import { addLines, addLines2 } from './addLines';

import { ShapeGeometry } from "./ShapeGeometry.js";

const addFace = (geometry, color) => {

  // const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
  // const material = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide })
  const material = new THREE.MeshBasicMaterial({
    color: color ?? 'crimson',
    transparent: true,
    opacity: 0.6,
    // side: THREE.BackSide,
    side: THREE.DoubleSide,
    // depthTest: true,
    alphaToCoverage: true,
  })
  // const material = new THREE.MeshPhongMaterial({
  //   color: 'crimson',
  //   transparent: true,
  //   opacity: 0.4,
  //   side: THREE.DoubleSide,
  //   depthTest: false,
  // })

  const pentagonGeometry = new ShapeGeometry(geometry);
  const mesh = new THREE.Mesh(pentagonGeometry, material);
  // let mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide }));

  geometry.autoClose = true;
  const points = geometry.getPoints();
  const geometryPoints = new THREE.BufferGeometry().setFromPoints(points);

  const lines = addLines(geometryPoints);
  // const lines = addLines2(geometry);
  lines.rotateX(Math.PI / 2)
  mesh.add(lines)

  // group.add(mesh);

  // const group = new THREE.Group().add(mesh);
  return mesh
}

export default addFace;