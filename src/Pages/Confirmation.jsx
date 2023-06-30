import styles from "../styles/confirmation.module.scss"
import confirmation from "../images/confirmation.png"

export default function Confirmation() {
    return(
        <div className={styles.confirmation_message}> 
        <p className = {styles.thanks}>Merci !</p>
        <p>Votre message a été envoyé avec succès. </p>
            <p>Je vous répondrai dans les plus brefs délais. </p> 
        <img src ={confirmation} alt ="dessin d'ecran d'odinateur avec boite aux lettres"/>
        </div>
    )
}