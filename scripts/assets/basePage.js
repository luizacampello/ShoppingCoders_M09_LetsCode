window.basePage = {
    createMainContainer: () =>{
        const searchContainer = elementFactory.createHtmlTag(
            "div",
            "searchContainer",
            "searchContainer"
        );
        const storesContainer = elementFactory.createHtmlTag(
            "div",
            "innerContainer",
            "storesContainer"
        );
        const categoriesContainer = elementFactory.createHtmlTag(
            "div",
            "innerContainer",
            "categoriesContainer"
        );
        const popUpContainer = elementFactory.createHtmlTag(
            "div",
            "popUpContainer",
            "popUpContainer"
        );
        const mainContainer = elementFactory.createHtmlTag(
            "div",
            "mainContainer",
            "mainContainer"
        );

        mainContainer.appendChild(popUpContainer);
        mainContainer.appendChild(searchContainer);
        mainContainer.appendChild(storesContainer);
        mainContainer.appendChild(categoriesContainer);
        document.body.appendChild(mainContainer);
    },

    addFooter: () => {
        const footer = elementFactory.createHtmlTag("footer", "footer", "footer");
        const title = elementFactory.createHtmlTagAndSetContent("p", "Categorias", "footer-title");
        const footerList = elementFactory.createHtmlTagAndSetContent("ul", "", "footer-list");

        footer.appendChild(title);
        footer.appendChild(footerList);
        document.body.appendChild(footer);

        infra.createCategoriesQuantities();
        infra.updateCategoriesQuantities();
        infra.addFooterCategorySearchEvent();
    },

	notification: {
        timer: null,
        element: null,
        create: ({text, type}) => {
            basePage.notification.remove();
            const element = document.createElement('div');
            element.classList.add('notification');
            element.classList.add(`notification-${type}`);
            element.textContent = text;
            basePage.notification.element = element;
            document.body.appendChild(element);
            basePage.notification.timer = setTimeout(() => {
                basePage.notification.remove();
            }, 5000);
        },
        remove: () => {
            if (basePage.notification.element) {
                clearTimeout(basePage.notification.timer);
                document.body.removeChild(basePage.notification.element);
                basePage.notification.element = null;
            }
        }
    },
}
