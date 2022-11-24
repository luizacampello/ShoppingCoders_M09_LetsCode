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

	createStore: async (store) => {
        let url = serviceAPI.BASE_URL + "/establishment";
        let body = serviceAPI.uidGroupDefinition;
        body.address = store.address;
		body.phone = store.phone;
        body.name = store.name;
		body.postal_code = store.postalCode;
		body.email = store.email;
		body.category = {
			"uid": store.categoryUid
		};
        delete body.text;
		await serviceAPI.fetchRequisition({
			fetchMethod: "POST",
			url: url,
			body: body,
			onSuccess: (data, response) => {
				basePage.notification.create({
					text: "Criou o estabelecimento com sucesso.",
					type: 'success'
				});
				infra.refreshFooter();
			},
			onError: (data, response) => {
				basePage.notification.create({
					text: "Grupo ou categoria não encontrado.",
					type: 'error'
				});
			}
		});

    },

    getStoresList: async () => {
        let url = serviceAPI.BASE_URL + "/establishment/list";
        let body = serviceAPI.uidGroupDefinition;
        body.text = "";
		
        let stores = await serviceAPI.fetchPostRequisition(url, body);

        return stores;
    },

	updateStore: async (store) => {
		console.log(store);
		let url = serviceAPI.BASE_URL + "/establishment";
        let body = serviceAPI.uidGroupDefinition;
		body.uid = store.uid;
        body.address = store.address;
		body.phone = store.phone;
        body.name = store.name;
		body.postal_code = store.postalCode;
		body.email = store.email;
        body.category = {
			"uid": store.categoryUid
		};
        delete body.text;
		console.log(body);
		await serviceAPI.fetchRequisition({
			fetchMethod: "PUT",
			url: url,
			body: body,
			onSuccess: (data, response) => {
				basePage.notification.create({
					text: "Editou o estabelecimento com sucesso.",
					type: 'success'
				});
				infra.refreshFooter();
			},
			onError: (data, response) => {
				basePage.notification.create({
					text: "Grupo, categoria ou estabelecimento não encontrado.",
					type: 'error'
				});
			}
		});

	},

	deleteStore: async (storeUid) => {
		let url = serviceAPI.BASE_URL + "/establishment";
        let body = serviceAPI.uidGroupDefinition;
		body.uid = storeUid;
		await serviceAPI.fetchRequisition({
			fetchMethod: "DELETE",
			url: url,
			body: body,
			onSuccess: (data, response) => {
				basePage.notification.create({
					text: "Deletou a loja com sucesso.",
					type: 'success'
				});
				infra.refreshFooter();
			},
			onError: (data, response) => {
				basePage.notification.create({
					text: "Loja não encontrada.",
					type: 'error'
				});
			}
		});
    },

    createCategory: async (newCategory) => {
        let url = serviceAPI.BASE_URL + "/category";
        let body = serviceAPI.uidGroupDefinition;
        body.code = newCategory.code;
        body.name = newCategory.name;
        delete body.text;
		let exists = false;
		const categories = await serviceAPI.getCategoriesList(); //TODO

		if (categories != null) //TODO
		{
			categories.forEach(category => {
				if (category.name == newCategory.name || category.code == newCategory.code)
				{
					basePage.notification.create({
						text: "Já existe categoria com este NOME ou CÓDIGO.",
						type: 'error'
					});
					exists = true;
				}
			})
		}
		if (!exists) {
			await serviceAPI.fetchRequisition({
				fetchMethod: "POST",
				url: url,
				body: body,
				onSuccess: (data, response) => {
					basePage.notification.create({
						text: "Criou a categoria com sucesso.",
						type: 'success'
					});
				},
				onError: (data, response) => {
					basePage.notification.create({
						text: "Grupo ou categoria não encontrado.",
						type: 'error'
					});
				}
			});
		}
    },

	getCategoriesList: async () => {
        let url = serviceAPI.BASE_URL + "/category/list";
        let body =  serviceAPI.uidGroupDefinition;
        body.text = "";

        const categories = await serviceAPI.fetchPostRequisition(url, body);
        return categories;
    },

    updateCategory: async (upCategory) => {
		//verificar se posso passar a category e pegar aqui os itens separados category.uid e afins //TODO
		//MODIFICANDO O UPDATE CATEGORY

        //validar se code e name são diferentes de vazio, caso contrário abrir notificação na tela
        //validar qual o campo está sendo alterado, buscando o objeto no getlist via uid
        //fazendo o comparativo no currObj e newObj
        //alinhar se concordam c a criação

        let url = serviceAPI.BASE_URL + "/category";
        let body = serviceAPI.uidGroupDefinition;
        body.uid = upCategory.uid;
        body.code = upCategory.code;
        body.name = upCategory.name;
        delete body.text;
		await serviceAPI.fetchRequisition({
			fetchMethod: "PUT",
			url: url,
			body: body,
			onSuccess: (data, response) => {
				basePage.notification.create({
					text: "Editou a categoria com sucesso.",
					type: 'success'
				});
				infra.refreshFooter();
			},
			onError: (data, response) => {
				basePage.notification.create({
					text: "Grupo ou categoria não encontrado.",
					type: 'error'
				});
			}
		});
    },

    deleteCategory: async (catUid) => {
		let url = serviceAPI.BASE_URL + "/category";
        let body = serviceAPI.uidGroupDefinition;
		body.uid = catUid;
		await serviceAPI.fetchRequisition({
			fetchMethod: "DELETE",
			url: url,
			body: body,
			onSuccess: (data, response) => {
				basePage.notification.create({
					text: "Deletou a categoria com sucesso.",
					type: 'success'
				});
				infra.refreshFooter();
			},
			onError: (data, response) => {
				basePage.notification.create({
					text: "Grupo ou categoria não encontrado.",
					type: 'error'
				});
			}
		});
    },

	fetchRequisition: async ({fetchMethod, url, body, onSuccess, onError}) => {
		const request = await fetch(url, {
            method: fetchMethod,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((response) => {
			console.log("Response status:", response.status);
			if (response.ok) {
				if (onSuccess) {
					onSuccess(response.json(), response);
				}
			} else {
				if (onError) {
					onError(response.json(), response);
				}
			}
        })
		.catch((error) => {
          console.error('Error:', error);
        });
		return await []; //TODO
    },

    createGroup: async (groupName, studentName) => { //TODO será que tem que colocar uma opção de fazer isso no site? 
        let url = serviceAPI.BASE_URL + "/group";
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
