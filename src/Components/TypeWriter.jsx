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

}, [currentText, text, index])
 
 return (
    <span>{currentText}</span>
 )
}