window.elementFactory = {
    
    createHtmlTag: (tag, cssClass, id = "") => {
        const container = document.createElement(tag);
    
        if (id) {
            container.setAttribute("id", id);
        }
    
        container.setAttribute("class", cssClass);
    
        return container;
    },

    createHtmlTagAndSetContent: (tag, tagContent, id = '') => {
        const container = document.createElement(tag);
    
        container.textContent = tagContent;
    
        if (id) {
            container.setAttribute('id', id);
        }
    
        return container;
    },

}