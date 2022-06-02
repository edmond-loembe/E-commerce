import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Pagination,
    Navbar,
    NavDropdown,
    Nav,
    Alert,
} from "react-bootstrap";
import "./produits.css";
import React, { useState, useEffect } from "react";
const PAGE_PRODUCT = "products";
const PAGE_CART = "cart";
const PAGE_PANIER = "panier"
export default function Produits() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCT);
    const [searchTerm, setSearchTerm] = useState([]);
    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = cart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };
    const removeQuantity = (product) => {
        let newCart = [...cart];
        let itemInCart = cart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity--;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
        }
        setCart(newCart);
    }
    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => (product !== productToRemove)));
    };
    const clearCart = () => {
        setCart([]);
    }
    const getTotalSum = () => {
        let total = cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
        return total
    };
    const getCartTotal = () => {
        return cart.reduce((sum, { quantity }) => sum + quantity, 0);
    }
    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        /*var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };*/
        fetch("http://127.0.0.1:8000/product" /*, requestOptions*/, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            // .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    const handle = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        setSearchTerm(value)
    };
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div>
                <Navbar className="Nave" collapseOnSelect expand="lg" variant="dark">
                    <Container fluid id="home">
                        <Navbar.Brand className="titre" href="#home">
                            OKIMONO
                        </Navbar.Brand>
                        <Navbar.Brand className="logo" href="#">
                            <img className="img-fluid" src={"logo.png"} />
                        </Navbar.Brand>
                        {/* <Nav.Link><img className="img-fluid" src={'full-moon.png'}/></Nav.Link> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navbar-nav ml-auto">
                                <Nav.Link className="navv" href="/">
                                    Accueil
                                </Nav.Link>
                                <Nav.Link className="navv" href="/">
                                    Nouveautès
                                </Nav.Link>
                                <NavDropdown
                                    className="navv"
                                    title="Produits"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="/produits">
                                        Figurines
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/produits">Textile</NavDropdown.Item>
                                    <NavDropdown.Item href="/produits">
                                        Répliques
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Goodies
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className="navv" href="/univers">
                                    Univers
                                </Nav.Link>
                                <Nav.Link className="navv" href="#">
                                    Contacts
                                </Nav.Link>
                                <Nav.Link className="imgg" href="#">
                                    <img className="img-fluid" src={"compte.png"} />
                                </Nav.Link>
                                <hr />
                                <Nav.Link className="imgg" href="#">
                                    <img
                                        className="img-fluid"
                                        src={"pannier.png"}
                                        onClick={() => navigateTo(PAGE_CART)}
                                    />
                                    ({getCartTotal()})
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container fluid className="cards">
                    <Row>
                        {page === PAGE_PRODUCT && (
                            <>
                                <div className="search">
                                    <input type="text" name="searchbar" className="searchbar" placeholder="Chercher un produit" onChange={handle} />
                                </div>
                                {products.filter((product) => {
                                    return product.name.toLowerCase().includes(searchTerm,);
                                }).map((product) => (
                                    <Col className="coll">
                                        <Card className="card" key={product.id}>
                                            <Card.Img variant="top" src={product.photo} />
                                            <Card.Body>
                                                <Card.Title>{product.name} </Card.Title>
                                                <Card.Text>
                                                    {product.description}
                                                    <p>
                                                        Prix:{" "}
                                                        <b>
                                                            <i>{product.price}€</i>
                                                        </b>
                                                    </p>
                                                </Card.Text>
                                                <Button
                                                    variant="primary"
                                                    onClick={() => addToCart(product)}
                                                >
                                                    Add to cart
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </>
                        )}
                        {page === PAGE_CART && (
                            <>
                                <h2 className="titreCommande">MES COMMANDES</h2>
                                {cart.map((product) => (
                                    <Col className="coll">
                                        <Card className="card" key={product.id}>
                                            <Card.Img variant="top" src={product.photo} />
                                            <Card.Body>
                                                <Card.Title>{product.name} </Card.Title>
                                                <Card.Text>
                                                    {product.description}
                                                    <p>Quantité : <i>{product.quantity}</i></p>
                                                    <p>
                                                        Prix:{" "}
                                                        <b>
                                                            <i>{product.price}€</i>
                                                        </b>
                                                    </p>
                                                </Card.Text>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => removeQuantity(product)}
                                                >
                                                    Supprimer une Quantité
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => removeFromCart(product)}
                                                >
                                                    Supprimer
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                                <div>
                                    <h3>
                                        Total : {getTotalSum()}€
                                    </h3>
                                </div>
                                <button className="buttonRetour" onClick={() => navigateTo(PAGE_PRODUCT)}>
                                    Retourner aux produits
                                </button>
                                {cart.length > 0 && (
                                    <Button className="buttonSuprime"
                                        variant="danger"
                                        onClick={() => clearCart()}
                                    >
                                        tous supprimer
                                    </Button>
                                )}
                                <button onClick={() => navigateTo(PAGE_PANIER)} className="buttonPaiment">
                                    Passer au paiment
                                </button>
                            </>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}