(() => {
    addCSSFile();

    for (const file of [
        "assets/serviceAPI.js",
        "assets/basePage.js",
        "assets/popUpFactory.js",
        "assets/infra.js",
        "assets/elementFactory.js",
        "assets/cardFactory.js",
        "styles/cardStyle.js",
        "assets/basePage.js"]) {
        const script = document.createElement("script");
        script.setAttribute("src", `scripts/${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener("load", () => {
        addHeader();
        basePage.createMainContainer();
        basePage.addFooter();


        const storesContainer = document.getElementById('storesContainer');
        const categoriesContainer = document.getElementById('categoriesContainer');

        infra.populateCategoryContainer(categoriesContainer); //TODO: Mudar para receber os parametros da busca
        infra.populateStoreContainer(storesContainer); //TODO: Mudar para receber os parametros da busca
    });
})();

function addCSSFile() {
    const cssLink = document.createElement("link");

    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = "style.css";

    const cssLinkIcon = document.createElement('link');

    cssLinkIcon.rel = 'stylesheet';
    cssLinkIcon.type = 'text/css';
    cssLinkIcon.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

    document.head.appendChild(cssLink);
    document.head.appendChild(cssLinkIcon);
}

function infoPage(storeObject) {
    const infoContainer = document.getElementById("storeInfoContainer");

    //DIVISÃO COM AS INFORMAÇÕES
    const divInfo = document.createElement("div");
    divInfo.setAttribute("class", "divInfo");

    const nameStore = document.createElement("h2");
    const categoryStore = document.createElement("h3");
    const addresStore = document.createElement("p");
    const cepStore = document.createElement("p");
    const emailStore = document.createElement("p");
    const phoneStore = document.createElement("p");

    nameStore.textContent = storeObject.name;
    categoryStore.textContent = storeObject.category.name;
    addresStore.textContent = storeObject.address;
    cepStore.textContent = storeObject.postal_code;
    emailStore.textContent = storeObject.email;
    phoneStore.textContent = storeObject.phone;

    divInfo.appendChild(nameStore);
    divInfo.appendChild(categoryStore);
    divInfo.appendChild(addresStore);
    divInfo.appendChild(cepStore);
    divInfo.appendChild(emailStore);
    divInfo.appendChild(phoneStore);

    // DIVISÃO COM OS BOTÕES
    const divButtons = document.createElement("div");
    divButtons.setAttribute("class", "divButtons");
    // divButtons.appendChild(closeButton());
    divButtons.appendChild(
        elementFactory.newButton("X", "close")
    );

    divButtons.appendChild(
        elementFactory.newButton("Editar", "edit", editButtonOnClick)
    );

    infoContainer.appendChild(divInfo);
    infoContainer.appendChild(divButtons);
}

function closeButton() {
    const bClose = document.createElement("div");
    bClose.setAttribute("id", "bClose");
    const close = document.createElement("input");
    close.setAttribute("id", "close");
    close.type = "button";
    close.value = "X";
    bClose.appendChild(close);
    return bClose;
}

function editButtonOnClick() {
    const formPage = document.getElementById("storeFormContainer");
    const infoPage = document.getElementById("storeInfoContainer");
    infoPage.style.display = "none";
    formPage.style.display = "flex";
}

function deleteButtonOnClick(objectId) {

}

function saveButtonOnClick(objectId = null){
    const saveMessage = document.getElementsByClassName("saveMessage");
    if(objectId){
        //PUT
        putStore(objectId); //Função vazia
        saveMessage.textContent = "Atualizado com sucesso!"
        saveMessage.classList.add("show");
    } else {
        //POST
        postSotre (); //Função vazia
        saveMessage.textContent = "Criação realizada com sucesso!"
        saveMessage.classList.add("show");
    }
}

function putStore (objectId){

}

function postSotre () {

}

function saveButton() {
    const bSave = document.createElement("div");
    bSave.setAttribute("id", "bEdit");
    const save = document.createElement("input");
    save.setAttribute("id", "save");
    save.type = "Button";
    save.value = "Salvar";

    bSave.appendChild(save);
    return bSave;
}

function deleteButton(){

}

function addClearPageEventTo(containerId) {
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

    const logoText = elementFactory.createHtmlTagAndSetContent('h3', 'Shopping Coders');

    const iconeMenu = document.createElement('span');
    iconeMenu.className = 'material-symbols-outlined';
    iconeMenu.textContent = 'menu';
    iconeMenu.id = 'iconeMenu';
    iconeMenu.addEventListener("click", clickMenu);

    const menu = elementFactory.createHtmlTag('div', 'menu');

    const lojas = elementFactory.createHtmlTag('div', 'lojas');

    const lojash3 = elementFactory.createHtmlTagAndSetContent('h3', 'Lojas', 'linkStoreContainer');

    const lojasUl = document.createElement('ul');

    const lojasLi1 = elementFactory.createHtmlTagAndSetContent('li', '+Nova Loja', 'linkPopupNewStore');

    const lojasLi2 = elementFactory.createHtmlTagAndSetContent('li', 'Todas as Lojas', 'linkStores');

    lojasUl.appendChild(lojasLi1);
    lojasUl.appendChild(lojasLi2);
    lojas.appendChild(lojash3);
    lojas.appendChild(lojasUl);

    const categorias = elementFactory.createHtmlTag('div', 'categorias');

    const categoriash3 = elementFactory.createHtmlTagAndSetContent('h3', 'Categorias', 'linkCategoryContainer');

    const categoriasUl = document.createElement('ul');

    const categoriasLi1 = elementFactory.createHtmlTagAndSetContent('li', '+Nova Categoria', 'linkPopupNewCategory');

    const categoriasLi2 = elementFactory.createHtmlTagAndSetContent('li', 'Todas as Categorias', 'linkCategories');

    categoriasUl.appendChild(categoriasLi1);
    categoriasUl.appendChild(categoriasLi2);
    categorias.appendChild(categoriash3);
    categorias.appendChild(categoriasUl);

    logo.appendChild(logoText);
    menu.appendChild(lojas);
    menu.appendChild(categorias);
    headerNav.appendChild(logo);
    headerNav.appendChild(iconeMenu);
    headerNav.appendChild(menu);
    header.appendChild(headerNav);
    body.appendChild(header);

    iconeMenu.addEventListener("click", clickMenu);

    document.body.onresize = () => showMenu();

    function showMenu() {
        if (document.body.clientWidth > 750) {
            menu.className = 'menu';
        }

        if (document.body.clientWidth < 750) {
            menu.className = 'menuHide';
        }
    }

    function clickMenu() {
        const display = window.getComputedStyle(menu, null).display;

        if (display == 'none') {
            menu.className = 'menuShow';
        }

        if (display == 'flex') {
            menu.className = 'menuHide';
        }
    }

}








