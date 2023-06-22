import Card from "../Components/Card"
import workList from "../datas/workList.json"
import styles from "../styles/portfolio.module.scss"
import Footer from "../Components/Footer"
import github from "../images/github.svg"

export default function Portfolio(){
  console.log(workList)
  return(
    <div className={styles.portfolio_page}>
      <h1>Portfolio<span className={styles.blink_cursor}>|</span></h1>
      <div className = {styles.card_great_container}>
        <ul className={styles.card_list}>
        {workList.map(({id, cover, title, description, link, linkText, mission}) => ( 
            <li key={id} className={styles.slide_in}> 
              <Card id = {id} cover = {cover} title = {title} description= {description} link = {link} linkText ={linkText} mission ={mission}/> 
            </li>  
          ))}
        </ul>
        <p className= {styles.portfolio_github}> Tous mes projets sont sur 
          <a href = "https://github.com/celinegrc"> 
            <img src = {github} alt="logo de github" /> 
          </a>
        </p>
      </div>
      <Footer />
    </div>
  )
}