window.elementFactory = {
<<<<<<< Updated upstream
    
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

    newCategoryOption: (category) => { 
        let newOption = document.createElement("option");

        newOption.text = category.name;
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

    newFormOption: (name, placeholder, value, type = "") => {
        const formOption = document.createElement("input");
        formOption.name = name;
=======

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

	newCategoryOption: (category) => {
		let newOption = document.createElement("option");

		newOption.text = category.name;
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

	newFormOption: (name, placeholder, value, type = "") => {
		const formOption = document.createElement("input");
		formOption.name = name;
>>>>>>> Stashed changes
		formOption.placeholder = placeholder;

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

<<<<<<< Updated upstream
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
=======
}
>>>>>>> Stashed changes
