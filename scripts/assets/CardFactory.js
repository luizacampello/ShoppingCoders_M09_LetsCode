
window.CardFactory = {
    CardStore: ({category, name, onClickCard = () =>{}}) =>{
        const CardStoreElement = document.createElement('div');
        CardStoreElement.classList.add('card-content');
        CardStoreElement.classList.add('card-store');

        const storeCategory = document.createElement('h3');
        storeCategory.textContent = `${category}`;
        
        const storeName = document.createElement('h2');
        storeName.textContent = `${name}`;
        CardStoreElement.addEventListener('click', onClickCard)
        CardStoreElement.appendChild(storeCategory);
        CardStoreElement.appendChild(storeName);
        return CardStoreElement;
    },
    CardCategory: ({Id, Name, onClickEdit = () =>{}, onClickStores = () =>{}}) => {
        const CardStoreElement = document.createElement('div');
        CardStoreElement.classList.add('card-content');
        CardStoreElement.classList.add('card-category');

        const categoryId = document.createElement('h3');
        categoryId.textContent = `${Id}`;
        
        const categoryName = document.createElement('h2');
        categoryName.textContent = `${Name}`
        
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
    }
}
