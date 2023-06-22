import {useState} from "react"
import styles from "../styles/contactForm.module.scss"
import { Navigate } from 'react-router-dom'
import Loader from "./Loader"

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [object, setObject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);


  const [showError, setShowError] = useState(false)
  const [showErrorEmail, setShowErrorEmail] = useState(false)
  const [redirectToConfirmation, setRedirectToConfirmation] = useState(false)

 function reset(){
    setName('')
    setEmail('')
    setObject('')
    setMessage('')

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowErrorEmail(false)
    setIsLoading(true)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    setShowErrorEmail(true)
    setIsLoading(false)
    return
    
  }

    try  {
      let res = await fetch("https://portofolio-api-pi.vercel.app/post", {
        method: "POST",
        headers : {
          "Content-type" : "application/json",
        },
        body : JSON.stringify({
          name: name,
          email: email,
          object: object,
          message: message,
        }),
      });
      let data = await res.json()
      console.log(data)
      if (data.status === 200){
      reset()
      setRedirectToConfirmation(true)
      }
    } catch (error) {
      setShowError(true)
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Nom <span>*</span> </label>
      <input 
        id ="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
     

      <label htmlFor="email">Email <span>*</span></label>
      <input 
        id ="email" 
        onFocus={() => setShowErrorEmail(false)}
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <label htmlFor="object">Objet</label>
      <input 
        id = "object" 
        value={object} 
        onChange={(e) => setObject(e.target.value)} 
      />

      <label htmlFor ="message">Message <span>*</span></label>
      <textarea  
        id = "message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required
      />

     {/*<div className={styles.checkBox_container}>
        <input  required className ={styles.checkBox_container} type= "checkbox" />
        <label>En soumettant ce formulaire j'accepte que les données saisies soient utilisées afin d'être recontacté(e). 
          Aucune exploitation commerciale ne sera faite des données conservées. 
          Voir 
          <Link to ="/politique-de-confidentialite"> la politique de confidentialité </Link>.
        </label>
  </div>*/}

      {isLoading && <div className= {styles.loader_container}><Loader /></div>} 
      {redirectToConfirmation && <Navigate to="/confirmation" />}
      {showError && <p className = {styles.error_message}> L'envoi du message a échoué. </p>}
      {showErrorEmail && <p className = {styles.error_message}> Mail invalide ! </p>}
      <button  className={styles.button_submit}>Envoyer</button>
    </form>
  )
}