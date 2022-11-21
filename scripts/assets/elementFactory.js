window.elementFactory = {
    
    createHtmlTag: (tag, cssClass, id = "") => {
        const container = document.createElement(tag);
        
        if (cssClass){
            container.setAttribute("class", cssClass);
        }  

        if (id) {
            container.setAttribute("id", id);
        }
    
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

    newCategoryOption: (option) => {
        let newOption = document.createElement("option");
        newOption.text = option;
        return newOption;
    },

    newButton: (value, id, onClickFunction = () => {}) => {
        const buttonBox = elementFactory.createHtmlTag("div", "", `box${id}`);
        const buttonElement = elementFactory.createHtmlTag("input", "", id); 
        buttonElement.type = "button";
        buttonElement.value = value;

        buttonElement.addEventListener("click", onClickFunction);

        buttonBox.appendChild(buttonElement);

        return buttonBox;
    }
}