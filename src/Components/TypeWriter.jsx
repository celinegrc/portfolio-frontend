import { useState } from "react"

export default function TypeWriter({text}){

    const [currentText, setCurrentText] = useState("")
    const [index, setIndex] = useState(0)
    console.log(`${currentText} + ${index}`)
        if (index < text.length)  {
            setTimeout(() => {
                setCurrentText (currentText + text.charAt(index))
                setIndex (index + 1)
            }, 50)
        }
    
        return (
            <span>{currentText}</span>
        )
    }


