import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, } from 'react-bootstrap';
import './partenaire.css';



export default function partenaire() {


    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="partenaire1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="partenaire2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="partenaire3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="partenaire4.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

