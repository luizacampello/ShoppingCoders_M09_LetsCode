window.infra = {
    displayInnerContainer: (containerId) => {
        const innerContainers =
            document.getElementsByClassName("innerContainer");
    
        for (let index = 0; index < innerContainers.length; index++) {
            const container = innerContainers[index];
    
            if (container.classList.contains("activeInnerContainer")) {
                container.classList.remove("activeInnerContainer");
            }
        }
    
        const activeContainer = document.getElementById(containerId);
        activeContainer.classList.add("activeInnerContainer");
    },
    populateStoreContainer: async (container,keyword='', idCategory='') => {
        const storesList = await serviceAPI.getStoresList(keyword, idCategory);
        for (let index = 0; index < storesList.length; index++) {
            const store = storesList[index];
            container.appendChild(
                CardFactory.CardStore({
                    store: store,
                    onClickCard: () => {
                        newPopUpContainer(store);
                        addClearPageEventTo("popUpContainer");
                    },
                })
            );
        };
    },
    
    populateCategoryContainer: async (container, keyword='') => {
        const categoryList = await serviceAPI.getCategoriesList(keyword); 
        for (let index = 0; index < categoryList.length; index++) { 
            const category = categoryList[index]; 
            container.appendChild( 
                CardFactory.CardCategory({ 
                    category: category, 
                    onClickEdit: () => { 
                        window.alert("Click 1"); //TODO: Chamar a função de editar 
                    }, 
                    onClickStores: () => { 
                        window.alert("Click 2"); //TODO: Chamar páginas de lojas com filtro 
                    }, 
                }) 
            ); 
        }; 
    },

    updateCategoriesQuantities: () => {
        const response = localStorage.getItem("CategoriesQuantities");
        const categoriesQuantities = JSON.parse(response);
    
        if (categoriesQuantities == null)
            return;
    
        for (let key in categoriesQuantities) {
            const content = categoriesQuantities[key].key + ": " + categoriesQuantities[key].value;
            const listItem = document.createElement("li");
            listItem.classList.add("list-item");
            listItem.setAttribute("id", categoriesQuantities[key].key);
            listItem.textContent = content;
            let list = document.querySelector("ul");
            list.appendChild(listItem);
        }
    },

    populateFormCategory: async (categoryForm, defaultCategory) => { 
        if (defaultCategory) {
            const defaultOption = newCategoryOption(defaultCategory); 
            categoryForm.add(defaultOption); 
            categoryForm.selectedIndex = 0;
        }

        const categoriesList = await getCategoriesList(); 
     
        for (let index = 0; index < categoriesList.length; index++) { 
            const categoryOption = categoriesList[index].name; 
            if (categoryOption != defaultCategory) { 
                categoryForm.add(newCategoryOption(categoryOption)); 
            } 
        } 
    },     

    issoaquivaiserumafunctio: () => {
        //adicionar evento para chamar a container store com o filtro de categoria para a categoria selecionada
        let list = document.querySelector(".footer-list");

        list.addEventListener("click", function(event) {
            if (event.target.tagName == 'LI') {
                /*chamada para a função de apresentação da section de lojas com a busca da categoria clicada*/
                //console.log(event.target.id);
            }
        });
        
    },

    mockCategoriesQuantity: () => {
        //apagar depois
        let categoryQuantity = [];
    
        for(let i = 0; i < 50; i++) {
            const categoryName = "Category" + i;
            const quantity = i;
            categoryQuantity.push({
                key:categoryName,
                value:quantity
            })
        }
        localStorage.setItem("CategoriesQuantities", JSON.stringify(categoryQuantity));
    },

    
}