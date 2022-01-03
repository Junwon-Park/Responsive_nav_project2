let toggle = document.querySelector('.toggle__btn');
let menuList = document.querySelector('.menu__list');
let iconList = document.querySelector('.icon__list');

console.log(toggle);

toggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
  iconList.classList.toggle('active');
  // classList의 메서드의 인자는 ''를 사용하고 클래스던 아이디던 .이나 #을 붙이지 않고 이름만 쓴다.
  console.log('Clicked!!!');
  console.log(menuList.classList.item(1));
});
