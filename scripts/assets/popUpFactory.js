window.popUpFactory = {
	newStorePopUpContainer: (storeObject) => {
		const popUpContainer = document.getElementById("popUpContainer");

		const infoContainer = elementFactory.createHtmlTag("div", "infoPopUp", "storeInfoContainer");
	
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "storeFormContainer");
	
		popUpContainer.appendChild(infoContainer);
		popUpContainer.appendChild(formContainer);
		
		infoPage(storeObject)
		popUpFactory.storeFormPopUp(storeObject)
		
	},

	newCategoryPopUpContainer: (storeObject) => {
		const popUpContainer = document.getElementById("popUpContainer");

		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "categoryFormContainer");
		
		popUpContainer.appendChild(formContainer);
		
		formPage(storeObject)
	},

	storeFormPopUp: (store = null) => {
		const formContainer = document.getElementById("storeFormContainer");
	
		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(closeButton());
	
		const divForm = document.createElement("form");

		const name = elementFactory.newFormOption("Nome", store.name)	
		const categoryForm = document.createElement("select");
		infra.populateFormCategory(categoryForm, store.category);
		const address = document.createElement("textArea");
		address.placeholder = "Endereço";
		address.value = store.address;
		const postalCode = elementFactory.newFormOption("CEP", store.postal_code)
		const email = elementFactory.newFormOption("email@email.com", store.email, "email")
		const phone = elementFactory.newFormOption("(xx) xxxx-xxxx", store.phone, "tel")
	
		divForm.appendChild(name);
		divForm.appendChild(categoryForm);
		divForm.appendChild(address);
		divForm.appendChild(postalCode);
		divForm.appendChild(email);
		divForm.appendChild(phone);
			
		const divSaveButton = document.createElement("div");
		divSaveButton.setAttribute("id", "divSave");
		divSaveButton.appendChild(saveButton());
	
		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(divForm);
		formContainer.appendChild(divSaveButton);
	}

}
