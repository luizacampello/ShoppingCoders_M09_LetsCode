
window.cardService = {
<<<<<<< Updated upstream
    CardStore: ({store, onClickCard = () =>{}}) =>{
        const cardStoreElement = elementFactory.createHtmlTag('div', 'card-content');

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

        const categoryId = document.createElement('h3');
        categoryId.textContent = category.code;

        const categoryName = document.createElement('h2');
        categoryName.textContent = category.name;

        const editButton = document.createElement('button'); //TODO dá pra usar a func de botão?
        editButton.textContent = 'Editar';
        editButton.classList.add('card-button');
        editButton.addEventListener('click', onClickEdit);

        const categoryButton = document.createElement('button'); //TODO dá pra usar a func de botão?
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
=======
	CardStore: ({store, onClickCard = () =>{}}) =>{
		const CardStoreElement = document.createElement('div');
		CardStoreElement.classList.add('card-content');

		const storeCategory = document.createElement('h3');
		storeCategory.textContent = `${store.category.code}`;

		const storeName = document.createElement('h2');
		storeName.textContent = `${store.name}`;

		CardStoreElement.addEventListener('click', onClickCard)
		CardStoreElement.appendChild(storeCategory);
		CardStoreElement.appendChild(storeName);

		return CardStoreElement;
	},

	CardCategory: ({category, onClickEdit = () =>{}, onClickStores = () =>{}}) => {
		const CardStoreElement = document.createElement('div');
		CardStoreElement.classList.add('card-content');

		const categoryId = document.createElement('h3');
		categoryId.textContent = `${category.code}`;

		const categoryName = document.createElement('h2');
		categoryName.textContent = `${category.name}`;

		const EditButton = document.createElement('button');
		EditButton.textContent = 'Editar';
		EditButton.classList.add('card-button');
		EditButton.addEventListener('click', onClickEdit);

		const StoresButton = document.createElement('button');
		StoresButton.textContent = 'Lojas';
		StoresButton.classList.add('card-button');
		StoresButton.addEventListener('click', onClickStores);

		CardStoreElement.appendChild(categoryId);
		CardStoreElement.appendChild(categoryName);
		CardStoreElement.appendChild(EditButton);
		CardStoreElement.appendChild(StoresButton);

		return CardStoreElement;
	},

	hideCards: (item) => {
>>>>>>> Stashed changes
		item.classList.add("hide");
		item.classList.remove("card-content");
		item.querySelector("h3").classList.add("hide"); //TODO
		item.querySelector("h3").classList.remove("show"); //TODO
	},

	showCards: (item) => {
		item.classList.remove("hide");
		item.classList.add("card-content");
		item.querySelector("h3").classList.add("show"); //TODO
		item.querySelector("h3").classList.remove("hide"); //TODO
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
