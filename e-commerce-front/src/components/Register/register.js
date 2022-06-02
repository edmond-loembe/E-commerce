import { useState } from "react";
import "./register.css";

export default function Register() {
    const [gender, setGender] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [telephone, setTelephone] = useState();

    function sendData() {
        // e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                gender,
                firstName,
                lastName,
                email,
                password,
                telephone,
            }),
        };
        fetch("http://127.0.0.1:8000/register", requestOptions).then((response) =>
            response.json()
        );
    }

    return (
        <div className="main">
            <p className="sign" align="center">
                CRÉEZ VOTRE COMPTE
            </p>
            <form className="form1" action="/login">

                <div class="Genres">
                    <h6>Genre:</h6>
                    <div class="genres">
                        <div >
                            <input
                                className="genre"
                                type="radio"
                                name="gender"
                                value="Mme"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Mme
                        </div>
                        <div>
                            <input
                                className="genre"
                                type="radio"
                                name="gender"
                                value="M"
                                onChange={(e) => setGender(e.target.value)}
                            />{" "}
                            M

                        </div>
                    </div>
                </div>

                <input
                    className="un"
                    type="text"
                    align="center"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Prénom"
                />
                <input
                    className="un"
                    type="text"
                    align="center"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Nom"
                />
                <input
                    className="un"
                    type="tel"
                    align="center"
                    placeholder="Télephone"
                    name="tel"
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Télephone"
                />
                <input
                    className="un"
                    type="email"
                    align="center"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <input
                    className="pass"
                    type="password"
                    align="center"
                    name="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button onClick={sendData} class="submit"> ENREGISTRER</button>
                <br></br>

                <p className="bottom"></p>
            </form>
            <a className="co" align="center" href="/login">
                VOUS AVEZ DÉJA UN COMPTE ? CONNECTEZ-VOUS !
            </a>
        </div>
    );
}