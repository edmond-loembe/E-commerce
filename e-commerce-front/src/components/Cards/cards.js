import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './cards.css';




export default function cards() {


    return (

        <Container fluid className="cards">
            <Row>
                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Mihawks.jpg" />
                        <Card.Body>
                            <Card.Title>One Piece</Card.Title>
                            <Card.Text>
                            Mihawk 
                            <p><b><i> Prix: 39,99€</i></b></p>

                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Zoro.jpg" />
                        <Card.Body>
                            <Card.Title>One Piece</Card.Title>
                            <Card.Text>
                            Zoro 
                            <p><b><i> Prix: 59,99€</i></b></p>

                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Ace.png" />
                        <Card.Body>
                            <Card.Title>One Piece</Card.Title>
                            <Card.Text>
                            Ace 
                            <p><b><i> Prix: 49,99€</i></b></p>

                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Sanji.png" />
                        <Card.Body>
                            <Card.Title>One Piece</Card.Title>
                            <Card.Text>
                            Sanji
                            <p><b><i> Prix: 19,99€</i></b></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Luffy.jpg" />
                        <Card.Body>
                            <Card.Title>One Piece</Card.Title>
                            <Card.Text>
                            Luffy One Piece
                            <p><b><i> Prix: 49,99€</i></b></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Vegeta.png" />
                        <Card.Body>
                            <Card.Title>Dragon Ball Z</Card.Title>
                            <Card.Text>
                            Super Saiyan Vegeta Grandista Manga Dimension
                            <p><b><i> Prix: 29,99€</i></b></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Veigeto.jpg" />
                        <Card.Body>
                            <Card.Title>Dragon Ball Super</Card.Title>
                            <Card.Text>
                            Super Saiyan God Vegito
                            <p><b><i> Prix: 39,99€</i></b></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="gogeta.jpg" />
                        <Card.Body>
                            <Card.Title>Dragon Ball GT</Card.Title>
                            <Card.Text>
                            Super Saiyan 4 Gogeta
                            <p><b><i> Prix: 59,99€</i></b></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="Goku.jpg" />
                        <Card.Body>
                            <Card.Title>Son Goku Ultra Instinct</Card.Title>
                            <Card.Text>
                            Naruto
                            <p><b><i> Prix: 29,99€</i></b></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="coll">
                    <Card className="card">
                        <Card.Img variant="top" src="GogetaS.jpg" />
                        <Card.Body>
                            <Card.Title>Dragon Ball</Card.Title>
                            <Card.Text>
                            Gogeta SSj
                            <p><b><i> Prix: 49,99€</i></b></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
