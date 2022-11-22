window.popUpFactory = {
	newStorePopUpContainer: (store) => {
		const popUpContainer = document.getElementById("popUpContainer");

		const infoContainer = elementFactory.createHtmlTag("div", "infoPopUp", "storeInfoContainer");
	
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "storeFormContainer");
	
		popUpContainer.appendChild(infoContainer);
		popUpContainer.appendChild(formContainer);
		
		infoPage(store)
		popUpFactory.storeFormPopUp(store)
		
	},

	newCategoryPopUpContainer: (store) => {
		const popUpContainer = document.getElementById("popUpContainer");

		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "categoryFormContainer");
		
		popUpContainer.appendChild(formContainer);
		
		formPage(store)
	},

	storeFormPopUp: (store = null) => {
		const formContainer = document.getElementById("storeFormContainer");
	
		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(
			elementFactory.newButton("X", "close")
		);
	
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
		const saveMessage = elementFactory.createHtmlTag("p", "saveMessage", "saveMessage");
	
		
		divForm.appendChild(name);
		divForm.appendChild(categoryForm);
		divForm.appendChild(address);
		divForm.appendChild(postalCode);
		divForm.appendChild(email);
		divForm.appendChild(phone);
		divForm.appendChild(saveMessage);
			
		const divSaveButton = document.createElement("div");
		divSaveButton.setAttribute("id", "divSave");
		divSaveButton.appendChild(
			elementFactory.newButton("Salvar", "save", saveButtonOnClick)
		);
	
		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(divForm);
		formContainer.appendChild(divSaveButton);
	},

	categoryFormPopUp: (category = null) => {
		const formContainer = document.getElementById("categoryFormContainer");

		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(
			elementFactory.newButton("X", "close")
		);

		const divForm = document.createElement("form");
		const idCategory = document.createElement("p")
		idCategory.textContent = category.uid;
		const code = elementFactory.newFormOption("Código da Categoria", category.code)
		const name = elementFactory.newFormOption("Nome da Categoria", category.name)
		const saveMessage = elementFactory.createHtmlTag("p", "saveMessage", "saveMessage");
		
		divForm.appendChild(code);
		divForm.appendChild(name);
		divForm.appendChild(saveMessage);


		const divButtons = document.createElement("div");
		divButtons.setAttribute("id", "divButtons");
		divButtons.appendChild(
			elementFactory.newButton("Salvar", "save", saveButtonOnClick)
		);
		divButtons.appendChild(
			elementFactory.newButton("Deletar", "delete", deleteButtonOnClick)
		);

		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(divForm);
		formContainer.appendChild(divButtons);


	}

}
