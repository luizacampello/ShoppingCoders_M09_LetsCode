(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    .searchContainer {
        width: 100vw;
        margin-top: 2rem;
        margin-bottom: 2rem;
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

      #titlePage {
        text-align: center;
        margin-bottom: 2vh;
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
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
        width: 100%;
        height: 2rem;
        margin-left: 2rem;
        padding-left: 20px;
        border-radius: 20px;
      }
      
      .searchKeyWordHide,
      .searchCategoryHide {
        display: none;
      }
      
      #iconeBusca {
        cursor: pointer;
        margin-left: 1vw;
      }
      @media (max-width: 1155px){

        .searchBar{
          width: 85%;
          margin: auto;
        }
      
        #typeSearch{
          margin-left: 2vw;
          font-size: 0.7rem;
        }
      
        .searchKeyWord{
          margin-left: 2vw;
        }
      
        .searchCategory{
          margin-left: 2vw;
        }
      
        #iconeBusca {
          cursor: pointer;
          font-size: 2rem;
          margin-right: 2vw;
      }
      }
    `;
    document.body.appendChild(style);
})();