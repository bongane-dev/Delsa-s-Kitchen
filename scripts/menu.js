const productButtons = document.querySelectorAll('.product-box');
const foodMenus = document.querySelectorAll('.foodMenu');

productButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const menu = document.querySelector(`[data-menu="${category}"]`);
    const isOpen = !menu.hidden;

    foodMenus.forEach((foodMenu) => {
      foodMenu.hidden = true;
    });
    productButtons.forEach((productButton) => {
      productButton.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      menu.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
