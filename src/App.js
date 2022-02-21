import {useState, useCallback, useEffect, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const countTotal = (num) => {
    console.log('Counting...');
    return num + 10;
}

const Slider = () => {

    const [slide, setSlider] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(() => {
            console.log('fetching');
            return [
                'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
                'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
            ]}, [])

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

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(() => {
        return ({
            color: slide > 4 ? 'red' : 'black'
        })
    }, [slide])

    useEffect(() => {
        console.log('style')
    }, [style]);

    return (
        <Container>
            <div className="slider w-50 m-auto">

                <Slide getSomeImages={getSomeImages} />

                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="text-center mt-5" style={style}>Total slides: {total}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}

function Slide ({getSomeImages}) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, index) =>  <img key={index} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}


function App() {
    return (
        <Slider/>
    );
}

export default App;
