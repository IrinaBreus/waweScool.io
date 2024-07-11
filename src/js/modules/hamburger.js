const hamburger = () => {
    const trigger = document.querySelector('.header__menu-btn'),
          menu = document.querySelector('.header__menu'),
          links = menu.querySelectorAll('li > a');

    trigger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        trigger.classList.toggle('header__menu-btn_active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('header__menu_active');
            trigger.classList.remove('header__menu-btn_active');
        })

    })
}

export default hamburger;