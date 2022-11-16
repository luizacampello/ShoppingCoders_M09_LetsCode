function addCSSFile() {
    const cssLink = document.createElement('link');

    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';

    document.head.appendChild(cssLink);
}

addCSSFile();

function addHeader() {
    const body = document.querySelector('body');

    const header = document.createElement('header');

    const headerNav = document.createElement('nav');

    const logo = document.createElement('div');
    logo.className = 'logo';

    const logoText = document.createElement('h3');
    logoText.textContent = 'Shopping Coders'

    const menu = document.createElement('div');
    menu.className = 'menu';

        const lojas = document.createElement('div');
        lojas.className = 'lojas';

        const lojash3 = document.createElement('h3');
        lojash3.textContent = 'Lojas'

        const lojasUl = document.createElement('ul');

        const lojasLi1 = document.createElement('li');
        lojasLi1.textContent = '+Nova Loja'

        const lojasLi2 = document.createElement('li');
        lojasLi2.textContent = 'Todas as Lojas'

            lojasUl.appendChild(lojasLi1);
            lojasUl.appendChild(lojasLi2);
            lojas.appendChild(lojash3);
            lojas.appendChild(lojasUl);

        const categorias = document.createElement('div');
        categorias.className = 'categorias';

        const categoriash3 = document.createElement('h3');
        categoriash3.textContent = 'Categorias';

        const categoriasUl = document.createElement('ul');

        const categoriasLi1 = document.createElement('li');
        categoriasLi1.textContent = '+Nova Categoria';

        const categoriasLi2 = document.createElement('li');
        categoriasLi2.textContent = 'Todas as Categorias';

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