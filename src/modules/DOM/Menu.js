import pubsub from '../pubsub';
const menuElm = document.querySelector('.menu');

menuElm.addEventListener('click', (e) => {
  const item = e.target.closest('.menu-item');

  if (!item) return;
  const menuItems = menuElm.querySelectorAll('.menu-item');
  menuItems.forEach((item) => item.classList.remove('selected'));
  pubsub.publish('itemSelected', item.querySelector('div').id);
  item.classList.add('selected');
});

const show = () => {
  console.log('hey');
};

export default show;
