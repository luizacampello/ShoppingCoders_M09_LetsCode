function addCSSFile() {
    const cssLink = document.createElement('link');

    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';

    document.head.appendChild(cssLink);
}

let storeObject = {
    name: "BubbleKill",
    category: "Alimentação",
    address: "Av. Dep. Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, São José dos Campos - SP",
    postal_code: "12215-160",
    email: "scontato@bubblekill.com.br",
    phone: "(12) 3924-3000",
}

function infoPage(storeObject) {

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute("id", "infoContainer");

    //DIVISÃO COM AS INFORMAÇÕES
    const divInfo = document.createElement('div');
    divInfo.setAttribute("class", "divInfo");

    const nameStore = document.createElement('h2');
    const categoryStore = document.createElement('h3');
    const addresStore = document.createElement('p');
    const cepStore = document.createElement('p');
    const emailStore = document.createElement('p');
    const phoneStore = document.createElement('p');

    nameStore.textContent = storeObject.name;
    categoryStore.textContent = storeObject.category;
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
    const divButtons = document.createElement('div');
    divButtons.setAttribute("class", "divButtons");
    divButtons.appendChild(closeButton ());
    divButtons.appendChild(editButton ());


    infoContainer.appendChild(divInfo);
    infoContainer.appendChild(divButtons);


    return infoContainer;
}

function closeButton (){
    const bClose = document.createElement('div');
    bClose.setAttribute('id', 'bClose');
    const close = document.createElement('input');
    close.setAttribute("id", "close");
    close.type = 'button';
    close.value = "X";
    bClose.appendChild(close);
    return bClose;
}

function editButton (){
    const bEdit = document.createElement('div');
    bEdit.setAttribute('id', 'bEdit');
    const edit = document.createElement('input');
    edit.setAttribute('id', "edit");
    edit.type = 'button';
    edit.value = "Editar";
    edit.onclick = function() {
        const formPage = document.querySelector("#formContainer");
        const infoPage = document.querySelector("#infoContainer");
        infoPage.style.display = "none";
        formPage.style.display = "flex";
    }
    bEdit.appendChild(edit);
    return bEdit;
}

function saveButton (){
    const bSave = document.createElement('div');
    bSave.setAttribute('id', 'bEdit');
    const save = document.createElement('input');
    save.setAttribute('id', "save")
    save.type = 'Button';
    save.value = "Salvar";


    bSave.appendChild(save);
    return bSave;
}

function showHidePage (containerId){
    const pageCard = document.getElementById(containerId);
    pageCard.classList.add("show");
    pageCard.addEventListener('click', (e) => {
        
        if(e.target.id == containerId || e.target.id == "close")
        {
            pageCard.classList.remove("show")
        };
    })
}

function populateFormCategory(defaultCategory, categoryForm){
    let defaultOption = newCategoryOption(defaultCategory);
    categoryForm.add(defaultOption);
    categoryForm.selectedIndex = 0;

    const categoriesList = getCategoriesListFromAPI();

    for (let index = 0; index < categoriesList.length; index++) {
        const categoryOption = categoriesList[index].name;
        if (categoryOption != defaultCategory) {
            categoryForm.add(newCategoryOption(categoryOption));
        }                
    }
}

function newCategoryOption(option){
    let newOption = document.createElement('option');
    newOption.text = option;
    return newOption;
}


function getCategoriesListFromAPI(){
    // Add API Connection
    const categoriesListMock = 
        [
            {
            "uid": "ac92aeee-3c67-4171-9916-7e4100ebb3a8",
            "code": "124",
            "name": "AAAAA"
            },
            {
            "uid": "ee10427c-1f88-4bbf-868e-ccb18bea2793",
            "code": "123",
            "name": "asjnA"
            }
        ];
    
    return categoriesListMock;  
}

function formPage(store) {
    const formContainer = document.createElement('div');
    formContainer.setAttribute("id", "formContainer");

    const divCloseButton = document.createElement('div');
    divCloseButton.setAttribute('id', "divClose");
    divCloseButton.appendChild(closeButton());


    //#region Formulário
    const divForm = document.createElement('form');
    const name = document.createElement('input');
    // name.placeholder = "Nome";
    name.value = store.name;

    const categoryForm = document.createElement('select');
    populateFormCategory(store.category, categoryForm);

    //ver como colocar a categoria

    const address = document.createElement('textArea');
    // address.placeholder = "Endereço";
    address.value = store.address;
    const postalCode = document.createElement('input');
    // postalCode.placeholder = "CEP";
    postalCode.value = store.postal_code;
    const email = document.createElement('input');
    // email.placeholder = "email";
    email.value = store.email;
    const phone = document.createElement('input');
    // phone.placeholder = "Telefone";
    phone.value = store.phone;

    divForm.appendChild(name);
    divForm.appendChild(categoryForm);
    divForm.appendChild(address);
    divForm.appendChild(postalCode);
    divForm.appendChild(email);
    divForm.appendChild(phone);
    //#endregion

    
    const divSaveButton = document.createElement('div');
    divSaveButton.setAttribute('id', "divSave");
    divSaveButton.appendChild(saveButton());


    formContainer.appendChild(divCloseButton);
    formContainer.appendChild(divForm);
    formContainer.appendChild(divSaveButton);


    return formContainer;
}

function formContents (){ //estava sobrescrevendo
    const form = document.createElement('input');
    form.setAttribute("id", "form");
    const name = document.createElement('input');
    name.type = "Text";
    const categoryStore = document.createElement('input');
    categoryStore.type = "button";
    const address = document.createElement('input');
    const postalCode = document.createElement('input');
    const email = document.createElement('input');
    const phone = document.createElement('input');

    form.appendChild(name);
    form.appendChild(categoryStore);
    form.appendChild(address);
    form.appendChild(postalCode);
    form.appendChild(email);
    form.appendChild(phone);

    return form;


}

function pageContainer(infoPage, formPage) {
    const pageContainer = document.createElement('div');
    pageContainer.setAttribute("class", "page-container"); //Alterar no css classa >> Id
    pageContainer.setAttribute("id", "page-container");

    pageContainer.appendChild(infoPage);
    pageContainer.appendChild(formPage);

    document.body.appendChild(pageContainer);
}

addCSSFile();

pageContainer(infoPage(storeObject), formPage(storeObject));
showHidePage("page-container"); //Para ver o container

// const showStore = document.querySelector("SEU BOTÃO/IMAGEM");
// showPage.addEventListener('click', function(){
//     showHidePage(".page-container");
// })