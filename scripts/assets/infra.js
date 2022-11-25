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

    populateStoreContainer: () => {
        const storesList = storageService.getStoresList();

        const storesContainer = document.getElementById("storesContainer");

        for (let index = 0; index < storesList.length; index++) {
            const store = storesList[index];
            storesContainer.appendChild(
                cardService.CardStore({
                    store: store,
                    onClickCard: () => {
                        popUpFactory.viewStorePopUpContainer(store);
                    },
                })
            );
        }
    },

    populateCategoryContainer: () => {
        const categoryList = storageService.getCategoriesList(); 

        const categoriesContainer = document.getElementById("categoriesContainer");

        for (let index = 0; index < categoryList.length; index++) {
            const category = categoryList[index];
            categoriesContainer.appendChild(
                cardService.CardCategory({
                    category: category,
                    onClickEdit: () => {
                        popUpFactory.categoryPopUpContainer(category);
                        const formCategory = document.getElementById(
                            "categoryFormContainer"
                        );
                        formCategory.style.display = "flex"; //TODO
                    },
                    onClickStores: () => {
                        infra.showSelectCategory(category.uid);
                        categoriesContainer.classList.remove(
                            "activeInnerContainer"
                        ); //TODO
                        categoriesContainer.classList.add("innerContainer"); //TODO
                        search.containerChangeClass();
                    },
                })
            );
        }
    },

    refreshFooter: async () => {
        await storageService.createCategoriesQuantities();
        setTimeout(function () {
            infra.updateCategoriesQuantities();
        }, 2000); //TODO
    },

    updateCategoriesQuantities: () => {
        const response = localStorage.getItem("CategoriesQuantities"); //TODO
        const categoriesQuantities = JSON.parse(response); //TODO

        let list = document.querySelector("#footer-list");
        list.innerHTML = "";
        if (categoriesQuantities == null) return;
        categoriesQuantities.forEach((item) => {
            if (item.quantity != 0) {
                const content = item.name + ": " + item.quantity;
                const listItem = elementFactory.createHtmlTagAndSetContent(
                    "li",
                    content,
                    item.uid
                );
                listItem.classList.add("list-item");
                listItem.setAttribute("name", item.code);
                list.appendChild(listItem);
            }
        });
    },

    populateFormCategory: (categoryForm, defaultCategory = "") => {
        if (defaultCategory) {
            const defaultOption =
                elementFactory.newCategoryOption(defaultCategory);
            categoryForm.add(defaultOption);
            categoryForm.selectedIndex = 0;
        }

        const categoriesList = storageService.getCategoriesList();

        for (let index = 0; index < categoriesList.length; index++) {
            const categoryOption = categoriesList[index];
            if (categoryOption.uid != defaultCategory.uid) {
                categoryForm.add(
                    elementFactory.newCategoryOption(categoryOption)
                );
            }
        }
    },

    addFooterCategorySearchEvent: () => {
        let list = document.querySelector("#footer-list");

        list.addEventListener("click", function (event) { 
            if (event.target.tagName == "LI") { 
                //inserir aqui a alteração na busca //TODO

                infra.showSelectCategory(event.target.getAttribute("id"));
            }
        });
    },

    showSelectCategory: (uidCategory = "") => {
        const categoriesContainer = document.getElementById(
            "categoriesContainer"
        );

        const storesContainer = document.getElementById("storesContainer");
        const storesCards = storesContainer.querySelectorAll("div");

        
        storesCards.forEach((item) => {
            if (uidCategory) {
                const uidItem = item.getAttribute("uidCategory");
                
                if (uidCategory != uidItem) {
                    cardService.hideCards(item);
                } else {
                    cardService.showCards(item);
                }
            } else {
                cardService.showCards(item);
            }
        });

        storesContainer.classList.add("activeInnerContainer"); //TODO
        categoriesContainer.classList.remove("activeInnerContainer"); //TODO
    },

    showStoresByKeyword: (keyword = "") => {
        const storesContainer = document.getElementById("storesContainer");
        const storesCards = storesContainer.querySelectorAll("div");

        storesCards.forEach((item) => {
            if (keyword != "") {
                const itemNodes = item.childNodes;
                const re = new RegExp(keyword + ".*");

                if (itemNodes[1].innerText.toLowerCase().match(re)) {
                    cardService.showCards(item);
                } else {
                    cardService.hideCards(item);
                }
            } 
            else {
                cardService.showCards(item);
            }
        });

        storesContainer.classList.add("activeInnerContainer"); //TODO
        search.containerChangeClass();
    },

    showCategoriesByKeyword: (keyword) => {
        const categoriesContainer = document.getElementById(
            "categoriesContainer"
        );
        const categoriesCards = categoriesContainer.querySelectorAll("div");

        categoriesCards.forEach((item) => {
            const itemNodes = item.childNodes;
            const re = new RegExp(keyword + ".*");
            console.log("foi");
            if (itemNodes[1].innerText.toLowerCase().match(re)) {
                cardService.showCards(item);
            } else {
                cardService.hideCards(item);
            }
        });

        categoriesContainer.classList.add("activeInnerContainer"); //TODO
        search.containerChangeClass();  //TODO
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
        //TODO INSERIR VALIDAÇAO

        serviceAPI.updateStore(store); //API
    },

    createStoreButtonOnClick: () => {
        const form = document.getElementById("storeForm");
        const store = infra.getStoreFormElements(form);

        serviceAPI.createStore(store); //API
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

        return store;
    },

    deleteStoreButtonOnClick: () => {
        const form = document.getElementById("storeForm");
        const uidstore = form.getAttribute("uidstore");

        serviceAPI.deleteStore(uidstore); //API
        const pageCard = document.getElementById("popUpContainer");
        pageCard.innerHTML = "";
        pageCard.classList.remove("show");
        // TODO: Chamar a pagina com todas as lojas 
    },

    // OnClick de Category //TODO

    getCategoryFormElements: (form) => {
        const category = {};
        category.uid = form.getAttribute("uidcategory");
        category.code = form.elements["code"].value;
        category.name = form.elements["name"].value;

        return category;
    },

    createCategoryButtonOnClick: () => {
        const form = document.getElementById("categoryForm");
        const category = infra.getCategoryFormElements(form);

        serviceAPI.createCategory(category); //API
    },

    updateCategoryButtonOnClick: () => {
        const form = document.getElementById("categoryForm");
        const category = infra.getCategoryFormElements(form);
        //TODO: ADD VALIDACAO
        serviceAPI.updateCategory(category); //API
    },

    deleteCategoryButtonOnClick: () => {
        const form = document.getElementById("categoryForm");
        const uidcategory = form.getAttribute("uidcategory");

        serviceAPI.deleteCategory(uidcategory); //API
        const pageCard = document.getElementById("popUpContainer");
        pageCard.innerHTML = "";
        pageCard.classList.remove("show");
    },

    addLinksToHeader: () => {
        const linkPopupNewCategory = document.getElementById(
            "linkPopupNewCategory"
        );

        linkPopupNewCategory.addEventListener(
            "click",
            infra.linkNewCategoryOnClick
        );

        const linkCategories = document.getElementById("linkCategories");
        linkCategories.addEventListener(
            "click",
            infra.linkCardsCategoryOnClick
        );

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
        cardService.resetCards("storesContainer");
        infra.displayInnerContainer("storesContainer");
        search.containerChangeClass(); //TODO
    },

    linkNewCategoryOnClick: () => {
        popUpFactory.newCategoryPopUpContainer();
        const newCategory = document.getElementById("newCategoryFormContainer");
        newCategory.style.display = "flex";
    },

    linkCardsCategoryOnClick: () => {
        cardService.resetCards("categoriesContainer");
        infra.displayInnerContainer("categoriesContainer");
        search.containerChangeClass(); //TODO
    },

};
