const btnMobile = document.getElementById('btn-mobile');
function toggleMenu() {
    const nav = document.getElementById('mobile');
    nav.classList.toggle('active');
    btnMobile.classList.toggle('ativo')
}

btnMobile.addEventListener('click', toggleMenu)