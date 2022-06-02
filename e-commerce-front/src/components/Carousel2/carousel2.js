import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, } from 'react-bootstrap';



export default function carousel2() {


    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="BanniereCarousel1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="BanniereCarousel2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="BanniereCarousel3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="BanniereCarousel4.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="BanniereCarousel5.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

