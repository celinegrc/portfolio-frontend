import styles from '../styles/card.module.scss';
import Tags from './Tags';
import workList from "../datas/workList.json"
import linkIcon from "../images/link-solid.png";

export default function Card({id, cover, title, link, linkText, mission, problematic}) {
    
    const tag = workList.find(item => item.id === id).tags;

    return(  
            <article className = {styles.card_container}>
                <div className = {styles.card}>

                <div className={`${styles.side} ${styles.side_front}`}>
                        <div className={styles.card_title}><h2 > {title} </h2></div>
                        <div className={styles.mission}>
                            <p>{mission}</p>
                            <p>{problematic}</p>
                            </div>
        
                        <div className={styles.tags_container}>
                            {tag.map((tag, index) => (
                                <Tags key={`${index}-${tag}`} tagName={tag} />
                                ))}
                        </div>   
                    </div>

                    <div className={`${styles.side} ${styles.side_back}`}> 
                        <img src={cover} alt ={title} className={styles.card_image}/> 
                        <div className={styles.card_link_container}>

                            <a  href={link} className={styles.card_link}>
                                <img src = {linkIcon} alt='Lien'/>
                                <span>{linkText}</span>
                            </a>
                    </div>  
                    </div>

                </div>
            </article>
       
    )
}