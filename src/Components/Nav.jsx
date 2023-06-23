import styles from '../styles/nav.module.scss'
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'


export default function Nav() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  
    return (
      <header className={styles.header}>
        <NavLink to="/" className={styles.nav_link_name}>
          Céline Gourc
        </NavLink>
  
        <nav className={styles.nav_items_container}>
          {windowWidth < 550 ? (
            <>
              <NavLink  to="/"
                className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
                    <FontAwesomeIcon icon={faHouse} />
              </NavLink>

              <NavLink to="/competences" className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
              </NavLink>

              <NavLink to="/portfolio" className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
                    <FontAwesomeIcon icon={faLaptopCode} />
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
                <FontAwesomeIcon icon={faEnvelope} />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
                Accueil
              </NavLink>

              <NavLink
                to="/competences"
                className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
                Compétences
              </NavLink>

              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
                Réalisations
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.nav_link_active : styles.nav_link_inactive
                }>
               Contact
              </NavLink>
            </>
          )}
        </nav>
      </header>
    )
  }