import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './navbar.css';



export default function navbar() {
    return (
        <Navbar className="Nave" collapseOnSelect expand="lg" variant="dark">
            <Container fluid id="home">
                <Navbar.Brand className="titre" href="#home">OKIMONO</Navbar.Brand>
                <Navbar.Brand className="logo" href="#"><img className="img-fluid" src={'logo.png'} /></Navbar.Brand>

                {/* <Nav.Link><img className="img-fluid" src={'full-moon.png'}/></Nav.Link> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link className="navv" href="/">Accueil</Nav.Link>
                        <Nav.Link className="navv" href="/nouveaute">Nouveautès</Nav.Link>
                        <NavDropdown className="navv" title="Produits" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/produits">Figurines</NavDropdown.Item>
                            <NavDropdown.Item href="/produits">Textile</NavDropdown.Item>
                            <NavDropdown.Item href="/produits">Posters</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/produits">Goodies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="navv" href="/univers">Univers</Nav.Link>                     
                        <Nav.Link className="navv" href="/contact">Contacts</Nav.Link>
                        <Nav.Link className="imgg" href="/login"><img className="img-fluid" src={'compte.png'} /></Nav.Link>
                        <Nav.Link className="imgg" href="/panier"><img className="img-fluid" src={'pannier.png'} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}