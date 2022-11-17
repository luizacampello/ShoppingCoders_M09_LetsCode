function addCSSFile() {
    const cssLink = document.createElement('link');
   
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';
  
    document.head.appendChild(cssLink);
}

addCSSFile();

function createMainContainer() {
    const searchContainer = createHtmlTag("div", "searchContainer", "searchContainer");
    const storesContainer = createHtmlTag("div", "innerContainer", "storesContainer", );
    const categoriesContainer = createHtmlTag("div", "innerContainer", "categoriesContainer");
    const mainContainer = createHtmlTag("div", "mainContainer", "mainContainer");

    mainContainer.appendChild(searchContainer);
    mainContainer.appendChild(storesContainer);
    mainContainer.appendChild(categoriesContainer);
    document.body.appendChild(mainContainer);
}

function createHtmlTag(tag, cssClass, id = "") {
    const container = document.createElement(tag);

    if (id != "") {
        container.setAttribute("id", id);
    }

    container.setAttribute("class", cssClass);

    return container;
}

createMainContainer();

function displayInnerContainer(containerId) {
    const innerContainers = document.getElementsByClassName("innerContainer");
    
    for (let index = 0; index < innerContainers.length; index++) {
        const container = innerContainers[index];

        if (container.classList.contains("activeInnerContainer")) {
            container.classList.remove("activeInnerContainer");
        } 
    }

    const activeContainer = document.getElementById(containerId);
    activeContainer.classList.add("activeInnerContainer");
}