export const onResize = (camera, renderer, container, frustumSize = 10) => {

  const resizer = () => {

    const width = container === undefined ? window.innerWidth : container.clientWidth;
    const height = container === undefined ? window.innerHeight : container.clientHeight;
    const aspect = width / height;

    if (camera.type === 'OrthographicCamera') {
      camera.left = - frustumSize * aspect / 2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = - frustumSize / 2;
    }
    else {
      camera.aspect = aspect;//container.clientWidth / container.clientHeight;
    }
    camera.updateProjectionMatrix()
    renderer.setSize(width, height);//container.clientWidth, container.clientHeight);
    // }
  }
  window.addEventListener('resize', resizer, false)
}
