import styles from "../styles/error.module.scss";
import error from "../images/error404.png";
import { Link} from "react-router-dom"

export default function Error(){
    return(
        <div className={styles.error_container}>
            <h1>Erreur 404</h1>
            <span>Oups...</span> <Link to = "/" className = {styles.home_link}>Retourner à l'accueil</Link>
            <img src = {error} alt ="ordinateur qui affiche un plot de travaux"/>
            
        </div>
    )
}