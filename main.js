function addCSSFile() {
    const cssLink = document.createElement('link');

    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';

    const cssLinkIcon = document.createElement('link');

    cssLinkIcon.rel =  'stylesheet';
    cssLinkIcon.type = 'text/css';
    cssLinkIcon.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

    document.head.appendChild(cssLink);
    document.head.appendChild(cssLinkIcon);
}

addCSSFile();

function createHtmlTagAndSetContent(tag, tagContennt) {
    const container = document.createElement(tag);

    container.textContent = tagContennt;

    return container;
}

function addHeader() {
    const body = document.querySelector('body');

    const header = document.createElement('header');

    const headerNav = document.createElement('nav');

    const logo = createHtmlTag('div', 'logo');

    const logoText = createHtmlTagAndContent('h3', 'Shopping Coders');

    const iconeMenu = createHtmlTag('span', 'material-symbols-outlined', 'iconeMenu');
    iconeMenu.textContent = 'menu';


    const menu = createHtmlTag('div', 'menu');

        const lojas = createHtmlTag('div', 'lojas');

        const lojash3 = createHtmlTagAndContent('h3','Lojas');

        const lojasUl = document.createElement('ul');

        const lojasLi1 = createHtmlTagAndContent('li','+Nova Loja');

        const lojasLi2 = createHtmlTagAndContent('li', 'Todas as Lojas');

            lojasUl.appendChild(lojasLi1);
            lojasUl.appendChild(lojasLi2);
            lojas.appendChild(lojash3);
            lojas.appendChild(lojasUl);

        const categorias = createHtmlTag('div', 'categorias');

        const categoriash3 = createHtmlTagAndContent('h3', 'Categorias');

        const categoriasUl = document.createElement('ul');

        const categoriasLi1 = createHtmlTagAndContent('li', '+Nova Categoria');

        const categoriasLi2 = createHtmlTagAndContent('li', 'Todas as Categorias');

            categoriasUl.appendChild(categoriasLi1);
            categoriasUl.appendChild(categoriasLi2);
            categorias.appendChild(categoriash3);
            categorias.appendChild(categoriasUl);

    logo.appendChild(logoText);
    menu.appendChild(lojas);
    menu.appendChild(categorias);
    headerNav.appendChild(logo);
    headerNav.appendChild(iconMenu);
    headerNav.appendChild(menu);
    header.appendChild(headerNav);
    body.appendChild(header);

    function clickMenu() {
        const display = window.getComputedStyle(menu, null).display;
    
        if (display == 'none') {
            menu.className = 'menuShow';
        }
    
        if (display == 'flex') {
            menu.className = 'menuHide';
        }
    }

    iconMenu.addEventListener("click", clickMenu);

    function showMenu() {
        if(document.body.clientWidth > 750){
            menu.className = 'menu';
        }
    
        if(document.body.clientWidth < 750){
            menu.className = 'menuHide';
        }
    }

    document.body.onresize = () => showMenu();
    
}

addHeader();



