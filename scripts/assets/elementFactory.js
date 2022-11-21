window.elementFactory = {
    
    createHtmlTag: (tag, cssClass, id = "") => {
        const container = document.createElement(tag);
    
        if (id) {
            container.setAttribute("id", id);
        }
    
        container.setAttribute("class", cssClass);
    
        return container;
    }
}