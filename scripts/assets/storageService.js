window.storageService = {

    createLocalStorage: async () => {
        const categoriesList = await serviceAPI.getCategoriesList();
        const storesList = await serviceAPI.getStoresList("");
        console.log(storesList);


        localStorage.setItem("categoriesList", JSON.stringify(categoriesList));
        localStorage.setItem("storesList", JSON.stringify(storesList));
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
        const categoriesList = await serviceAPI.GetCategoriesList();
        const storesList = await serviceAPI.GetStoresList("");

        localStorage.setItem("categoriesList", JSON.stringify(categoriesList));
        localStorage.setItem("storesList", JSON.stringify(storesList));
    },


}
