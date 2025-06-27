const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;
});
