import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './login.css'


export default function Login() {
    return (

        <div class="mainL">
            <p class="sign" href="/" align="center">CONNECTEZ-VOUS</p>
            <form class="form1">
                <input class="un" type="text" align="center" placeholder="Username" />
                <input class="pass" type="password" align="center" placeholder="Password" />
                <a class="submitL" align="center">Connexion</a>
                <p class="forgot" align="center"><a href="#">Mot de passe oublié ?</a></p>
            </form>
            <a class="cr" align="center" href="/register">PAS DE COMPTE ? CRÉEZ EN-UN</a>

        </div>
    )
}
