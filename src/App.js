import {Component} from "react";
import './App.css';


// Functional component (in the React beginning - they couldn't have a state)

// function WhoAmI1({name, surname, link}) {
//     return(
//         <div>
//             <h1>My name is {name}, surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
// }

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27
        }
    }

    incrementYear = () => {
        this.setState( state => {
            return {years: state.years + 1}
        })
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.incrementYear}>+++</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}


function App() {
  return (
    <div className="App">
        <WhoAmI name="Vlad" surname="Korobko" link="facebook.com"/>
        <WhoAmI name="Roma" surname="Korobko" link="instagram.com"/>
    </div>
  );
}

export default App;
