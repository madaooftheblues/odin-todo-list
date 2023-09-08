import pubsub from './pubsub';
const menuElm = document.querySelector('.menu');

const menu = {
  selected: menuElm.querySelector('li'),
  bindEvents() {
    menuElm.addEventListener('click', (e) => {
      const item = e.target.closest('.menu-item');

      if (!item) return;
      menu.selected.classList.remove('selected');
      menu.selected = item;
      pubsub.publish('itemSelected', item.querySelector('div').id);
      item.classList.add('selected');
    });
  }
};

export default menu;
