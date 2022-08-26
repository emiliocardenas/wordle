import { useEffect, useState } from "react";
import Line from './Line'
import Wordle from './Wordle'

const API_URL = 'http://localhost:4000/jokes/random'

function RootComponent(props) {

    const [solution, setSolution] = useState('')
    // const [guesses, setGuesses] = useState(Array(6).fill(null))
    // const [currentGuess, setCurrentGuess] = useState('')

    // useEffect(() => {
    //     const handleType = (event) => {
    //         setCurrentGuess(oldGuess => oldGuess + event.key)
    //     }
    //     window.addEventListener('keydown', handleType);

    //     return () => window.removeEventListener('keydown', handleType)
    
    

    // }, [])
    

    useEffect(() => {
        const fetchWord = async () => {
            const response = await fetch(API_URL)
            const words = await response.json()
            const randomWord = words[Math.floor(Math.random() * words.length)]
            console.log("Only print once")
            setSolution(randomWord)
        }
        fetchWord();
    }, [setSolution])


    
    


    return(
        <div className="board">
         <h1>Hello CodeSandbox</h1>
         <h2>Look Alive!!</h2>
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
