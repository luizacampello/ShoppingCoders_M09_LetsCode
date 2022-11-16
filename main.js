function addCSSFile () {
    const cssLink = document.createElement('link');
   
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';
  
    document.head.appendChild(cssLink);
}

addCSSFile();

function createMainContainer() {
    const storesContainer = createContainer("storesContainer", "innerContainer");
    const categoriesContainer = createContainer("categoriesContainer", "innerContainer");
    const mainContainer = createContainer("mainContainer", "mainContainer")

    mainContainer.appendChild(storesContainer);
    mainContainer.appendChild(categoriesContainer);
    document.body.appendChild(mainContainer);
}

function createContainer(id, cssClass) {
    const container = document.createElement("div");
    container.setAttribute("id", id);
    container.setAttribute("class", cssClass);
    return container;
}

createMainContainer();