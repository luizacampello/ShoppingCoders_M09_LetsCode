window.storageService = {
    
    createLocalStorage: async () => {
        const categoriesList = await serviceAPI.getCategoriesList();
        const storesList = await serviceAPI.getStoresList();

        localStorage.setItem("categoriesList", JSON.stringify(categoriesList));
        localStorage.setItem("storesList", JSON.stringify(storesList));

    },

    createCategoriesQuantities: () => {
        const stores = storageService.getStoresList();
        const categories = storageService.getCategoriesList();
        
        if (categories){
            let listCategories = categories.map((x) => x);
            listCategories.forEach((element) => {
                element.quantity = 0;
    
                for (i = 0; i < stores.length; i++) {
                    if (element.uid == stores[i].category.uid){
                        element.quantity++; 
                    }                    
                }
            });   

            localStorage.setItem("CategoriesQuantities", JSON.stringify(categories));
        }
        
    },

    getCategoriesList: () => {
        const stringCategoriesList = localStorage.getItem("categoriesList");
        const categoriesList = JSON.parse(stringCategoriesList);

        return categoriesList;              
    },

    getStoresList: () => {
        const stringStoresList = localStorage.getItem("storesList");
        const storesList = JSON.parse(stringStoresList);

        return storesList;              
    },

    getCategoriesQuantity: () => {
        const response = localStorage.getItem("CategoriesQuantities");
        const categoriesQuantities = JSON.parse(response);

        return categoriesQuantities;
    },

    updateLocalStorage: async () => {
        localStorage.clear();        
        await storageService.createLocalStorage();
        storageService.createCategoriesQuantities();

        basePage.resetPageAfterCrud();
    },
    
}