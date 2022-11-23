(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap');

* {
  margin: 0;
  padding: 0;
}

header {
  position: sticky;
  width: 100vw;
  height: 20vh;
  
  background-color: #189AB4;

  display: flex;
  align-items: center;
}

header nav {
  width: 100vw;

  margin: 4rem;

  display: flex;
  justify-content: space-between;

  font-family: 'Inter', sans-serif;
  color: white;
}

#linkStoreContainer, #linkCategoryContainer{
  font-size: 36px;
}

.logo {
  cursor: pointer;
  font-size: 48px;
}

nav .menu {
  display: flex;
  width: 30%;
  justify-content: space-evenly;
}

.lojas,
.categorias {
  width: auto;
  align-items: center;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;

}

.lojas ul,
.categorias ul {
  display: none;
  padding: 0.5rem;
  border-radius: 5px;
}
.lojas ul li,
.categorias ul li {
  list-style: none;
  margin-top: 0.7rem;
  margin-bottom: 0.4rem;
  cursor: pointer;
}

.lojas ul li:hover,
.categorias ul li:hover {
  font-weight: bold;
}

.lojas:hover,
.categorias:hover {
  font-size: 1rem;
}

.lojas:hover > ul,
.categorias:hover > ul {
  display: table;
  position: absolute;
  
  background-color: #05445E;
}

#iconeMenu{
  display: none;
  cursor: pointer;
}

@media (max-width: 880px) {
  #iconeMenu{
    display: block;
    align-self: flex-end;
  }

  header{
    position: relative;
  }

  header nav{
    flex-direction: column;
    align-items: center;
  }

  .logo{
    align-self: center;
    text-align: center;
  }

  nav .menu{
    display: none;
  }

  nav .menuHide{
    display: none;
  }

  nav .menuShow{
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    background-color: cadetblue;
    align-items: center;
    border-radius: 10px;
  }


  .lojas,
  .categorias {
    width: 90%;
  }
}

@media (max-width: 700px){
  .logo {
    font-size: 36px;
  }
}
    `;
    document.body.appendChild(style);
})();