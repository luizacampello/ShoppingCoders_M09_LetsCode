(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    .mainContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        /* margin-top: 10vh; */
        padding-top: 10vh;
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

