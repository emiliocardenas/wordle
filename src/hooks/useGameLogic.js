import { useState } from "react";



const useGameLogic = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
   
   
   
    const formatGuess = () => {
        console.log("formatting the guess: ", currentGuess)
        // setHistory(currentGuess)
        // console.log(history)

        //breakdown "solution", a string, into an array.
        let solutionArray = [...solution]
        
        //breakdown "currentGuess", a string, into and array and map it over to an object
        let currentGuessArray = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        })
        
        //Green letters
        currentGuessArray.forEach((letterObject, i) => {
            if (solution[i] === letterObject.key) {
                console.log("hi", letterObject, i)
                currentGuessArray[i].color = 'green'
                solutionArray[i]=null
            }
        })
        
        //Yellow letters
        currentGuessArray.forEach((letterObject, i) => {
            if (solutionArray.includes(letterObject.key) && letterObject.color !== 'green') {
              currentGuessArray[i].color = 'yellow'
              solutionArray[solutionArray.indexOf(letterObject.key)] = null
            }
        })

        // console.log(solution)

        // console.log(currentGuessArray)

        return currentGuessArray
    


    }

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution){
            setIsCorrect(true)
        }

        setGuesses((prevGuesses) => {
          let newGuesses = [...prevGuesses]
          newGuesses[turn] = formattedGuess
          return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')

    }


    const handleKeyUp = (e) => {
        // console.log(e.key)
        // const result = e.key.toUpperCase()
        
        if (/^[A-Za-z]$/.test(e.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                
                    return prev.toUpperCase() + e.key.toUpperCase()
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

            const formatted = formatGuess()
            addNewGuess(formatted)
            // setHistory(currentGuess)

        }


    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}


}

export default useGameLogic