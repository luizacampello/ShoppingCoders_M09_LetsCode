(() => {
   
    const jsFiles = [
        "assets/serviceAPI.js",
        "assets/storageService.js",
        "assets/basePage.js",
        "assets/popUpFactory.js",
        "assets/search.js",
        "assets/infra.js",
        "assets/elementFactory.js",
        "assets/cardService.js",
        "assets/basePage.js",
        "styles/cardStyle.js",
        "styles/headerStyle.js",
        "styles/footerStyle.js",
        "styles/notificationStyle.js",
        "styles/popUpStyle.js",
        "styles/searchStyle.js",
        "styles/mainContainerStyle.js"
    ];
 
    // addCSSFile();
    addJSScriptFiles(jsFiles)
 
    window.addEventListener("load", () => {
        storageService.createLocalStorage();
        addHeader();      
        basePage.createMainContainer();
        infra.addLinksToHeader();
        search.addSearchBar();
        infra.addClearPageEventTo();
        basePage.addFooter();
       
 
        const storesContainer = document.getElementById('storesContainer');
        const categoriesContainer = document.getElementById('categoriesContainer');
 
        infra.populateCategoryContainer(categoriesContainer); //TODO: Mudar para receber os parametros da busca
        infra.populateStoreContainer(storesContainer); //TODO: Mudar para receber os parametros da busca
        infra.displayInnerContainer("storesContainer")
    });
})();
 
// function addCSSFile() {
//     const cssLink = document.createElement("link");
 
//     cssLink.rel = "stylesheet";
//     cssLink.type = "text/css";
//     cssLink.href = "style.css";
 
//     const cssLinkIcon = document.createElement('link');
 
//     cssLinkIcon.rel = 'stylesheet';
//     cssLinkIcon.type = 'text/css';
//     cssLinkIcon.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
 
//     document.head.appendChild(cssLink);
//     document.head.appendChild(cssLinkIcon);
// }
 
function addJSScriptFiles(jsFiles) {
    for (const file of jsFiles) {
        const script = document.createElement("script");
        script.setAttribute("src", `scripts/${file}`);
        document.body.appendChild(script);
    }
}

function addClearPageEventTo() {
    const containerId = "popUpContainer";
    const pageCard = document.getElementById(containerId);
    pageCard.classList.add("show");
    pageCard.addEventListener("click", (e) => {
        if (e.target.id == containerId || e.target.id == "close") {
            pageCard.classList.remove("show");
            pageCard.textContent = "";
        }
    });
}
 
function addHeader() {
    const body = document.querySelector('body');
 
    const header = document.createElement('header');
 
    const headerNav = document.createElement('nav');
 
    const logo = elementFactory.createHtmlTag('div', 'logo');
 
    const logoMenu = elementFactory.createHtmlTag('div', 'HeaderElements');
 
    const logoImgMobile = document.createElement('img');
    logoImgMobile.setAttribute('src','/imgs/logoMobile.png');
    logoImgMobile.setAttribute('id', 'LogoMobile');
    logoImgMobile.classList.add('LogoMobile');
   
    const logoImgWeb = document.createElement('img');
    logoImgWeb.setAttribute('src','/imgs/logoWeb.png');
    logoImgWeb.setAttribute('id', 'LogoWeb');
    logoImgWeb.classList.add('LogoWeb');
 
    const iconeMenu = document.createElement('span');
    iconeMenu.className = 'material-symbols-outlined';
    iconeMenu.textContent = 'menu';
    iconeMenu.id = 'iconeMenu';
    iconeMenu.addEventListener("click", clickMenu);

    const menu = elementFactory.createHtmlTag('div', 'menu','menu');

    const lojas = elementFactory.createHtmlTag('div', 'lojas');
 
    const lojash3 = elementFactory.createHtmlTagAndSetContent('h3', 'Lojas', 'linkStoreContainer');

    const lojasUl = elementFactory.createHtmlTag('ul', 'storeHeader', 'storeHeader');

    const lojasLi1 = elementFactory.createHtmlTagAndSetContent('li', '+Nova Loja', 'linkPopupNewStore');
 
    const lojasLi2 = elementFactory.createHtmlTagAndSetContent('li', 'Todas as Lojas', 'linkStores');
 
    lojasUl.appendChild(lojasLi1);
    lojasUl.appendChild(lojasLi2);
    lojas.appendChild(lojash3);
    lojas.appendChild(lojasUl);
 
    const categorias = elementFactory.createHtmlTag('div', 'categorias');
 
    const categoriash3 = elementFactory.createHtmlTagAndSetContent('h3', 'Categorias', 'linkCategoryContainer');

    const categoriasUl = elementFactory.createHtmlTag('ul', 'categoryHeader', 'categoryHeader');

    const categoriasLi1 = elementFactory.createHtmlTagAndSetContent('li', '+Nova Categoria', 'linkPopupNewCategory');
 
    const categoriasLi2 = elementFactory.createHtmlTagAndSetContent('li', 'Todas as Categorias', 'linkCategories');
 
    categoriasUl.appendChild(categoriasLi1);
    categoriasUl.appendChild(categoriasLi2);
    categorias.appendChild(categoriash3);
    categorias.appendChild(categoriasUl);
 
    logo.appendChild(logoImgMobile);
    logo.appendChild(logoImgWeb);
    menu.appendChild(lojas);
    menu.appendChild(categorias);
    logoMenu.appendChild(logo);
    logoMenu.appendChild(iconeMenu);
    headerNav.appendChild(logoMenu);
    headerNav.appendChild(menu);
    header.appendChild(headerNav);
    body.appendChild(header);
 
    iconeMenu.addEventListener("click", clickMenu);
    document.body.onresize = () => showMenu();

}

function showMenu() {
   const menu = document.getElementById('menu');

    if (document.body.clientWidth > 1155) {
        menu.className = 'menu';
    }

    if (document.body.clientWidth < 1155) {
        menu.className = 'menuHide';
    }
}

function clickMenu() {
    const menu = document.getElementById('menu');
    const display = window.getComputedStyle(menu, null).display;

    if (display == 'none') {
        menu.className = 'menuShow';
    }

    if (display == 'flex') {
        menu.className = 'menuHide';
    }
}
