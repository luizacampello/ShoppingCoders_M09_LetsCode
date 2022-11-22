window.popUpFactory = {
	newPopUpContainer: (storeObject) => {
		const popUpContainer = document.getElementById("popUpContainer");
	
		const infoContainer = document.createElement("div");
		infoContainer.setAttribute("id", "infoContainer");
	
		const formContainer = document.createElement("div");
		formContainer.setAttribute("id", "formContainer");
	
		popUpContainer.appendChild(infoContainer);
		popUpContainer.appendChild(formContainer);
		
		formPage(storeObject)
		infoPage(storeObject)
	},

}
