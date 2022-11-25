(() => {
   
    const jsFiles = [
        "assets/serviceAPI.js",
        "assets/storageService.js",
        "assets/basePage.js",
        "assets/popUpFactory.js",
        "assets/search.js",
        "assets/infra.js",
        "assets/elementFactory.js",
        "assets/cardService.js",
        "assets/basePage.js",
        "styles/cardStyle.js",
        "styles/headerStyle.js",
        "styles/footerStyle.js",
        "styles/notificationStyle.js",
        "styles/popUpStyle.js",
        "styles/searchStyle.js",
        "styles/mainContainerStyle.js"
    ];
 
    // addCSSFile();
    addJSScriptFiles(jsFiles)
 
    window.addEventListener("load", async () => {
        basePage.addHeader();      
        basePage.createMainContainer();
        await storageService.createLocalStorage();
        storageService.createCategoriesQuantities();
        
        infra.addLinksToHeader();
        search.addSearchBar();
        infra.addClearPageEventTo();
        basePage.addFooter();
       
 
        const storesContainer = document.getElementById('storesContainer');
        const categoriesContainer = document.getElementById('categoriesContainer');
 
        infra.populateCategoryContainer(categoriesContainer);
        infra.populateStoreContainer(storesContainer);
        infra.displayInnerContainer("storesContainer")
    });
})();
 
function addJSScriptFiles(jsFiles) {
    for (const file of jsFiles) {
        const script = document.createElement("script");
        script.setAttribute("src", `scripts/${file}`);
        document.body.appendChild(script);
    }
}



