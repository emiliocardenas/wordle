import { useCallback, useEffect, useState } from "react";
import Line from './Line'
import Wordle from './Wordle'

const API_URL = 'http://localhost:4000/jokes/random'
const API_URL1 = 'http://localhost:4000/spanish'


function RootComponent(props) {

    const [solution, setSolution] = useState('');


    const englishWords = event => { 
        const fetchEnglishWord = async () => {
            const response = await fetch(API_URL);
            const words = await response.json()
            console.log("Only print once")
            const randomWord = words[Math.floor(Math.random() * words.length)]
            setSolution(randomWord)
        }
        fetchEnglishWord()
        event.currentTarget.disabled =true
        
    }

    const spanishWords = event => { 
        const fetchSpanishWord = async () => {
            const response = await fetch(API_URL1);
            const words = await response.json()
            console.log("Only print once")
            const randomWord = words[Math.floor(Math.random() * words.length)]
            setSolution(randomWord)
        }
        fetchSpanishWord()
        event.currentTarget.disabled = true

    }


    return(
        <div className="board">
         <h1>Hello CodeSandbox</h1>
         <h2>Look Alive!!</h2>
         <button onClick={englishWords}>
            English
        </button>
        <button onClick={spanishWords}>
            Spanish
        </button>
        
         { solution && <Wordle solution = {solution}/>}
         {/* {
            guesses.map(guess => {
                return (
                    <Line guess={guess ?? ''} />
                )
            })
         }
         {currentGuess} */}
        </div>
    )
}
export default RootComponent;
