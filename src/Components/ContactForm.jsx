import {useState} from "react"
import styles from "../styles/contactForm.module.scss"
import { Navigate } from 'react-router-dom'


export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [object, setObject] = useState('')
  const [message, setMessage] = useState('')

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    setShowErrorEmail(true)
    return;
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
      {redirectToConfirmation && <Navigate to="/confirmation" />}
      {showError && <p className = {styles.error_message}> L'envoi du message a échoué. </p>}
      {showErrorEmail && <p className = {styles.error_message}> Mail invalide ! </p>}
      <button  className={styles.button_submit}>Envoyer</button>
    </form>
  );
};