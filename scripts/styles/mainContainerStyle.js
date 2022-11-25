(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    
    @import URL("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
    
    .mainContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      
      .innerContainer {
        display: none;
        margin: 2vw;
      }
      
      .activeInnerContainer {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
      }
    `;
    document.body.appendChild(style);
})();