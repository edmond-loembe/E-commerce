import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './introduction.css';



export default function introduction() {


    return (

        <Container fluid className="introduction">
            <Row>
                <Col>
                    <h1 className="titreIntro">FIGURINES DE COLLECTION</h1>
                    <div className="paragraphe">
                        <p>
                            Vous êtes un ultra fan de dessins animés, figurines mangas et comics en tout genre ? L'univers des avengers, des gardiens de la galaxie n'a plus de secret pour vous ?
                            Vous avez été biberonné au dbz dès votre plus tendre enfance, vous avez lu frénétiquement les mangas de naruto et enchaîné les animés ?
                            Vous êtes au bon endroit ! FIGURINES-MULTIVERSE est le site de référence dans la vente de figurines sur internet.
                            Venez découvrir notre série de figurines d'une excellente facture, dans tous les univers que vous affectionnez !
                            Vous retrouverez des statuette super-héros, collector, figurine personnage ou encore en édition limitée pour agrandir votre collection.
                            Pour retrouver tous les héros de vos comics et dessins animés dans votre salon, des statuettes de personnages sont vraiment un objet déco sympa.
                            Que ce soit pour les collectionneurs qui veulent terminer une série de figurines ou pour les fans qui veulent une figurine de leurs héros préférés, nous disposons d'un large choix de statuettes de tous les mondes imaginaires.
                            Découvrez : Nos figurines Naruto, Figurines Dragon ball z, Figurines One piece, Figurines Manga.
                        </p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

