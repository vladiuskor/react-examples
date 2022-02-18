import {useState, useEffect} from "react";

import './App.css';

const App = (props) => {
    const [usd, changeUsd] = useState(0);
    const [eur, changeEur] = useState(0);
    const [rub, changeRub] = useState(0);


    useEffect(() => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => data.json())
            .then(data => {
                data.forEach(item => {
                    if(item.ccy === 'USD') {
                        changeUsd(item)
                        return;
                    }

                    if(item.ccy === 'EUR'){
                        changeEur(item);
                        return;
                    }

                    if(item.ccy === 'RUR'){
                        changeRub(item);
                        return;
                    }
                })
            })
            console.log('request')
    }
    , [])


    return (
        <div className="app">
            <div className='card'>
                <p>{`USD ---- Sale: ${usd.sale} ---- Buy: ${usd.buy}`}</p>
                <p>{`EUR ---- Sale: ${eur.sale} ---- Buy: ${eur.buy}`}</p>
                <p>{`RUB ---- Sale: ${rub.sale} ---- Buy: ${rub.buy}`}</p>
            </div>
        </div>
    )
}

export default App;
