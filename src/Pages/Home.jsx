import styles from "../styles/home.module.scss";
import TypeWriter from "../Components/TypeWriter";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";



export default function Home(){
    return(
        <div className = {styles.home_container}>
            <main className={styles.content_container}>
                <h1>Bienvenue sur mon portfolio<span className={styles.blink_cursor}>|</span></h1>
                <div className = {styles.intro_container}>
                    <div className = {styles.intro_container_text}>
                        <h2 className={styles.h2_home}>Je suis Céline,<br/> développeuse web junior.</h2>
                        <Link to="/portfolio" className={styles.button}><TypeWriter text = " Voir mon portfolio " /></Link>
                    </div>
                    <div className = {styles.image_container}>
                        <img src = './ordi_home.png' alt ="dessin d'un ordinateur portable" width="300px" height="336px"/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

