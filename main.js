const MockStore = 
{
    category : 'Alimentação',
    name: 'McDonalds'
}

const MockCategory = 
{
    categoryName : 'Alimentação',
    categoryId: 001
}

function addCSSFile () {
    const cssLink = document.createElement('link');
   
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';
  
    document.head.appendChild(cssLink);
}

addCSSFile();

const divCardsContainer = document.createElement('div');
divCardsContainer.setAttribute('id','CardsContainer');

createCategoryCard(MockCategory);
createStoreCard(MockStore);

document.body.appendChild(divCardsContainer) // TO DO: Mudar para a div do container geral quando for feito o merge de todas as branches

function createCategoryCard(object){
    const divCardContent = document.createElement('div');
    divCardContent.classList.add('card-content');

    const categoryId = document.createElement('h2');
    categoryId.textContent = object.categoryId;
    
    const categoryName = document.createElement('h1');
    categoryName.textContent = object.categoryName;

    const cardEditButton = document.createElement('button');
    cardEditButton.textContent = 'Editar';
    cardEditButton.classList.add('card-button')
    
    const cardStoresButton = document.createElement('button');
    cardStoresButton.textContent = 'Lojas';
    cardStoresButton.classList.add('card-button')
    
    divCardContent.appendChild(categoryId);
    divCardContent.appendChild(categoryName);
    divCardContent.appendChild(cardStoresButton);
    divCardContent.appendChild(cardEditButton);

    divCardsContainer.appendChild(divCardContent);
}

function createStoreCard(object){
    const divCardContent = document.createElement('div');
    divCardContent.classList.add('card-content');

    const storeCategory = document.createElement('h2');
    storeCategory.textContent = object.category;
    
    const storeName = document.createElement('h1');
    storeName.textContent = object.name;

    divCardContent.appendChild(storeCategory);
    divCardContent.appendChild(storeName);

    divCardsContainer.appendChild(divCardContent);
}

