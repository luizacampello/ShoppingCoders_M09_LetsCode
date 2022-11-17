function addCSSFile() {
    const cssLink = document.createElement('link');

    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';

    document.head.appendChild(cssLink);
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
    headerNav.appendChild(menu);
    header.appendChild(headerNav);
    body.appendChild(header);
}

addHeader();



