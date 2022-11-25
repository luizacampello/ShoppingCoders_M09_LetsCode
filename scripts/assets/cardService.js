
window.cardService = {
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
		item.classList.add("hide");
		item.classList.remove("card-content");
		item.querySelector("h3").classList.add("hide");
		item.querySelector("h3").classList.remove("show");
	},

	showCards: (item) => {
		item.classList.remove("hide");
		item.classList.add("card-content");
		item.querySelector("h3").classList.add("show");
		item.querySelector("h3").classList.remove("hide");
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
