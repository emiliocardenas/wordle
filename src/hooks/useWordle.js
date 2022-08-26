import { useState } from "react";



const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState(["hello"])
    const [isCorrect, setIsCorrect] = useState(false)
   
   
   
    const formatGuess = () => {
        console.log("formatting the guess: ", currentGuess)
        // setHistory(currentGuess)
        // console.log(history)


    }

    const addNewGuess = () => {

    }


    const handleKeyUp = (e) => {
        console.log(e.key)
        if (/^[A-Za-z]$/.test(e.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                
                    return prev + e.key
                })
            }
        }
        if (e.key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }
        if (e.key === 'Enter'){
            if (turn > 5){
                console.log("You use used all your guesses")
                return
            }

            if (history.includes(currentGuess)) {
                console.log("you already tried that word")
                return
            }
            if (currentGuess.length !== 5) {
                console.log("word must be 5 chars long")
                return
            }
            formatGuess()
            // setHistory(currentGuess)

        }


    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}


}

export default useWordle