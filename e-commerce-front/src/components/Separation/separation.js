import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './separation.css';



export default function separation() {


    return (

        <Container fluid className="separation">
            <Row>
                <Col>
                    <h1 className="titreSeparation">NOS DERNIÈRES ARRIVAGES</h1>
                </Col>
            </Row>
        </Container>
    );
}
