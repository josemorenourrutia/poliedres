import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

import './gui.css';

const initGUI = ({ container }) => {
  const obj = { 'Títol': 'Poliedres regulars', Tetraedre: 0, 'Hexaedre (cub)': 0, Octaedre: 0, Dodecaedre: 0, Icosaedre: 0 }

  const gui = new GUI({ container: container });
  // gui.add(document, 'title');
  gui.add(obj, 'Títol');

  const number = gui.add(obj, 'Tetraedre', 0, Math.acos(-1 / 3)); // min, max
  const number2 = gui.add(obj, 'Hexaedre (cub)', 0, Math.PI / 2); // min, max
  const number3 = gui.add(obj, 'Octaedre', 0, Math.PI - 2 * Math.asin(Math.cos(Math.PI / 4) / Math.sin(Math.PI / 3))); // min, max
  const number4 = gui.add(obj, 'Dodecaedre', 0, Math.PI - 2 * Math.asin(Math.cos(Math.PI / 3) / Math.sin(Math.PI / 5))); // min, max
  const number5 = gui.add(obj, 'Icosaedre', 0, Math.PI - 2 * Math.asin(Math.cos(Math.PI / 5) / Math.sin(Math.PI / 3))); // min, max

  return { gui, obj, number, number2, number3, number4, number5 };
}

export default initGUI;