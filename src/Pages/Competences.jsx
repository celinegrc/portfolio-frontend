import styles from "../styles/competence.module.scss";
import { useState } from "react";
import technoList from "../datas/technoList.json";
import toolsList from "../datas/toolsList.json";
import arrow from "../images/arrow_orange.png"


export default function Competences(){

    const [isOpenIntro, setIsOpenIntro] = useState(false)
    const [isOpenFormation, setIsOpenFormation] = useState(false)

    const handleClickIntro = ()=>{
        setIsOpenIntro(!isOpenIntro)
    }

    const handleClickFormation = ()=>{
        setIsOpenFormation(!isOpenFormation)
    }

    return(
        
        <div className={styles.competence_page_container}>
            <section className={styles.presentation_container}>
                <div onClick={handleClickIntro} className = {styles.presentation_title}>
                    <h2  className = {styles.h2_competence}>Qui suis-je <span className ={styles.orange_span}> ?</span></h2>
                    <img src ={arrow} alt ="fleche" className={styles.arrow}/>
                </div>
                
                <div className={isOpenIntro ? `${styles.presentation} ${styles.active}` : styles.presentation}>
                    Après plusieurs années d'expérience en tant que professeur des écoles, 
                    j'ai choisi de prendre un virage à 180 degrés et de me reconvertir dans 
                    le développement web.<br/>
                    Cette décision s'est présentée comme une evidence, après avoir découvert ce domaine passionant il y a 3 ans. Aujourd'hui, 
                    j'ai l'opportunité de me consacrer pleinement à cette nouvelle carrière.<br/>

                    Je suis enthousiaste à l'idée de mettre mes compétences et ma passion pour le développement 
                    web au service de nouveaux projets. Je suis ouverte à de nouvelles opportunités 
                    et je serais ravie de discuter de collaborations potentielles. 
                    N'hésitez pas à me contacter 
                    pour en savoir plus sur mon parcours et mes projets.              
                </div>
            </section>

            <h2  className = {styles.h2_competence}>Mes technos</h2>
            
            <div className={styles.competence_great_container}>
                {technoList.map(({id, cover, title}) => ( 
                    <li key={id} > 
                        <div className={styles.competence_container}>
                                <div className={styles.logo_container}>
                                    <img src = {cover} alt=''/>
                                </div>
                                <p className={styles.techno}>{title}</p>
                        </div>
                    </li>  
                ))}              
            </div> 

            <h2  className = {styles.h2_competence}>Mes outils</h2>
            
            <div className={styles.competence_great_container}>
                {toolsList.map(({id, cover, title}) => ( 
                    <li key={id} > 
                        <div className={styles.competence_container}>
                                <div className={styles.logo_container}>
                                    <img src = {cover} alt=''/>
                                </div>
                                <p className={styles.techno}>{title}</p>
                        </div>
                    </li>  
                ))} 
            </div>

            <h2 className = {styles.h2_competence}>Ma formation</h2>
            
            <div className={styles.formation_container}>
                <h3 className={styles.formation_title}> Formation de développeur Web chez Openclassrooms </h3>
                <div onClick={handleClickFormation}>
                    <p>Voir les compétences acquises</p>
                    <img src = {arrow} alt="fleche"  />
                </div>
                <ul  className={isOpenFormation ? `${styles.oc_list} ${styles.active}` : styles.oc_list}>
                    <li className={styles.competence_list}>Intégrer du contenu conformément à une maquette avec HTML et CSS</li>
                    <li className={styles.competence_list}>Implémenter une interface responsive avec HTML et CSS</li>
                    <li className={styles.competence_list}>Gérer les événements utilisateurs avec JavaScript</li>
                    <li className={styles.competence_list}>Manipuler les éléments du DOM avec JavaScript</li>
                    <li className={styles.competence_list}>Récupérer les données utilisateurs dans le JavaScript via des formulaires</li>
                    <li className={styles.competence_list}>Développer des éléments de l'interface d'un site web grâce à des composants React</li>
                    <li className={styles.competence_list}>Configurer la navigation entre les pages de l'application avec React Router</li>
                    <li className={styles.competence_list}>Mettre en œuvre des opérations CRUD de manière sécurisée</li>
                    <li className={styles.competence_list}>Stocker des données de manière sécurisée</li>
                </ul>
                <h3 className={styles.formation_title}> Formation scolaire et universitaire </h3>
                <ul>
                    <li className={styles.competence_list}>Diplôme de professeur des écoles</li>
                    <li className={styles.competence_list}>Licence en droit social</li>
                    <li className={styles.competence_list}>Baccalauréat Economique et social</li>
                </ul>
            </div>
        </div>
    )
}