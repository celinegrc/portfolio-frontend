import styles from '../styles/nav.module.scss';
import {NavLink} from "react-router-dom";

export default function Nav(){
    return(
        
            <nav className={styles.nav}>
              
                <NavLink  to ="/" className={styles.nav_link_name}>Céline Gourc </NavLink>
                
                <div className = {styles.nav_items_container}>
                    <NavLink  to ="/" className={({ isActive }) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)}>
                        Accueil
                    </NavLink>
                    <NavLink to ="/competences" className={({ isActive }) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)}>
                        Compétences
                        </NavLink>
                    <NavLink to ="/portfolio" className={({ isActive }) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)}>
                        Réalisations
                        </NavLink>
                    <NavLink to ="/contact" className={({ isActive }) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)}>
                        Me contacter
                    </NavLink>
                </div>
            </nav>
        
    )
}

