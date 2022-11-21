window.MainContainer = {
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

    
    displayInnerContainer: (containerId) => {
        const innerContainers =
            document.getElementsByClassName("innerContainer");
    
        for (let index = 0; index < innerContainers.length; index++) {
            const container = innerContainers[index];
    
            if (container.classList.contains("activeInnerContainer")) {
                container.classList.remove("activeInnerContainer");
            }
        }
    
        const activeContainer = document.getElementById(containerId);
        activeContainer.classList.add("activeInnerContainer");
    }
}