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

const octaedro1 = (position = { x: 0, y: 0, z: 0 }) => {

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

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -Math.PI / 3;
  moveFaces[2].add(groupFace)
  moveFaces[3] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[3].add(groupFace)
  moveFaces[4] = face;


  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[4].add(groupFace)
  moveFaces[5] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = - Math.PI / 3;
  // groupFace.position.x = -1;
  // groupFace.position.z = Math.sqrt(3);
  // polyhedron.children[0].add(groupFace);
  moveFaces[3].add(groupFace);
  moveFaces[6] = face;


  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}


const octaedro2 = (position = { x: 0, y: 0, z: 0 }) => {

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

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -Math.PI / 3;
  moveFaces[2].add(groupFace)
  moveFaces[3] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[3].add(groupFace)
  moveFaces[4] = face;


  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[4].add(groupFace)
  moveFaces[5] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -1 * Math.PI / 1;
  groupFace.position.x = -2;
  // groupFace.position.z = Math.sqrt(3);
  polyhedron.children[0].add(groupFace);
  // moveFaces[3].add(groupFace);
  moveFaces[6] = face;


  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}

const octaedro3 = (position = { x: 0, y: 0, z: 0 }) => {

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

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -Math.PI / 3;
  moveFaces[2].add(groupFace)
  moveFaces[3] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[3].add(groupFace)
  moveFaces[4] = face;


  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[2].add(groupFace)
  moveFaces[5] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = - Math.PI / 3;
  // groupFace.position.x = -1;
  // groupFace.position.z = Math.sqrt(3);
  // polyhedron.children[0].add(groupFace);
  moveFaces[1].add(groupFace);
  moveFaces[6] = face;

  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}

const octaedro4 = (position = { x: 0, y: 0, z: 0 }) => {

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

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -Math.PI / 3;
  moveFaces[2].add(groupFace)
  moveFaces[3] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[0].add(groupFace)
  moveFaces[4] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = Math.PI / 3;
  groupFace.position.x = -1;
  groupFace.position.z = -Math.sqrt(3);
  moveFaces[4].add(groupFace)
  moveFaces[5] = face;

  groupFace = new THREE.Group();
  face = addFace(triangleGeometry, 0xff2356);
  groupFace.add(face);
  groupFace.rotation.y = -Math.PI / 3;
  // groupFace.position.x = -1;
  // groupFace.position.z = -Math.sqrt(3);
  moveFaces[1].add(groupFace)
  moveFaces[6] = face;

  polyhedron.position.set(position.x, position.y, position.z);

  return { polyhedron, moveFaces };

}

export { octaedro1, octaedro2, octaedro3, octaedro4 }