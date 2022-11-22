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
                        popUpFactory.newPopUpContainer(store);
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

	createCategoriesQuantities: async () => {
		const stores = await serviceAPI.getStoresList("", "");
		const categories = await serviceAPI.getCategoriesList("");

		categories.forEach(element => {
			element.quantity = 0;
			for (i = 0; i < stores.length; i++) {
				if (element.uid == stores[i].category.uid)
					element.quantity++;
			}
		});
		localStorage.setItem("CategoriesQuantities", JSON.stringify(categories));
	},

    updateCategoriesQuantities: () => {
        const response = localStorage.getItem("CategoriesQuantities");
        const categoriesQuantities = JSON.parse(response);
        if (categoriesQuantities == null)
            return;
		categoriesQuantities.forEach(item => {
			if (item.quantity != 0)
			{
				const content = item.name + ": " + item.quantity;
				const listItem = elementFactory.createHtmlTagAndSetContent("li", content, item.uid);
				listItem.classList.add("list-item");
				listItem.setAttribute("name", item.code);
				let list = document.querySelector("#footer-list");
				list.appendChild(listItem);
			}
		})
    },

    populateFormCategory: async (categoryForm, defaultCategory = "") => {
        if (defaultCategory) {
            const defaultOption = elementFactory.newCategoryOption(defaultCategory); 
            categoryForm.add(defaultOption); 
            categoryForm.selectedIndex = 0;
        }

        const categoriesList = await serviceAPI.getCategoriesList(); 
     
        for (let index = 0; index < categoriesList.length; index++) { 
            const categoryOption = categoriesList[index]; 
            if (categoryOption.uid != defaultCategory.uid) { 
                categoryForm.add(elementFactory.newCategoryOption(categoryOption)); 
            } 
        } 
    },     

        for (let index = 0; index < categoriesList.length; index++) {
            const categoryOption = categoriesList[index].name;
            if (categoryOption != defaultCategory) {
                categoryForm.add(newCategoryOption(categoryOption));
            }
        }
    },

    addFooterCategorySearchEvent: () => {
        let list = document.querySelector("#footer-list");

        list.addEventListener("click", function(event) {
            if (event.target.tagName == 'LI') {
				//inserir aqui a alteração na busca


				const storesContainer = document.getElementById("storesContainer");
				const storesCards = storesContainer.querySelectorAll("div");
				storesCards.forEach(item => {
					if (item.firstChild.innerText != event.target.getAttribute("name"))
						infra.hideCards(item);
					else
						infra.showCards(item);
				})
				storesContainer.classList.add("activeInnerContainer");
				storesContainer.classList.remove("innerContainer");
            }
        });
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
	}


}
