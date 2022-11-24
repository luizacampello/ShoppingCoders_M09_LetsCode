window.search = {
    addSearchBar: () => {
        const searchContainer = document.getElementById('searchContainer');

        const searchBar = elementFactory.createHtmlTag('div','searchBar');

        const searchForm = elementFactory.createHtmlTag('form','searchForm');

        const typeSearch = elementFactory.createHtmlTag('select','input-group','typeSearch');

            const optionCategory = elementFactory.createHtmlTagAndSetContent('option','Categorias');
            optionCategory.setAttribute('value','category');
            optionCategory.setAttribute('class','option-group');
            optionCategory.setAttribute('id','optionCategory');

            const optionKeyWord = elementFactory.createHtmlTagAndSetContent('option','Palavra-Chave');
            optionKeyWord.setAttribute('value','keyWord');
            optionKeyWord.setAttribute('class','option-group');
            optionKeyWord.setAttribute('id','optionKeyWord');
        
        const typeCategory = elementFactory.createHtmlTag('select','searchCategory','typeCategory');

        const keyWordSearch = elementFactory.createHtmlTag('input','searchKeyWordHide','keyWordSearch');
        keyWordSearch.setAttribute('type', 'text');
        keyWordSearch.setAttribute('placeholder', '    Digite a palavra chave');

        const searchIcon = document.createElement('span');
        searchIcon.className = 'material-symbols-outlined';
        searchIcon.textContent = 'search';
        searchIcon.id = 'iconeBusca';
        

        typeSearch.add(optionCategory);
        typeSearch.add(optionKeyWord);
        searchForm.appendChild(typeSearch);
        searchForm.appendChild(typeCategory);
        searchForm.appendChild(keyWordSearch);
        searchBar.appendChild(searchForm);
        searchBar.appendChild(searchIcon);
        searchContainer.appendChild(searchBar);

        typeSearch.addEventListener('change', search.typeSearchChange);
        search.populateTypeCategory();
        searchIcon.addEventListener('click', search.searchClick)
    },

    populateTypeCategory: async () => {
        const selectTypeCategory = document.getElementById('typeCategory');
            const optionDefault = elementFactory.createHtmlTagAndSetContent('option','Selecione a categoria');
            optionDefault.setAttribute('value','default');
            optionDefault.setAttribute('class','option-group')
            optionDefault.hidden = true;
            selectTypeCategory.add(optionDefault);

        const categoriesList =  await serviceAPI.getCategoriesList();
        for(let index = 0; index < categoriesList.length; index++){
            const category = categoriesList[index];
            
            const option = elementFactory.createHtmlTagAndSetContent('option', category.name);
            option.setAttribute('value', category.uid);
            option.setAttribute('name', category.code)
            option.setAttribute('class','option-group');
            selectTypeCategory.add(option);
        }
    },

    typeSearchChange: () => {
        const selectTypeSearch = document.getElementById('typeSearch');
        const selectValue = selectTypeSearch.options[selectTypeSearch.selectedIndex].value;
        const selectTypeCategory = document.getElementById('typeCategory');
        const inputKeyWord = document.getElementById('keyWordSearch');
        if(selectValue == 'category'){
            selectTypeCategory.setAttribute('class', 'searchCategory');
            inputKeyWord.setAttribute('class', 'searchKeyWordHide');
            search.containerChangeClass();
        }
        else{
            selectTypeCategory.setAttribute('class', 'searchCategoryHide');
            inputKeyWord.setAttribute('class', 'searchKeyWord');
            search.containerChangeClass();
        }
    },

    searchClick: () => {
        const selectTypeSearch = document.getElementById('typeSearch');
        const selectSearchValue = selectTypeSearch.options[selectTypeSearch.selectedIndex].value;

        if(selectSearchValue == 'category'){
            const selectCategory = document.getElementById('typeCategory');
            const selectCategoryName = selectCategory.options[selectCategory.selectedIndex].getAttribute('name');
            
            infra.showSelectCategory(selectCategoryName);
        }

        if(selectSearchValue == 'keyWord'){
            const inputKeyWord = document.getElementById('keyWordSearch');
            const inputKeyWordValue = inputKeyWord.value.toLowerCase();
            const storesContainer = document.getElementById("storesContainer").className;
            const categoriesContainer = document.getElementById("categoriesContainer").className;

            if (storesContainer == 'activeInnerContainer') {
                infra.showSearchKeyWordStores(inputKeyWordValue)
            }
            else{
                if (categoriesContainer == 'activeInnerContainer') {
                    infra.showSearchKeyWordCategories(inputKeyWordValue);
                }
            }
            
        }
    },

    containerChangeClass: () => {
        const categoriesContainer = document.getElementById("categoriesContainer").className;
        const optionCategory = document.getElementById('optionCategory');
        const inputKeyWord = document.getElementById('keyWordSearch');
        const selectTypeCategory = document.getElementById('typeCategory');


        if(categoriesContainer == 'activeInnerContainer') {
            optionCategory.disabled = true;
            optionCategory.hidden = true;

            selectTypeCategory.setAttribute('class', 'searchCategoryHide');
            inputKeyWord.setAttribute('class', 'searchKeyWord');          
        }
        else {
            optionCategory.disabled = false;
            optionCategory.hidden = false;

            const selectTypeSearch = document.getElementById('typeSearch');
            const selectSearchValue = selectTypeSearch.options[selectTypeSearch.selectedIndex].value;

            if (selectSearchValue == 'category') {
                selectTypeCategory.setAttribute('class', 'searchCategory');
                inputKeyWord.setAttribute('class', 'searchKeyWordHide');
            }
        }
    }, 

}