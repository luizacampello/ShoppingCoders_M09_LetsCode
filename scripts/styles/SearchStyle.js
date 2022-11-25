(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    .searchContainer {
        width: 100vw;
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
      
      .searchBar {
        background-color: rgba(128, 128, 128, 0.349);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60vw;
        margin: auto;
        border-radius: 30px;
      }
      .searchForm {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 92%;
      }
      
      #typeSearch {
        width: 20%;
        display: block;
        height: 2rem;
        align-self: flex-start;
        
      }
      
      .searchCategory {
        display: flex;
        width: 60%;
        height: 2rem;
        margin-left: 2rem;
        border-radius: 20px;
      }
      
      .searchKeyWord {
        display: flex;
        width: 60%;
        height: 2rem;
        margin-left: 2rem;
        border-radius: 20px;
      }
      
      .searchKeyWordHide,
      .searchCategoryHide {
        display: none;
      }
      
      #iconeBusca {
        cursor: pointer;
      }
    `;
    document.body.appendChild(style);
})();

