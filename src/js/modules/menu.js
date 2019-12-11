export function menu () {
  const menuIconEl = document.querySelector('.menu-icon');
  const sidenavEl = document.querySelector('.sidenav');
  const sidenavCloseEl = document.querySelector('.sidenav__close-icon');

  // Add and remove provided class names
  function toggleClassName(el, className) {
    el.classList.toggle(className);
  }

  menuIconEl.addEventListener('click', function() {
    toggleClassName(sidenavEl, 'active')
  });

  sidenavCloseEl.addEventListener('click', function() {
    toggleClassName(sidenavEl, 'active')
  })
};