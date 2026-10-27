import './style.css'

// Закрытие выпадающих верхних меню при клике по другому месту
document.addEventListener('click', e => {
  if (!e.target.closest('nav.top-row-menu details[name="nav-menu"]')) {
    document.querySelectorAll('nav.top-row-menu details[name="nav-menu"]').forEach(el => el.removeAttribute('open'));
  }
});

// Сдвиг выпадающего верхнего меню, если оно выходит за пределы экрана.
// Проверяем click а не toggle, чтобы окошко не дергалось при открытии.
document.querySelectorAll('nav.top-row-menu details[name="nav-menu"] > summary').forEach(summary => {
  summary.addEventListener('click', () => {
    const details = summary.parentElement;
    const menu = details.querySelector(':scope > ul.top_dropdown_menu');
    if (!menu) return;
    const parent_styles = window.getComputedStyle(details.parentElement);

    if (!details.open) {
      // Элемент будет раскрыт, корректируем положение

      // Получаем ширину экрана (области просмотра)
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      // Получаем координаты и размеры меню
      const rect = menu.getBoundingClientRect();

      // Если правая граница меню выходит за пределы экрана
      if (rect.right > windowWidth) {
        menu.style.left = 'auto';
        menu.style.right = "-" + parent_styles.paddingLeft;
      }
      // Если левая граница выходит за пределы экрана
      if (rect.left < 0) {
        menu.style.right = 'auto';
        menu.style.left = "-" + parent_styles.paddingRight;
      }

    } else {
      // Элемент будет скрыт, возвращаем его назад для исключения бага.
      // Ставим таймер, чтобы он не прыгал до своего скрытия.
      setTimeout(() => {
        menu.style.right = 'auto';
        menu.style.left = "-" + parent_styles.paddingRight;
      }, 50);
    }
  });
});