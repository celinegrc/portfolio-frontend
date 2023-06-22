import styles from "../styles/policy.module.scss"

export default function Policy(){
    return(

        <main className={styles.policy_container}>
           <h1>Politique de confidentialité</h1>

                <h2>1. Collecte des données personnelles sur le site</h2>

                <h3>Données collectées automatiquement</h3>

                <p>Je ne collecte aucune donnée automatiquement sur le site.</p>

                <h3>Données recueillies de façon non automatique</h3>

                <p>Je collecte les données suivantes lorsque vous effectuez certaines fonctions sur le site :</p>

                <ul>
                    <li>Prénom et/ou nom</li>
                    <li>Adresse email</li>
                </ul>

                <p>Ces données peuvent être recueillies lors de la soumission du formulaire de contact.</p>

                <h2>2. Utilisation des données personnelles</h2>

                <p>Les données personnelles traitées peuvent inclure votre nom, prénom, adresse électronique, message. Je peux vous demander de me communiquer des données personnelles dans les cas suivants :</p>

                <ul>
                    <li>Lorsque vous souhaitez me faire part de vos commentaires ou poser des questions.</li>
                    <li>Lorsque vous souhaitez me contacter.</li>
                </ul>

                <p>Je m'engage à n'utiliser vos données personnelles que dans le but spécifié sur le formulaire et accepté par vous. Ces données personnelles ne peuvent en aucun cas être transmises ou cédées à des tiers sans votre consentement explicite, à moins d'une mention contraire sur le formulaire.</p>

                <h2>3. Destinataire des données personnelles</h2>

                <p>Les données personnelles collectées sur mon Site me sont entièrement destinées.</p>

                <p>Cependant, pour assurer le transfert sécurisé des e-mails générés par votre formulaire de contact, j'utilise les services de Nodemailer et Mailgun. Ces tiers agissent en tant qu'intermédiaires et peuvent accéder à vos données personnelles uniquement dans le but de faciliter la transmission des e-mails vers ma boîte de réception.</p>

                <p>Veuillez noter que Nodemailer et Mailgun sont des services réputés pour leur engagement en matière de confidentialité et de sécurité des données.</p>

                <h2>4. Durée de conservation</h2>

                <p>Je conserverai vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux exigences légales en vigueur.</p>

                <h2>5. Vos droits en tant qu’utilisateur</h2>

                <p>En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes concernées :</p>

                <ol>
                    <li>droit d’accès</li>
                    <li>droit de rectification</li>
                    <li>droit à l’effacement</li>
                    <li>droit de restreindre le traitement</li>
                    <li>droit à la portabilité des données</li>
                    <li>droit d'objection</li>
                </ol>

                <p>Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art 12-23) du RGPD.</p>

                <h2>6. Comment modifier, supprimer ou contester les données recueillies</h2>

                <p>Pour exercer ces droits, vous pouvez me contacter par e-mail à l'adresse <a href="mailto:celinegourc@outlook.fr">celinegourc@outlook.fr</a> ou par courrier à l'adresse suivante :</p>

                <address>
                Céline Gourc
                1 route du pont
                50600 Virey
                </address>

                <p>Je vous remercie de bien vouloir préciser dans votre demande votre nom, prénom, adresse e-mail et l'objet de votre demande. Je m'efforcerai de répondre à votre demande dans les meilleurs délais et conformément aux réglementations en vigueur.</p>

                <p>Modifications</p>

                <p>Cette politique de confidentialité peut être modifiée à l’occasion afin de maintenir la conformité avec la loi et de tenir compte de tout changement à notre processus de collecte de données. Je recommande à mes utilisateurs de vérifier notre politique de temps à autre pour s’assurer qu’ils soient informés de toute mise à jour.</p>

                <p>Contact</p>

                <p>Si vous avez des questions à nous poser, n’hésitez pas à communiquer avec nous en utilisant les coordonnées suivantes :</p>

                <adress>
                    Téléphone : 06 72 55 51 23
                    E-mail : <a href="mailto:celinegourc@outlook.fr">celinegourc@outlook.fr</a>
                    Adresse : 1 route du pont, 50600 Virey
                </adress>
        
        </main>
    )
}