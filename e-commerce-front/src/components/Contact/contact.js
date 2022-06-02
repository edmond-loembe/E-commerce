import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap';
import './contact.css';



export default function Contact() {


    return (
        <div class="login-box">
            <h2>Nous Contactez</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" />
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="email" name="" required="" />
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required=""/>
                    <label>Écrivez nous !</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    );
}
