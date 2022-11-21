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

    newButton: (value, id, onclickfunction) => {
        const buttonBox = createHtmlTag("div", "", `box${id}`);
        const buttonElement = createHtmlTag("button", "", id);
        buttonElement.value = value;
        buttonElement.onclick = onclickfunction;
        buttonBox.appendChild(buttonElement);
        return buttonBox;
    }
}