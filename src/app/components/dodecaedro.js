import * as THREE from "three";
import addFace from './addFace2.js'

import { ShapeGeometry } from "./ShapeGeometry.js";


const fi = (1 + Math.sqrt(5)) / 2;
const angle = 2 * Math.PI / 5;
const angle2 = Math.PI / 2 - angle / 2;
const k = 1;
// const pentagonGeometry = new THREE.BufferGeometry().setFromPoints([
//   new THREE.Vector3(k, 0, 0),
//   new THREE.Vector3(k * Math.cos(angle), 0, k * Math.cos(angle)),
//   new THREE.Vector3(k * Math.cos(2 * angle), 0, k * Math.cos(2 * angle)),
//   new THREE.Vector3(k * Math.cos(3 * angle), 0, k * Math.cos(3 * angle)),
//   new THREE.Vector3(k * Math.cos(4 * angle), 0, k * Math.cos(4 * angle)),
// ]);
const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

const pentagonShape = new THREE.Shape()
  .moveTo(0, 0)
  // .lineTo(k, 0)
  .lineTo(k * Math.cos(angle), -k * Math.sin(angle))
  .lineTo(-k * 0.5, -k * 0.5 / Math.tan(Math.PI / 10))
  .lineTo(-k - k * Math.cos(angle), -k * Math.sin(angle))
  .lineTo(-k, 0)
// .lineTo(k * Math.cos(4.5 * angle), k * Math.sin(4.5 * angle))
// .lineTo(k, 0)

const rotateMove = (positionGeometry, index, shape) => {
  if (index === 0) return;

  const position = positionGeometry.attributes.position.array;
  const actualIndex = 3 * index >= position.length ? 0 : index;
  const prevIndex = 3 * (index - 1);
  shape.rotation.y = Math.PI - Math.atan2(position[3 * actualIndex + 2] - position[prevIndex + 2], position[3 * actualIndex] - position[prevIndex]);
  shape.position.x = position[prevIndex];
  shape.position.z = position[prevIndex + 2];
}

const dodecaedro1 = (position = { x: 0, y: 0, z: 0 }) => {

  const faces = [];
  const moveFaces = [];
  const polyhedron = new THREE.Group();


  const pentagonGeometry = new ShapeGeometry(pentagonShape);
  let face = addFace(pentagonShape, 0xff2356);
  const baseFace = new THREE.Group().add(face);
  polyhedron.add(baseFace);

  let groupFace = new THREE.Group();
  baseFace.add(groupFace);
  face = addFace(pentagonShape, 0xff2356);
  // groupFace.rotation.y = -(2 * Math.PI / 5);
  groupFace.rotation.y = Math.PI + (2 * Math.PI / 5);
  groupFace.add(face);
  // face.rotation.y += (3 * Math.PI / 5) / 2;
  moveFaces[0] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -(2 * Math.PI / 10);
  groupFace.position.x = Math.cos(angle);
  groupFace.position.z = -Math.sin(angle);
  baseFace.add(groupFace);
  moveFaces[1] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  baseFace.add(groupFace);
  moveFaces[2] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI - (2 * Math.PI / 5);
  groupFace.position.x = -1 - Math.cos(angle);
  groupFace.position.z = - Math.sin(angle);
  baseFace.add(groupFace);
  moveFaces[3] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI;
  groupFace.position.x = - 1;
  baseFace.add(groupFace);
  moveFaces[4] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  moveFaces[0].add(groupFace);
  moveFaces[5] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  moveFaces[1].add(groupFace);
  moveFaces[6] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  moveFaces[2].add(groupFace);
  moveFaces[7] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  moveFaces[3].add(groupFace);
  moveFaces[8] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  moveFaces[4].add(groupFace);
  moveFaces[9] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -(1 * Math.PI / 5);
  groupFace.position.x = Math.cos(angle);
  groupFace.position.z = -Math.sin(angle);
  moveFaces[5].add(groupFace);
  moveFaces[10] = face;


  // groupFace = new THREE.Group();
  // face = addFace(triangleGeometry, 0xff2356);
  // groupFace.add(face);
  // groupFace.rotation.y = Math.PI / 3;
  // groupFace.position.x = -1;
  // groupFace.position.z = -Math.sqrt(3);
  // moveFaces[1].add(groupFace)
  // moveFaces[2] = face;

  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}

const dodecaedro2 = (position = { x: 0, y: 0, z: 0 }) => {

  const faces = [];
  const moveFaces = [];
  const polyhedron = new THREE.Group();


  const pentagonGeometry = new ShapeGeometry(pentagonShape);
  let face = addFace(pentagonShape, 0xff2356);
  const baseFace = new THREE.Group().add(face);
  polyhedron.add(baseFace);

  let groupFace = new THREE.Group();
  baseFace.add(groupFace);
  face = addFace(pentagonShape, 0xff2356);
  // groupFace.rotation.y = -(2 * Math.PI / 5);
  groupFace.rotation.y = Math.PI + (2 * Math.PI / 5);
  groupFace.add(face);
  // face.rotation.y += (3 * Math.PI / 5) / 2;
  moveFaces[0] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -(2 * Math.PI / 10);
  groupFace.position.x = Math.cos(angle);
  groupFace.position.z = -Math.sin(angle);
  baseFace.add(groupFace);
  moveFaces[1] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  baseFace.add(groupFace);
  moveFaces[2] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI - (2 * Math.PI / 5);
  groupFace.position.x = -1 - Math.cos(angle);
  groupFace.position.z = - Math.sin(angle);
  baseFace.add(groupFace);
  moveFaces[3] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI;
  groupFace.position.x = - 1;
  baseFace.add(groupFace);
  moveFaces[4] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  moveFaces[0].add(groupFace);
  moveFaces[5] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -(1 * Math.PI / 5);
  groupFace.position.x = Math.cos(angle);
  groupFace.position.z = -Math.sin(angle);
  moveFaces[5].add(groupFace);
  moveFaces[6] = face;


  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI + (2 * Math.PI / 5);
  moveFaces[6].add(groupFace);
  moveFaces[7] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -(2 * Math.PI / 10);
  groupFace.position.x = Math.cos(angle);
  groupFace.position.z = -Math.sin(angle);
  moveFaces[6].add(groupFace);
  moveFaces[8] = face;

  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = (2 * Math.PI / 10);
  groupFace.position.x = -0.5;
  groupFace.position.z = -0.5 / Math.tan(Math.PI / 10);
  moveFaces[6].add(groupFace);
  moveFaces[9] = face;


  groupFace = new THREE.Group();
  face = addFace(pentagonShape, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI - (2 * Math.PI / 5);
  groupFace.position.x = -1 - Math.cos(angle);
  groupFace.position.z = - Math.sin(angle);
  moveFaces[6].add(groupFace);
  moveFaces[10] = face;


  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}

export { dodecaedro1, dodecaedro2 }