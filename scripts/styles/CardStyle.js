(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap');

        .card-content{
            width: 240px;
            height: 120px;

            padding: 0px;
            margin: 40px;

            background-color: #EBEBEB;
            border: 1px black solid;
            font-family: 'Inter', sans-serif;
            
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            transform: s
        }

        .card-content h2{
            margin: 0px;
            margin-left: 12px;
            margin-bottom: 12px;

            width: parent;

            font-weight: 500;
            font-size: 24px;
            
            flex-wrap: wrap;
        }

        .card-content h3{
            margin-left: 12px;
            margin-bottom: 5px;
            margin-top: 40px;
            
            font-weight: 300;
            font-size: 16px;
        }

        .card-content:has(button){
            max-height: 185px;
            height: 185px;
        }

        .card-content:has(button) h2{
            
            margin-bottom: 12px;
        }

        .card-content:has(button) h3{
            
            margin-top: 12px;
        }

        .card-content button{
            width: 195px;
            height: 35px;

            margin-top: 0px;
            margin-bottom: 12px;

            align-self: center;

            background-color: white;
            border: 1px solid black;
            border-radius: 15px;
        }

        .card-content button:hover{
            background-color: #D4F1F4;
            border: 1px solid #05445E;
        }

    `;
    document.body.appendChild(style);
})();