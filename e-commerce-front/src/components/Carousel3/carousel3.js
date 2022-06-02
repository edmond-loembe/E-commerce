import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, } from 'react-bootstrap';



export default function carousel3() {


    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="bannierecarousel1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="bannierecarousel2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="bannierecarousel3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="bannierecarousel4.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="bannierecarousel5.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

