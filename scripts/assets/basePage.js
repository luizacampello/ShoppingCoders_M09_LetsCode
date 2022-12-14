window.basePage = {
    createMainContainer: () => {
        const searchContainer = elementFactory.createHtmlTag(
            "div",
            "searchContainer",
            "searchContainer"
        );
        const storesContainer = elementFactory.createHtmlTag(
            "div",
            "innerContainer",
            "storesContainer"
        );
        const categoriesContainer = elementFactory.createHtmlTag(
            "div",
            "innerContainer",
            "categoriesContainer"
        );
        const popUpContainer = elementFactory.createHtmlTag(
            "div",
            "popUpContainer",
            "popUpContainer"
        );
        const mainContainer = elementFactory.createHtmlTag(
            "div",
            "mainContainer",
            "mainContainer"
        );

        const titlePage = elementFactory.createHtmlTag(
            'h3',
            'titlePage',
            'titlePage'
        );

        mainContainer.appendChild(popUpContainer);
        searchContainer.appendChild(titlePage);
        mainContainer.appendChild(searchContainer);
        mainContainer.appendChild(storesContainer);
        mainContainer.appendChild(categoriesContainer);
        document.body.appendChild(mainContainer);
    },

    addFooter: () => {
        const footer = elementFactory.createHtmlTag("footer", "footer", "footer");
        const title = elementFactory.createHtmlTagAndSetContent("p", "Categorias", "footer-title");
        const footerList = elementFactory.createHtmlTagAndSetContent("ul", "", "footer-list");

        footer.appendChild(title);
        footer.appendChild(footerList);    
		document.body.appendChild(footer);
        infra.refreshFooter();
        infra.addFooterCategorySearchEvent();
    },

	notification: {
        timer: null,
        element: null,
        create: ({text, type}) => {
            basePage.notification.remove();
            const element = document.createElement('div');
            element.classList.add('notification');
            element.classList.add(`notification-${type}`);
            element.textContent = text;
            basePage.notification.element = element;
            document.body.appendChild(element);
            basePage.notification.timer = setTimeout(() => {
                basePage.notification.remove();
            }, 5000);
        },
        remove: () => {
            if (basePage.notification.element) {
                clearTimeout(basePage.notification.timer);
                document.body.removeChild(basePage.notification.element);
                basePage.notification.element = null;
            }
        }
    },

    addHeader: () => {
        const body = document.querySelector('body');
     
        const header = document.createElement('header');
     
        const headerNav = document.createElement('nav');
     
        const logo = elementFactory.createHtmlTag('div', 'logo');
     
        const logoMenu = elementFactory.createHtmlTag('div', 'HeaderElements');

        const logoImgWeb = elementFactory.newImage('/imgs/logoWeb.png', 'LogoWeb', 'LogoWeb', 'logo completa do Shopping Coders');
        const logoImgMobile = elementFactory.newImage('/imgs/logoMobile.png', 'LogoMobile', 'LogoMobile', 'logo reduzida do Shopping Coders');
             
        const iconeMenu = document.createElement('span');
        iconeMenu.className = 'material-symbols-outlined';
        iconeMenu.textContent = 'menu';
        iconeMenu.id = 'iconeMenu';
        iconeMenu.addEventListener("click", basePage.clickMenu);
    
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
     
        iconeMenu.addEventListener("click", basePage.clickMenu);
        document.body.onresize = () => basePage.showMenu;
    
    },
    
    showMenu: () => {
       const menu = document.getElementById('menu');
    
        if (document.body.clientWidth > 1155) {
            menu.className = 'menu';
        }
    
        if (document.body.clientWidth < 1155) {
            menu.className = 'menuHide';
        }
    },
    
    clickMenu: () => {
        const menu = document.getElementById('menu');
        const display = window.getComputedStyle(menu, null).display;
    
        if (display == 'none') {
            menu.className = 'menuShow';
        }
    
        if (display == 'flex') {
            menu.className = 'menuHide';
        }
    },

    resetMainContainer: () => {
        const storesContainer = document.getElementById("storesContainer");
        const categoriesContainer = document.getElementById("categoriesContainer");
        storesContainer.innerHTML = "";
        categoriesContainer.innerHTML = "";     
    },

    resetPageAfterCrud: () => {
        basePage.resetMainContainer();

        infra.populateStoreContainer();
        infra.populateCategoryContainer();
        infra.refreshFooter();
        search.populateTypeCategory();
    }
}
