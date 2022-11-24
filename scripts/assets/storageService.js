window.storageService = {
    
    createLocalStorage: async () => {
        const categoriesList = await serviceAPI.getCategoriesList();
        const storesList = await serviceAPI.getStoresList("");

        localStorage.setItem("categoriesList", JSON.stringify(categoriesList));
        localStorage.setItem("storesList", JSON.stringify(storesList));
    },

    createCategoriesQuantities: () => {  //TODO como mudar isso pra adicionar ali em cima
        const stores = storageService.getStoresList();
        const categories = storageService.getCategoriesList();

        if (categories == null){
            return;
        } 

        categories.forEach((element) => {
            element.quantity = 0; //TODO

            for (i = 0; i < stores.length; i++) {
                if (element.uid == stores[i].category.uid){
                    element.quantity++; 
                }                    
            }
        });

        localStorage.setItem("CategoriesQuantities", JSON.stringify(categories));
    },

    getCategoriesList: () => {
        const stringCategoriesList = localStorage.getItem("categoriesList");
        const categoriesList = JSON.parse(stringCategoriesList);

        return categoriesList;              
    },

    getStoresList: () => {
        const stringStoresList = localStorage.getItem("storesList");
        const storesList = JSON.parse(stringStoresList);
        console.log(storesList);

        return storesList;              
    },

    updateLocalStorage: async () => {
        localStorage.clear();
        const categoriesList = await serviceAPI.getCategoriesList();
        const storesList = await serviceAPI.getStoresList("");

        localStorage.setItem("categoriesList", JSON.stringify(categoriesList));
        localStorage.setItem("storesList", JSON.stringify(storesList));
    },


}