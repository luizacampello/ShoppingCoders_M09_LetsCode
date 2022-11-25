(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    footer {
    width: 100%;
    min-height: 10vh;
    max-height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #189AB4;
    font-family: 'Inter', sans-serif;
    }
    #footer-title {
      color: azure;
      font-size: 22px;
      font-weight: 700;
      padding-top: 2vh;
      margin: 0;
    }
    #footer-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    
      list-style-type: none;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding-left: 0;
      margin: 5px 30px;
      color: azure;
      box-sizing: border-box;
        
      overflow: hidden;
      height: 100%;
      margin-bottom: 10px;
    
      position: relative;
    }
    .list-item {
      height: fit-content;
      box-sizing: border-box;
      padding: 0 10px;
    }

	.list-item:hover {
		color: yellow;
		}

    .pageHeight{
        position: fixed;
        bottom: 0;
    }
    `;
    document.body.appendChild(style);
})();

window.addEventListener("click", () => {
    footerRePositioning();
});

function footerRePositioning() {
    const bodyHeight = document.body.clientHeight;
        const footer = document.getElementById('footer');
        if(bodyHeight < 950){
            footer.classList.add('pageHeight');
        } else {
            footer.classList.remove('pageHeight');
        }
} 

