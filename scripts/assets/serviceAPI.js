window.serviceAPI = {
    BASE_URL: "http://estabelecimentos.letscode.dev.netuno.org:25390/services",

    uidGroupDefinition: {
        "group": {
            "uid": "ee872905-c4e2-4d1f-bbd1-e858b44bd40c"
        }
    },

    fetchPostRequisition: async (url, body) => {
        const request = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).catch((error) => {
            console.log("Erro na comunicação:", error);
        });

        if (!request.ok) {
            errorHandler(request);
            return [];
        }

        console.log("Requisition status:", request.status);

        return await request.json();
    },

    getCategoriesList: async (keyword = "") => {
        let url = serviceAPI.BASE_URL + "/category/list";
        let body =  serviceAPI.uidGroupDefinition;
        body.text = keyword;
    
        const categories = await serviceAPI.fetchPostRequisition(url, body);
        return categories;
    },
    
    getStoresList: async (keyWord, uidCategory) => {
        let url = serviceAPI.BASE_URL + "/establishment/list";
        let body = serviceAPI.uidGroupDefinition;
        body.text = keyWord;
    
        if (uidCategory) {
            body.category = {"uid": uidCategory};
        }
    
        let stores = await serviceAPI.fetchPostRequisition(url, body);
    
        return stores;
    },

    createCategory: async (catCode, catName) => {    
        let url = serviceAPI.BASE_URL + "/category";
        let body = serviceAPI.uidGroupDefinition;
        body.code = catCode;
        body.name = catName;
        delete body.text;
        let categoryUid = await serviceAPI.fetchPostRequisition(url, body);
    
        return categoryUid;
    },
    
    updateCategory: async (catUid, catCode, catName) => {
        //validar se code e name são diferentes de vazio, caso contrário abrir notificação na tela
        //validar qual o campo está sendo alterado, buscando o objeto no getlist via uid
        //fazendo o comparativo no currObj e newObj
        //alinhar se concordam c a criação
    
        let url = serviceAPI.BASE_URL + "/category";
        let body = serviceAPI.uidGroupDefinition;
        body.uid = catUid;
        body.code = catCode;
        body.name = catName;
        delete body.text;
    
        let categoryUid = await fetchRequisition("PUT", url, body);
    
        return categoryUid;
    },    
    
    fetchRequisition: async (fetchMethod, url, body) => {
        const request = await fetch(url, {
            method: fetchMethod,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            console.log("Requisition status:", response.status)
            if (response.status == 200)
            {
                console.log("Update complete");
            }
            else if (response.status == 404)
            {
                console.log("Grupo ou categoria não encontrado.");
            }
            else if (response.status == 422)
            {
                console.log("Categoria já existe.");
            }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
        return await body.uid;
    },
    
    deleteCategory: async (catUid) => {
        //validar se catUid foi informado
        //alinhar se concordam c a criação
        let url = BASE_URL + "/category?uid=" + catUid;
        let body = uidGroupDefinition;
        let categoryUid = await fetchRequisition("DELETE", url, body);
    
        return categoryUid;
    },
    
    createGroup: async (groupName, studentName) => {
        let url = BASE_URL + "/group";
        let body = {
            "name": groupName,
            "students": [
                studentName
            ]
        }
        let data = await serviceAPI.fetchPostRequisition(url, body);
        console.log(data);
        return data;
    },
}