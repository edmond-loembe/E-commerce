import { render } from 'react-dom';
import react from 'react';
import "./univers.css";


export default function Univers() {
console.log("fffffffff");
    return (

        <div className="backgroundUnivers">
            <h1><i><b> TOUS LES UNIVERS DONT VOUS REVEZ </b></i></h1>
            <p>Vous êtes un ultra fan de dessins animés, figurines mangas et comics en tout genre ?
                    L'univers des avengers, des gardiens de la galaxie n'a plus de secret pour vous ?
                    Vous avez été biberonné au dbz dès votre plus tendre enfance, vous avez lu frénétiquement les mangas de naruto et enchaîné les animés ?
                    Vous êtes au bon endroit ! FIGURINES-MULTIVERSE est le site de référence dans la vente de figurines sur internet. 2
                    Venez découvrir notre série de figurines d'une excellente facture, dans tous les univers que vous affectionnez !
                    Vous retrouverez des statuette super-héros, collector, figurine personnage ou encore en édition limitée pour agrandir votre collection. 
                    Pour retrouver tous les héros de vos comics et dessins animés dans votre salon, des statuettes de personnages sont vraiment un objet déco sympa. 
                    Que ce soit pour les collectionneurs qui veulent terminer une série de figurines ou pour les fans qui veulent une figurine de leurs héros préférés, nous disposons d'un large choix de statuettes de tous les mondes imaginaires. 
                    Découvrez : Nos figurines Naruto, Figurines Dragon ball z, Figurines One piece, Figurines Manga.</p>
            <div className="button-wrapper">

                <a className="buttonUnivers background-button" href="/produits" title="MANGAS"></a>
            </div>
            <div className="button-wrapper">
                <a className="buttonUnivers background-button" href="/produits" title="SUPER HÉROS"></a>
            </div>
            <div className="button-wrapper">
                <a className="buttonUnivers background-button" href="/produits" title="CINÉMA"></a>
            </div>
            <div className="button-wrapper">
                <a className="buttonUnivers background-button" href="/produits" title="JEUX VIDÉOS"></a>
            </div>
            <div className="button-wrapper">
                <a className="buttonUnivers background-button" href="/produits" title="SÉRIE TV"></a>
            </div>
            <div className="button-wrapper">
                <a className="buttonUnivers background-button" href="/produits" title="DISNEY"></a>
            </div>
            <div className="button-wrapper">
                <a className="buttonUnivers background-button" href="/produits" title="SPORT"></a>
            </div>
            <div className="button-wrapper">
                <a className="buttonUnivers background-button" href="/produits" title="AUTRES"></a>
            </div>
        </div>
    );
}