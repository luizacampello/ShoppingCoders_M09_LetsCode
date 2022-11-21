window.basePage = {
    createMainContainer: () =>{
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
    
        mainContainer.appendChild(popUpContainer);
        mainContainer.appendChild(searchContainer);
        mainContainer.appendChild(storesContainer);
        mainContainer.appendChild(categoriesContainer);
        document.body.appendChild(mainContainer);
    },

    addFooter: () => {    
        const footer = document.createElement("footer");
        const title = document.createElement("p");
        title.textContent = 'Categorias';
        footer.appendChild(title);
    
        const footerList = document.createElement("ul");
        footerList.classList.add("footer-list");
        footer.appendChild(footerList);
    
        document.body.appendChild(footer);
    },  
    
}