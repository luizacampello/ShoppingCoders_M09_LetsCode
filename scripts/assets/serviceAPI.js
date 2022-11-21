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
        let url = BASE_URL + "/category/list";
        let body =  uidGroupDefinition;
        body.text = keyword;
    
        const categories = await serviceAPI.fetchPostRequisition(url, body);
        return categories;
    },
    
    getStoresList: async (keyWord, uidCategory) => {
        let url = BASE_URL + "/establishment/list";
        let body = uidGroupDefinition;
        body.text = keyWord;
    
        if (uidCategory) {
            body.category = {"uid": uidCategory};
        }
    
        let stores = await serviceAPI.fetchPostRequisition(url, body);
    
        return stores;
    },


}