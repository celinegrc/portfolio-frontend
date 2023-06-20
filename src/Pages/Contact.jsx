import ContactForm from "../Components/ContactForm";
import styles from "../styles/contact.module.scss";

export default function Contact(){
    return(
        <div>
            <div className={styles.form_container}>
            <h1>Contact ✉️</h1>
            <p>Vous pouvez me contacter via le formulaire ci-dessous ou directement par mail à <a href ="mailto:celinegourc@outlook.fr">celinegourc@outlook.fr</a> </p>
                <ContactForm />
            </div>
        </div>

    )
}