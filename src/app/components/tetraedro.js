import * as THREE from "three";
import addFace from './addFace.js'

const triangleGeometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(-1, 0, -Math.sqrt(3)),
  new THREE.Vector3(-2, 0, 0),
  new THREE.Vector3(0, 0, 0),
]);
const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });


const rotateMove = (positionGeometry, index, shape) => {
  if (index === 0) return;

  const position = positionGeometry.attributes.position.array;
  const actualIndex = 3 * index >= position.length ? 0 : index;
  const prevIndex = 3 * (index - 1);
  shape.rotation.y = Math.PI - Math.atan2(position[3 * actualIndex + 2] - position[prevIndex + 2], position[3 * actualIndex] - position[prevIndex]);
  shape.position.x = position[prevIndex];
  shape.position.z = position[prevIndex + 2];
}

const tetraedro1 = (position = { x: 0, y: 0, z: 0 }) => {
  // Crear 4 triángulos para el desarrollo plano
  // Desarrollo plano del tetraedro (2D)
  const faces = [];
  const moveFaces = [];
  const polyhedron = new THREE.Group();

  for (let i = 0; i < 4; i++) {
    const face = addFace(triangleGeometry, 0x23ff56);
    if (i > 0) moveFaces.push(face); // Guardar referencia para la animación
    faces[i] = new THREE.Group().add(face)
    rotateMove(triangleGeometry, i, faces[i])
    polyhedron.add(faces[i])
  }
  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };
  // return triangles;

}

const tetraedro2 = (position = { x: 0, y: 0, z: 0 }) => {

  const moveFaces = [];

  let face = addFace(triangleGeometry, 0xff2356);
  const polyhedron = new THREE.Group().add(face);

  let groupFace = new THREE.Group();
  face.add(groupFace);
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -Math.PI / 3;
  moveFaces[0] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = - Math.PI / 3;
  moveFaces[0].add(groupFace);
  moveFaces[1] = face;

  // const triangle3 = new THREE.Mesh(triangleGeometry, triangleMaterial);
  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[1].add(groupFace)
  moveFaces[2] = face;

  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}

export { tetraedro1, tetraedro2 }