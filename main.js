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
        "styles/headerStyle.js"
    ];
 
    addCSSFile();
    addJSScriptFiles(jsFiles)
 
    window.addEventListener("load", async () => {
        basePage.addHeader();      
        basePage.createMainContainer();
        await storageService.createLocalStorage();
        storageService.createCategoriesQuantities();
        
        infra.addLinksToHeader();
        search.addSearchBar();        
        basePage.addFooter();
        infra.addClearPageEventTo();
 
        infra.populateCategoryContainer(); //TODO: Mudar para receber os parametros da busca
        infra.populateStoreContainer(); //TODO: Mudar para receber os parametros da busca
        infra.displayInnerContainer("storesContainer");
    });
})();
 
function addCSSFile() {
    const cssLink = document.createElement("link");
 
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = "style.css";
 
    const cssLinkIcon = document.createElement('link');
 
    cssLinkIcon.rel = 'stylesheet';
    cssLinkIcon.type = 'text/css';
    cssLinkIcon.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
 
    document.head.appendChild(cssLink);
    document.head.appendChild(cssLinkIcon);
}
 
function addJSScriptFiles(jsFiles) {
    for (const file of jsFiles) {
        const script = document.createElement("script");
        script.setAttribute("src", `scripts/${file}`);
        document.body.appendChild(script); //TODO adicionar no body ou no head?
    }
}
