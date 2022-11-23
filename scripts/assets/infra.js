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

    populateStoreContainer: async (container, keyword='', idCategory='') => {
        const storesList = await serviceAPI.getStoresList(keyword, idCategory);
        for (let index = 0; index < storesList.length; index++) {
            const store = storesList[index];
            container.appendChild(
                cardService.CardStore({
                    store: store,
                    onClickCard: () => {
                        popUpFactory.viewStorePopUpContainer(store);
                        //infra.addClearPageEventTo();
                    },
                })
            );
        };
    },

    populateCategoryContainer: async (container, keyword='') => {
        const categoryList = await serviceAPI.getCategoriesList(keyword);
        for (let index = 0; index < categoryList.length; index++) {
            console.log("Hey função chamada")
            const category = categoryList[index];
            container.appendChild(
                cardService.CardCategory({
                    category: category,
                    onClickEdit: () => {
                        popUpFactory.categoryPopUpContainer(category);
                        const formCategory = document.getElementById("categoryFormContainer");
                        formCategory.style.display = "flex";
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
		let list = document.querySelector("#footer-list");
		list.innerHTML = "";
        if (categoriesQuantities == null)
            return;
		categoriesQuantities.forEach(item => {
			if (item.quantity != 0)
			{
				const content = item.name + ": " + item.quantity;
				const listItem = elementFactory.createHtmlTagAndSetContent("li", content, item.uid);
				listItem.classList.add("list-item");
				listItem.setAttribute("name", item.code);
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

    addFooterCategorySearchEvent: () => {
        let list = document.querySelector("#footer-list");

        list.addEventListener("click", function(event) {
            if (event.target.tagName == 'LI') {
				//inserir aqui a alteração na busca

				const storesContainer = document.getElementById("storesContainer"); 
				const storesCards = storesContainer.querySelectorAll("div"); //TODO: Passar essa parte pro Card Service
				storesCards.forEach(item => {
					if (item.firstChild.innerText != event.target.getAttribute("name"))
                        cardService.hideCards(item);
					else
                        cardService.showCards(item);
				})

                infra.displayInnerContainer("storesContainer");
            }
        });
    },

    editButtonOnClick: () => {
        const formPage = document.getElementById("storeFormContainer");
        const infoPage = document.getElementById("storeInfoContainer");
        infoPage.style.display = "none";
        formPage.style.display = "flex";
    },


    addClearPageEventTo: () => {
        const containerId = "popUpContainer";
        const pageCard = document.getElementById(containerId);
        pageCard.addEventListener("click", (e) => {
            if (e.target.id == containerId || e.target.id == "close") {
                pageCard.classList.remove("show");
                pageCard.textContent = "";
            }
        });
    },

    updateStoreButtonOnClick: () => {
        const form = document.getElementById("storeForm");
        const store = infra.getStoreFormElements(form);

        serviceAPI.updateStore(store);
    },

    createStoreButtonOnClick: () => {
        const form = document.getElementById("storeForm");
        const store = infra.getStoreFormElements(form);

        serviceAPI.createStore(store);
    },

    getStoreFormElements: (form) => {
        const store = {};
        store.uid = form.getAttribute("uidstore");
        store.name = form.elements["name"].value;
        store.categoryUid = form.elements["categorySelect"].value;
        store.address = form.elements["address"].value;
        store.postalCode = form.elements["postalCode"].value;
        store.email = form.elements["email"].value;
        store.phone = form.elements["phone"].value;
        console.log(store);

        return store;
    },

    deleteStoreButtonOnClick: () => {
        const form = document.getElementById("storeForm");
        const uidstore = form.getAttribute("uidstore");

        serviceAPI.deleteStore(uidstore);
        const pageCard = document.getElementById("popUpContainer");
        pageCard.innerHTML = "";
        pageCard.classList.remove("show");
        // TODO: Chamar a pagina com todas as lojas
    },


    // OnClick de Category

    getCategoryFormElements: (form) => {
        const category = {};
        category.uid = form.getAttribute("uidcategory");
        category.code = form.elements["code"].value;
        category.name = form.elements["name"].value;
        console.log(category);
        return category;
    },

    createCategoryButtonOnClick: () => {
        const form = document.getElementById("categoryForm");
        const category = infra.getCategoryFormElements(form);

        serviceAPI.createCategory(category);
    },

    updateCategoryButtonOnClick: () => {
        const form = document.getElementById("categoryForm");
        const category = infra.getCategoryFormElements(form);

        serviceAPI.updateCategory(category);
    },

    deleteCategoryButtonOnClick: () => {
        const form = document.getElementById("categoryForm");
        const uidcategory = form.getAttribute("uidcategory");

        serviceAPI.deleteCategory(uidcategory);
        const pageCard = document.getElementById("popUpContainer");
        pageCard.innerHTML = "";
        pageCard.classList.remove("show");
    },

    addLinksToHeader: () => { // TODO: adicionar o restante dos clicks
        
        // const linkCategoryContainer = document.getElementById("linkCategoryContainer");
        // linkCategoryContainer.addEventListener("click", function);

        const linkPopupNewCategory = document.getElementById("linkPopupNewCategory");
        linkPopupNewCategory.addEventListener("click", infra.linkNewCategoryOnClick);

        const linkCategories = document.getElementById("linkCategories");
        linkCategories.addEventListener("click", infra.linkCardsCategoryOnClick);

        // const linkStoreContainer = document.getElementById("linkStoreContainer");
        // linkStoreContainer.addEventListener("click", function);

        const linkPopupNewStore = document.getElementById("linkPopupNewStore");  
        linkPopupNewStore.addEventListener("click", infra.linkNewStoreOnClick);

        const linkStores = document.getElementById("linkStores");
        linkStores.addEventListener("click", infra.linkCardsStoreOnClick);


    },

    linkNewStoreOnClick: () => {
        popUpFactory.newStorePopUpContainer();
        const newStore = document.getElementById("newStoreFormContainer");
        newStore.style.display = "flex";
    },

    linkCardsStoreOnClick: () => {
        const storesContainer = document.getElementById('newStoreFormContainer');
        infra.populateCategoryContainer(storesContainer);
        infra.displayInnerContainer("storesContainer");
    },

    linkNewCategoryOnClick: () => {
        popUpFactory.newCategoryPopUpContainer();
        const newCategory = document.getElementById("newCategoryFormContainer");
        newCategory.style.display = "flex";
    },

    linkCardsCategoryOnClick: () => {
        const categoriesContainer = document.getElementById('categoriesContainer');
        infra.populateCategoryContainer(categoriesContainer);
        infra.displayInnerContainer("categoriesContainer");
    },

}
