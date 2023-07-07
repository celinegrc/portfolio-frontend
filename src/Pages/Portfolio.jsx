import Card from "../Components/Card"
import { useState, useEffect} from "react";
import workList from "../datas/workList.json"
import styles from "../styles/portfolio.module.scss"
import Footer from "../Components/Footer"
import github from "../images/github.svg"

export default function Portfolio(){

  const [activeButton, setActiveButton] = useState(null);

  const isActiveButton = (buttonTarget) => {
    if (activeButton === buttonTarget) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonTarget);
    }
  };

  const workList3 = workList.filter((works) => works.type === 'Projets perso');
  const workList2 = workList.filter(
    (works) => works.type === 'Projets de formation'
  );


  useEffect(() => {
    setActiveButton('button1'); // Définit le bouton "Tous" comme actif au premier chargement
  }, []);

  console.log(activeButton);
  return (
    <div className={styles.portfolio_page}>
      <main>
        <h1 className={styles.portfolio_title}>
          Portfolio<span className={styles.blink_cursor}>|</span>
        </h1>

        <div className={styles.filter_buttons_container}>
          <button
            onClick={() => isActiveButton('button1')}
            className={activeButton === 'button1' ? styles.filter_button_active : styles.filter_button}
          >
            Tous
          </button>
          <button
            onClick={() => isActiveButton('button2')}
            className={activeButton === 'button2' ? styles.filter_button_active : styles.filter_button}
          >
            Projets de formation
          </button>
          <button
            onClick={() => isActiveButton('button3')}
            className={activeButton === 'button3' ? styles.filter_button_active : styles.filter_button}
          >
            Projets perso
          </button>
        </div>

        <div className={styles.card_great_container}>
          <ul className={styles.card_list}>
            {activeButton === 'button1' &&
              workList.map(
                ({ id, cover, title, description, link, linkText, mission, problematic }) => (
                  <li key={id} className={styles.slide_in}>
                    <Card
                      id={id}
                      cover={cover}
                      title={title}
                      description={description}
                      link={link}
                      linkText={linkText}
                      mission={mission}
                      problematic={problematic}
                    />
                  </li>
                )
              )}

            {activeButton === 'button2' &&
              workList2.map(
                ({ id, cover, title, description, link, linkText, mission, problematic }) => (
                  <li key={id} className={styles.slide_in}>
                    <Card
                      id={id}
                      cover={cover}
                      title={title}
                      description={description}
                      link={link}
                      linkText={linkText}
                      mission={mission}
                      problematic={problematic}
                    />
                  </li>
                )
              )}

            {activeButton === 'button3' &&
              workList3.map(
                ({ id, cover, title, description, link, linkText, mission, problematic }) => (
                  <li key={id} className={styles.slide_in}>
                    <Card
                      id={id}
                      cover={cover}
                      title={title}
                      description={description}
                      link={link}
                      linkText={linkText}
                      mission={mission}
                      problematic={problematic}
                    />
                  </li>
                )
              )}
          </ul>
            <p className= {styles.portfolio_github}> Tous mes projets sont sur 
              <a href = "https://github.com/celinegrc"> 
                <img src = {github} alt="logo de github" /> 
              </a>
            </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}