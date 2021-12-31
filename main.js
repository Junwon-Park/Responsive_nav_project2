let toggle = document.querySelector('.toggle__btn');
let menuList = document.querySelector('.menu__list');
let iconList = document.querySelector('.icon__list');

console.log(toggle);

toggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
  iconList.classList.toggle('active');
  console.log('Clicked!!!');
  console.log(menuList.classList.item(1));
});
