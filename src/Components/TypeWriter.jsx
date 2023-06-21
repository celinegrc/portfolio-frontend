import {useState, useEffect} from "react";


export default function TypeWriter({text}){

const [currentText, setCurrentText] = useState("")
const [index, setIndex] = useState(0)


useEffect(() => {
    if (index < text.length-1){
        setTimeout(() => {
            setCurrentText (currentText + text.charAt(index))
            setIndex(index+1);
        }, 50)
    } 

}, [index, currentText, text])
 
 return (
    <span>{currentText}</span>
 )
}