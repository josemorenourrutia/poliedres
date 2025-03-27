import * as THREE from "three";
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

const addLines = (geometry) => {

  return new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x000000 }));

}

const addLines2 = (geo) => {
  const geometry = new LineGeometry();
  geometry.setPositions(geo.attributes.position.array);
  geometry.setColors(0x000000);

  const matLine = new LineMaterial({

    color: 0x000000,
    linewidth: 3, // in world units with size attenuation, pixels otherwise
    vertexColors: true,

    // dashed: false,
    alphaToCoverage: true,

  });

  const lines = new Line2(geometry, matLine);
  lines.computeLineDistances();
  // line.scale.set(1, 1, 1);
  return lines

}

export { addLines, addLines2 };