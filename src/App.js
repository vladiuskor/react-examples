import {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


const Slider = (props) => {

    const [slide, setSlider ] = useState(0);
    const [autoplay, setAutoplay] = useState(false);


    //Example with complex state. Less readable/ Not recommended
    // const [state, setState] = useState({slide: 0, autoplay: false});
    // function changeSlide(i) {
    //     setState(state => ({...state, slide: state.slide + i}))
    // }
    // function toggleAutoplay() {
    //     setState(state => ({...state, autoplay: !state.autoplay }));
    // }


    // Without callback
    function changeSlide(i) {
        setSlider(slide + i)
    }

    // With callback
    // function changeSlide(i) {
    //     setSlider(slide => slide + i)
    // }

    function toggleAutoplay() {
        setAutoplay(!autoplay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;
