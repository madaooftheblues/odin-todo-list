const menuElm = document.querySelector('.menu');

menuElm.addEventListener('click', (e) => {
  const item = e.target.closest('.menu-item');

  if (!item) return;
  const menuItems = menuElm.querySelectorAll('.menu-item');
  menuItems.forEach((item) => item.classList.remove('selected'));

  item.classList.add('selected');
});
