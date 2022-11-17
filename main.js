(()=>{
    addCSSFile();
    for (const file of ['assets/CardFactory.js', 'styles/CardStyle.js']) {
        const script = document.createElement('script');
        script.setAttribute('src', `scripts/${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener('load',() =>{
        const main = document.createElement('main');
        document.body.appendChild(main);

        main.appendChild(CardFactory.CardStore({
            category: 'Eletrônicos',
            name: 'AppleStore'
        }));
        main.appendChild(CardFactory.CardCategory({
            Id: 3,
            Name: 'Eletrônicos-Eletrodoasdasdasdasdasd',
            onClickEdit: () =>{window.alert('Click 1')},
            onClickStores: () =>{window.alert('Click 2')}
        }))
    });
})();

function addCSSFile () {
    const cssLink = document.createElement('link');
   
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'style.css';
  
    document.head.appendChild(cssLink);
}