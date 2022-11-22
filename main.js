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
    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("id", "infoContainer");

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
    divButtons.appendChild(closeButton());
    divButtons.appendChild(editButton());

    infoContainer.appendChild(divInfo);
    infoContainer.appendChild(divButtons);

    return infoContainer;
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

function editButton() {
    const bEdit = document.createElement("div");
    bEdit.setAttribute("id", "bEdit");
    const edit = document.createElement("input");
    edit.setAttribute("id", "edit");
    edit.type = "button";
    edit.value = "Editar";
    edit.onclick = function () {
        const formPage = document.querySelector("#formContainer");
        const infoPage = document.querySelector("#infoContainer");
        infoPage.style.display = "none";
        formPage.style.display = "flex";
    };
    bEdit.appendChild(edit);
    return bEdit;
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

function formPage(store) {
    const formContainer = document.createElement("div");
    formContainer.setAttribute("id", "formContainer");

    const divCloseButton = document.createElement("div");
    divCloseButton.setAttribute("id", "divClose");
    divCloseButton.appendChild(closeButton());

    //#region Formulário
    const divForm = document.createElement("form");
    const name = document.createElement("input");
    // name.placeholder = "Nome";
    name.value = store.name;

    const categoryForm = document.createElement("select");
    populateFormCategory(categoryForm, store.category.name);

    const address = document.createElement("textArea");
    // address.placeholder = "Endereço";
    address.value = store.address;
    const postalCode = document.createElement("input");
    // postalCode.placeholder = "CEP";
    postalCode.value = store.postal_code;
    const email = document.createElement("input");
    // email.placeholder = "email";
    email.value = store.email;
    const phone = document.createElement("input");
    // phone.placeholder = "Telefone";
    phone.value = store.phone;

    divForm.appendChild(name);
    divForm.appendChild(categoryForm);
    divForm.appendChild(address);
    divForm.appendChild(postalCode);
    divForm.appendChild(email);
    divForm.appendChild(phone);
    //#endregion

    const divSaveButton = document.createElement("div");
    divSaveButton.setAttribute("id", "divSave");
    divSaveButton.appendChild(saveButton());

    formContainer.appendChild(divCloseButton);
    formContainer.appendChild(divForm);
    formContainer.appendChild(divSaveButton);

    return formContainer;
}

function newPopUpContainer(storeObject) {
    const popUpContainer = document.getElementById("popUpContainer");
    popUpContainer.appendChild(infoPage(storeObject));
    popUpContainer.appendChild(formPage(storeObject));
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








