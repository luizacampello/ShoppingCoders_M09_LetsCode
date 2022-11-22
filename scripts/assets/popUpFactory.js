window.popUpFactory = {
    newPopUpContainer: (storeObject) => {
		const popUpContainer = document.getElementById("popUpContainer");
		popUpContainer.appendChild(infoPage(storeObject));
		popUpContainer.appendChild(formPage(storeObject));
	},


}
