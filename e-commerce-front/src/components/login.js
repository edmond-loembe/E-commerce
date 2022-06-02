import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './assets/login.css'


export default function Login(){
    return(

        <div class="main">
    <p class="sign" align="center">Connexion</p>
    <form class="form1">
      <input class="un" type="text" align="center" placeholder="Username"/>
      <input class="pass" type="password" align="center" placeholder="Password"/>
      <a class="submit" align="center">Se connecter</a>
      <p class="forgot" align="center"><a href="#">Mot de passe oublié?</a></p>
     </form>   
    </div>
    )
}

