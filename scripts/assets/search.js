window.search = {
    addSearchBar: () => {
        const searchContainer = document.getElementById('searchContainer');

        const searchBar = elementFactory.createHtmlTag('div', 'searchBar');

        const searchForm = elementFactory.createHtmlTag('form', 'searchForm');

        const typeSearch = elementFactory.createHtmlTag('select', 'input-group', 'typeSearch');

            const optionCategory = elementFactory.createHtmlTagAndSetContent('option', 'Categorias', 'optionCategory');
            optionCategory.setAttribute('value', 'category');
            optionCategory.setAttribute('class', 'option-group');

            const optionKeyWord = elementFactory.createHtmlTagAndSetContent('option','Palavra-Chave', 'optionKeyWord');
            optionKeyWord.setAttribute('value', 'keyWord');
            optionKeyWord.setAttribute('class', 'option-group');
        
        const typeCategory = elementFactory.createHtmlTag('select','searchCategoryHide','typeCategory');

        const keyWordSearch = elementFactory.createHtmlTag('input', 'searchKeyWord', 'keyWordSearch');
        keyWordSearch.setAttribute('placeholder', 'Digite a palavra chave');

        const searchIcon = elementFactory.createHtmlTag('span', 'material-symbols-outlined', 'iconeBusca');
        searchIcon.textContent = 'search';

        typeSearch.add(optionKeyWord);
        typeSearch.add(optionCategory);

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

        for (let index = 0; index < categoriesList.length; index++) {
            const category = categoriesList[index];
            
            const option = elementFactory.createHtmlTagAndSetContent('option', `${category.code} - ${category.name}`);
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
        }

        else{
            selectTypeCategory.setAttribute('class', 'searchCategoryHide');
            inputKeyWord.setAttribute('class', 'searchKeyWord');
        }
    },

    searchClick: () => {
        const activeContainer = document.getElementsByClassName('activeInnerContainer');
        const selectTypeSearch = document.getElementById('typeSearch');

        if (activeContainer[0].id == 'storesContainer') {

            const selectSearchValue = selectTypeSearch.options[selectTypeSearch.selectedIndex].value;

            if(selectSearchValue == 'category'){
                const selectCategory = document.getElementById('typeCategory');
                const selectCategoryUid = selectCategory.options[selectCategory.selectedIndex].getAttribute('value');
                
                infra.showSelectCategory(selectCategoryUid);
            }
    
            if(selectSearchValue == 'keyWord'){
                const inputKeyWord = document.getElementById('keyWordSearch');
                const inputKeyWordValue = inputKeyWord.value.toLowerCase().trim();
                
                infra.showStoresByKeyword(inputKeyWordValue)
                
                inputKeyWord.value = '';
            }
        }

        if (activeContainer[0].id == 'categoriesContainer') {
            const inputKeyWord = document.getElementById('keyWordSearch');
            const inputKeyWordValue = inputKeyWord.value.toLowerCase().trim();
            infra.showCategoriesByKeyword(inputKeyWordValue);
                
        }
 
    },

    containerChangeClass: () => {
        const activeContainer = document.getElementsByClassName('activeInnerContainer');
        const inputKeyWord = document.getElementById('keyWordSearch');
        const selectTypeCategory = document.getElementById('typeCategory');
        const selectTypeSearch = document.getElementById('typeSearch');
        
        if(activeContainer[0].id == 'storesContainer') {
            selectTypeSearch.style.visibility = 'visible';
            selectTypeCategory.setAttribute('class', 'searchCategoryHide');
            inputKeyWord.setAttribute('class', 'searchKeyWord');          
        }
        else {
            selectTypeSearch.style.visibility = 'hidden';
            selectTypeCategory.setAttribute('class', 'searchCategoryHide');
            inputKeyWord.setAttribute('class', 'searchKeyWord');
        }
            
    }, 

}