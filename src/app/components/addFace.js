import * as THREE from "three";
import { addLines, addLines2 } from './addLines';


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
  const mesh = new THREE.Mesh(geometry, material);
  // let mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide }));

  const lines = addLines(geometry);
  // const lines = addLines2(geometry);
  mesh.add(lines)

  // group.add(mesh);

  // const group = new THREE.Group().add(mesh);
  return mesh
}

export default addFace;