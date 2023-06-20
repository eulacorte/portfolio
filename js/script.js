/*========== Ícone Menu Navbar ==========*/
let menuIcone = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar');

menuIcone.onclick = () => {
    menuIcone.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
};


/*========== Seção de Scroll Link Ativo ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ativo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo');
            })
        }

    });

/*========== Sticky Navbar ==========*/

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== Remover Ícone Menu Navbar quando clicar link navbar (scroll) ==========*/
menuIcone.classList.remove('bx-x');
navbar.classList.remove('ativo');

};


/*========== Modo Dark e Light ==========*/
let modoDarkIcone = document.querySelector('#modoDark-icon');

modoDarkIcone.onclick = () => {
    modoDarkIcone.classList.toggle('bx-sun');
    document.body.classList.toggle('modo-dark');
};

/*========== Revelar ao Scrollar ==========*/
ScrollReveal({
    //reset: true, (QUANDO CLICAR NOS LINKS DE NOVO - HOME, ETC -, ELE VAI MOSTRAR ANIMAÇÕES DE NOVO!)
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.conteudo-inicio, .cabecalho', { origin: 'top' });
ScrollReveal().reveal('.inicio-img img, .servicos-container, .portfolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.conteudo-inicio h1, .sobre-img img', { origin: 'left' });
ScrollReveal().reveal('.conteudo-inicio h3, .conteudo-inicio p, .sobre-conteudo', { origin: 'right' });