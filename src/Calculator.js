import {useState} from "react";
import './Calculator.css';

const Calculator = () => {
    const data = [
        {
            name: "uah",
            course: 1
        },
        {
            name: "usd",
            course: 28.3000
        },
        {
            name: "eur",
            course: 32.1969
        },
        {
            name: "rub",
            course: 0.3740
        }
    ]
    const [amount, changeAmount] = useState(1);

    function showCourse(name) {
        let  valuta = data.filter(elem => elem.name === name)
        changeAmount(valuta[0].course);
    }


    return (
        <div className="card">
            <div className="field">
                <div className="screen">{amount}</div>

                <div className="buttons__wrapper">
                    <button onClick={() => showCourse("uah")}>UAH</button>
                    <button onClick={() => showCourse("usd")}>USD</button>
                    <button onClick={() => showCourse("eur")}>EUR</button>
                    <button onClick={() => showCourse("rub")}>RUB</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;