import * as THREE from "three";
import addFace from './addFace.js'
import { ShapeGeometry } from "./ShapeGeometry.js";

const quadGeometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, -2),
  new THREE.Vector3(-2, 0, -2),
  new THREE.Vector3(-2, 0, 0),
  new THREE.Vector3(0, 0, 0),
]);
const triangleGeometry2D = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector2(0, 0),
  new THREE.Vector2(0, -2),
  new THREE.Vector2(-2, -2),
  new THREE.Vector2(-2, 0),
  new THREE.Vector2(0, 0),
]);

const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

const quadShape = new THREE.Shape()
  .moveTo(0, 0)
  .lineTo(0, -2)
  .lineTo(-2, -2)
  .lineTo(-2, 0)
// .lineTo(0, 0)


const rotateMove = (positionGeometry, index, shape) => {
  if (index === 0) return;

  const position = positionGeometry.attributes.position.array;
  const actualIndex = 3 * index >= position.length ? 0 : index;
  const prevIndex = 3 * (index - 1);
  shape.rotation.y = Math.PI - Math.atan2(position[3 * actualIndex + 2] - position[prevIndex + 2], position[3 * actualIndex] - position[prevIndex]);
  shape.position.x = position[prevIndex];
  shape.position.z = position[prevIndex + 2];
}

const hexaedro1 = (position = { x: 0, y: 0, z: 0 }) => {
  // Crear 4 triángulos para el desarrollo plano
  // Desarrollo plano del tetraedro (2D)
  const faces = [];
  const moveFaces = [];
  const polyhedron = new THREE.Group();

  // quadShape.autoClose = true;
  const quad = new ShapeGeometry(quadShape)

  for (let i = 0; i < 5; i++) {
    const face = addFace(quad, 0x23ff56);
    if (i > 0) moveFaces.push(face); // Guardar referencia para la animación
    faces[i] = new THREE.Group().add(face)
    rotateMove(quadGeometry, i, faces[i])
    polyhedron.add(faces[i])
  }

  const groupFace = new THREE.Group();
  const face = addFace(quad, 0x23ff56);
  groupFace.add(face);
  groupFace.position.z = -2;
  faces[1].children[0].add(groupFace);
  moveFaces.push(face)

  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };
}

const hexaedro2 = (position = { x: 0, y: 0, z: 0 }) => {
  // Crear 4 triángulos para el desarrollo plano
  // Desarrollo plano del tetraedro (2D)
  const faces = [];
  const moveFaces = [];
  const polyhedron = new THREE.Group();

  // quadShape.autoClose = true;
  const quad = new ShapeGeometry(quadShape)

  for (let i = 0; i < 3; i++) {
    const face = addFace(quad, 0x23ff56);
    if (i > 0) moveFaces.push(face); // Guardar referencia para la animación
    faces.push(new THREE.Group().add(face))
    rotateMove(quadGeometry, i, faces[i])
    polyhedron.add(faces[i])
  }

  let face = addFace(quad, 0x23ff56);
  let groupFace = new THREE.Group().add(face)
  groupFace.add(face);
  groupFace.position.z = -2;
  moveFaces[0].add(groupFace);
  moveFaces[2] = face;

  face = addFace(quad, 0x23ff56);
  groupFace = new THREE.Group().add(face)
  groupFace.position.z = -2;
  moveFaces[2].add(groupFace);
  moveFaces[3] = face;

  face = addFace(quad, 0x23ff56);
  groupFace = new THREE.Group().add(face)
  groupFace.rotation.y = 3 * Math.PI / 2;
  moveFaces[3].add(groupFace);
  moveFaces[4] = face;

  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}


export { hexaedro1, hexaedro2 }