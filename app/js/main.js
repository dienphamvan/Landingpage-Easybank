const body = document.querySelector('body')
const header = body.querySelector('header')
const headerMenu = header.querySelector('.header__menu--hambuger')
const overLay = header.querySelector('.overlay')
headerMenu.addEventListener('click', function () {
    if (header.classList.contains('open')) {
        body.removeAttribute('style');
        overLay.classList.remove('fade-in');
        overLay.classList.add('fade-out');
        header.classList.remove('open');
        setTimeout(function () {
            overLay.style.display = 'none' // none
        }, 400)
    }
    else {
        header.classList.add('open');
        body.style.overflow = 'hidden';
        overLay.removeAttribute('style');
        overLay.classList.add('fade-in');
        overLay.classList.remove('fade-out');
        overLay.style.display = 'block';
    }
})