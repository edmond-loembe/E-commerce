import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './nouveaute.css';



export default function nouveaute() {


    return (

        <Container fluid className="nouveaute">
            <Row>
                <Col>
                    <h1 data-text="Nos Nouveautés" className="titreNouveaute"><span>Nos Nouveautés</span></h1>
                </Col>
            </Row>
        </Container>
    );
}

