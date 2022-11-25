window.cardService = {
    CardStore: ({store, onClickCard = () =>{}}) =>{
        const cardStoreElement = elementFactory.createHtmlTag('div', 'card-content');
        cardStoreElement.setAttribute("uidCategory", store.category.uid);

        const storeCategory = document.createElement('h3');
        storeCategory.textContent = store.category.code;

        const storeName = document.createElement('h2'); 
        storeName.textContent = store.name;

        cardStoreElement.addEventListener('click', onClickCard)
        cardStoreElement.appendChild(storeCategory);
        cardStoreElement.appendChild(storeName);

        return cardStoreElement;
    },

    CardCategory: ({category, onClickEdit = () =>{}, onClickStores = () =>{}}) => {
        const cardCategoryElement = elementFactory.createHtmlTag('div', 'card-content')
        cardCategoryElement.setAttribute("uidCategory", category.uid);

        const categoryId = document.createElement('h3');
        categoryId.textContent = category.code;

        const categoryName = document.createElement('h2');
        categoryName.textContent = category.name;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('card-button');
        editButton.addEventListener('click', onClickEdit);

        const categoryButton = document.createElement('button');
        categoryButton.textContent = 'Lojas';
        categoryButton.classList.add('card-button');
        categoryButton.addEventListener('click', onClickStores);

        cardCategoryElement.appendChild(categoryId);
        cardCategoryElement.appendChild(categoryName);
        cardCategoryElement.appendChild(editButton);
        cardCategoryElement.appendChild(categoryButton);

        return cardCategoryElement;
    },

    hideCards: (item) => {  
		item.classList.add("hide");
		item.classList.remove("card-content");
	},

	showCards: (item) => {
		item.classList.remove("hide");
		item.classList.add("card-content");
	},

    resetCards: (container) => {
		const storesContainer = document.getElementById(container);
		if (storesContainer == null)
			return;
		const storesCards = storesContainer.querySelectorAll("div");
		if (storesCards == null)
			return;
		storesCards.forEach(item => {
			cardService.showCards(item);
		})
	},

}