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

    createHtmlSetContentAndClass: (className = '', labelContent) => {
        const label = document.createElement('label');
        label.textContent = labelContent;

        if (className) {
            label.setAttribute('class', className);
        }

        return label;
    },

    newCategoryOption: (category) => {
        let newOption = document.createElement("option");

        newOption.text = `${category.code} - ${category.name}`;
        newOption.value = category.uid;

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
    },

    saveButton: (value, id, onClickFunction = () => {}, oldContent = "") => {
        const buttonBox = elementFactory.createHtmlTag("div", "", `box${id}`);
        const buttonElement = elementFactory.createHtmlTag("input", "", id);
        buttonElement.type = "submit";
        buttonElement.value = value;

        const containerId = "popUpContainer";
        const pageCard = document.getElementById(containerId);

        buttonElement.addEventListener("click", function(event){
            onClickFunction(oldContent);           
            event.preventDefault();
        });

        buttonBox.appendChild(buttonElement);

        return buttonBox;
    },

    newFormOption: (name, placeholder, value, type = "") => {
        const formOption = document.createElement("input");
        formOption.name = name;
		formOption.placeholder = placeholder;
        formOption.setAttribute('required', '');

        if (value){
            formOption.value = value;
        }

        if (type) {
            formOption.type = type;
        }

        return formOption;
    },

    emptyFormOption: (name, placeholder, type = "") => {
        const formOption = document.createElement("input");
        formOption.name = name;
		formOption.placeholder = placeholder;

        if (type) {
            formOption.type = type;
        }

        return formOption;
    },

    newImage: (source, cssClass, id, altText = "") => {
        const image = document.createElement('img');
        image.setAttribute('src', source);
        image.classList.add(cssClass);
        image.setAttribute('id', id);

        if (altText) {
            image.setAttribute("alt", altText)
        }

        return image;
    },

}
