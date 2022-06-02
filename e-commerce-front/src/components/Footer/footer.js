import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';
import "./footer.css";


export default function footer() {

    return (

        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="#"><i className=""><img className="img-fluid" src={'instagram.png'} /></i></a>
                    <a href="#"><i className=""><img className="img-fluid" src={'facebook.png'} /></i></a>
                    <a href="#"><i className=""><img className="img-fluid" src={'twitter.png'} /></i></a>
                    <a href="#"><i className=""><img className="img-fluid" src={'tik-tok.png'} /></i></a>
                    <a href="#"><i className=""><img className="img-fluid" src={'snapchat.png'} /></i></a>

                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Avis</a></li>
                    <li className="list-inline-item"><a href="#">Contacts</a></li>
                </ul>
                <br></br>
                <a className="copyright">OKIMONO © 2021</a>
            </footer>
        </div>
    );
}