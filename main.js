(() => {
    addCSSFile();
    
    for (const file of ["assets/serviceAPI.js", "assets/elementFactory.js", "assets/CardFactory.js", "styles/CardStyle.js", "assets/MainContainer.js"]) {
        const script = document.createElement("script");
        script.setAttribute("src", `scripts/${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener("load", () => {
        addHeader();
        MainContainer.createMainContainer();       

        const storesContainer = document.getElementById('storesContainer');
        const categoriesContainer = document.getElementById('categoriesContainer');

        populateStoreContainer(storesContainer, '', ''); //TODO: Mudar para receber os parametros da busca
        populateCategoryContainer(categoriesContainer, ''); //TODO: Mudar para receber os parametros da busca
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

async function populateFormCategory(defaultCategory, categoryForm) {
    const defaultOption = newCategoryOption(defaultCategory);
    categoryForm.add(defaultOption);
    categoryForm.selectedIndex = 0;

    const categoriesList = await getCategoriesList();

    for (let index = 0; index < categoriesList.length; index++) {
        const categoryOption = categoriesList[index].name;
        if (categoryOption != defaultCategory) {
            categoryForm.add(newCategoryOption(categoryOption));
        }
    }
}

function newCategoryOption(option) {
    let newOption = document.createElement("option");
    newOption.text = option;
    return newOption;
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
    populateFormCategory(store.category.name, categoryForm);

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

const BASE_URL = "http://estabelecimentos.letscode.dev.netuno.org:25390/services";

const uidGroupDefinition = {
    "group": {
        "uid": "ee872905-c4e2-4d1f-bbd1-e858b44bd40c"
    }
}

async function fetchPostRequisition(url, body) {
    const request = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }).catch((error) => {
        console.log("Erro na comunicação:", error);
    });

    if (!request.ok) {
        errorHandler(request);
        return [];
    }

    console.log("Requisition status:", request.status);

    return await request.json();
}

async function getCategoriesList(keyword = "") {
    let url = BASE_URL + "/category/list";
    let body =  uidGroupDefinition;
    body.text = keyword;

    const categories = await fetchPostRequisition(url, body);
    return categories;
}

async function getStoresList(keyWord, uidCategory) {
    let url = BASE_URL + "/establishment/list";
    let body = uidGroupDefinition;
    body.text = keyWord;

    if (uidCategory) {
        body.category = {"uid": uidCategory};
    }

    let stores = await fetchPostRequisition(url, body);

    return stores;
}

async function populateStoreContainer(container, keyword = '', idCategory = '') {

async function createCategory(catCode, catName) {
	//validar se code e name são diferentes de vazio, caso contrário abrir notificação na tela
	//alinhar se concordam c a criação


	let url = BASE_URL + "/category";
	let body = uidGroupDefinition;
	body.code = catCode;
	body.name = catName;
	delete body.text;
	let categoryUid = await fetchPostRequisition(url, body);

	return categoryUid;
}

//atualiza, porém aparece com erro de cors
async function updateCategory(catUid, catCode, catName) {
	//validar se code e name são diferentes de vazio, caso contrário abrir notificação na tela
	//validar qual o campo está sendo alterado, buscando o objeto no getlist via uid
	//fazendo o comparativo no currObj e newObj
	//alinhar se concordam c a criação


	let url = BASE_URL + "/category";
	let body = uidGroupDefinition;
	body.uid = catUid;
	body.code = catCode;
	body.name = catName;
	delete body.text;

	let categoryUid = await fetchRequisition("PUT", url, body);

	return categoryUid;
}


async function fetchRequisition(fetchMethod, url, body) {
	const request = await fetch(url, {
        method: fetchMethod,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
	.then(response => {
		if (response.status == 204)
		{
			debugger;
			console.log("Requisition status:", response.status)
			console.log("Update complete");
		}
		else if (response.status == 404)
		{
			console.log("Requisition status:", response.status)
			console.log("Grupo ou categoria não encontrado.");
		}
		else if (response.status == 422)
		{
			console.log("Requisition status:", response.status)
			console.log("Categoria já existe.");
		}
    })
	.catch((error) => {
	  console.error('Error:', error);
	});

    return await body.uid;
}

//apaga, porém aparece com erro de cors
async function deleteCategory(catUid) {
	//validar se catUid foi informado
	//alinhar se concordam c a criação
	let url = BASE_URL + "/category?uid=" + catUid;
	let body = uidGroupDefinition;
	let categoryUid = await fetchRequisition("DELETE", url, body);

	return categoryUid;
}

//função para a criação de grupo e recebimento de uid
async function createGroup(groupName, studentName) {
    let url = BASE_URL + "/group";
    let body = {
		"name": groupName,
		"students": [
			studentName
		]
	}
	let data = await fetchPostRequisition(url, body);
	console.log(data);
    return data;
}


async function populateStoreContainer(container,keyword='', idCategory=''){
    const storesList = await getStoresList(keyword, idCategory);
    for (let index = 0; index < storesList.length; index++) {
        const store = storesList[index];
        container.appendChild(
            CardFactory.CardStore({
                store: store,
                onClickCard: () => {
                    newPopUpContainer(store);
                    addClearPageEventTo("popUpContainer");
                },
            })
        );
    };
}

async function populateCategoryContainer(container, keyword=''){
    const categoryList = await getCategoriesList(keyword);
    for (let index = 0; index < categoryList.length; index++) {
        const category = categoryList[index];
        container.appendChild(
            CardFactory.CardCategory({
                category: category,
                onClickEdit: () => {
                    window.alert("Click 1"); //TODO: Chamar a função de editar
                },
                onClickStores: () => {
                    window.alert("Click 2"); //TODO: Chamar páginas de lojas com filtro
                },
            })
        );
    };
}

function addFooter () {
	const body = document.querySelector("body");

	const footer = document.createElement("footer");
	const title = document.createElement("p");
	title.textContent = 'Categorias';
	footer.appendChild(title);

	const footerList = document.createElement("ul");
	footerList.classList.add("footer-list");
	footer.appendChild(footerList);

	body.appendChild(footer);
}

addFooter();

//apagar depois
function mockCategoriesQuantity() {
	let categoryQuantity = [];

	for(let i = 0; i < 50; i++) {
		const categoryName = "Category" + i;
		const quantity = i;
		categoryQuantity.push({
			key:categoryName,
			value:quantity
		})
	}
	localStorage.setItem("CategoriesQuantities", JSON.stringify(categoryQuantity));
}

mockCategoriesQuantity()
//até aqui

function updateCategoriesQuantities () {
	const response = localStorage.getItem("CategoriesQuantities");
	const categoriesQuantities = JSON.parse(response);

	if (categoriesQuantities == null)
		return;

	for (let key in categoriesQuantities) {
		const content = categoriesQuantities[key].key + ": " + categoriesQuantities[key].value;
		const listItem = document.createElement("li");
		listItem.classList.add("list-item");
		listItem.setAttribute("id", categoriesQuantities[key].key);
		listItem.textContent = content;
		let list = document.querySelector("ul");
		list.appendChild(listItem);
	}
}

updateCategoriesQuantities();

//adicionar evento para chamar a container store com o filtro de categoria para a categoria selecionada
let list = document.querySelector(".footer-list");

list.addEventListener("click", function(event) {
	if (event.target.tagName == 'LI') {
		/*chamada para a função de apresentação da section de lojas com a busca da categoria clicada*/
		//console.log(event.target.id);
	}
})